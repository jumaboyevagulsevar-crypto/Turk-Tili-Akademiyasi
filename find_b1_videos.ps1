$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120' }

# Search specifically for Turk tili grammar lessons B1 level
$queries = @(
    "ibrat farzandlari turk tili B1 daraja grammatika",
    "ibrat farzandlari turk tili 31-dars",
    "ibrat farzandlari turk tili 32-dars",
    "ibrat farzandlari turk tili B2 daraja",
    "ibrat farzandlari turk tili C1 daraja",
    "ibrat farzandlari turk tili C2 daraja"
)

$allIds = @{}

foreach ($q in $queries) {
    $encoded = [System.Uri]::EscapeDataString($q)
    $url = "https://www.youtube.com/results?search_query=$encoded"
    try {
        $resp = Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing -TimeoutSec 10
        # Extract videoId+title pairs
        $videoPattern = '"videoId":"([A-Za-z0-9_-]{11})","thumbnail".*?"title":\{"runs":\[.\{"text":"([^"]+)"'
        $matches2 = [regex]::Matches($resp.Content, '"videoId":"([A-Za-z0-9_-]{11})"')
        $titleMatches = [regex]::Matches($resp.Content, '"text":"([^"]{5,80}dars[^"]*)"')
        
        Write-Host "`n=== $q ===" -ForegroundColor Yellow
        $titleMatches | ForEach-Object { Write-Host "  TITLE: $($_.Groups[1].Value)" }
        $matches2 | Select-Object -First 10 | ForEach-Object { 
            $vid = $_.Groups[1].Value
            if (-not $allIds.ContainsKey($vid)) {
                $allIds[$vid] = $true
                Write-Host "  ID: $vid"
            }
        }
    } catch {
        Write-Host "ERROR: $_"
    }
    Start-Sleep -Milliseconds 500
}
