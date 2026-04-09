$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120' }
$url = 'https://www.youtube.com/results?search_query=ibrat+farzandlari+turk+tili+darslari'
$resp = Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing
$pattern = '"videoId":"([A-Za-z0-9_\-]{11})"'
$found = [regex]::Matches($resp.Content, $pattern)
$ids = $found | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique | Select-Object -First 30
$ids | ForEach-Object { Write-Host $_ }
