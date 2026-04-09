$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120' }

$videoIds = @(
    "7Z77wVEurMM", "rrErv2Dmu88", "bAQp8ZhlpcM", "h0jo8mAjXl4",
    "sWb9VxN-7T0", "GfZ4PX0uNfc", "oVaHwYNufLM", "nN9ge5ZNcOk",
    "VYIz65GCd58", "zXdzBpN84NE", "ekzBa8DktYQ", "YzW4Ep9BOco",
    "uGa9vHHv3Qk", "DrafoegJBdU", "4xwVmelLTcI", "BGy7w-agwoA",
    "V2W83gFq8TY", "Ol30O1buDzA", "xmVjEGLp0UM", "-_5C9M9uCHE",
    "c7TBXdClLII", "9iyKbwRoR1I", "-TmZoUSFeII", "XHVUUoX9EhQ", "yFto2h6XyQQ"
)

foreach ($id in $videoIds) {
    $url = "https://www.youtube.com/watch?v=$id"
    try {
        $resp = Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing -TimeoutSec 5
        $titleMatch = [regex]::Match($resp.Content, '"title":"([^"]+)"')
        if ($titleMatch.Success) {
            $title = $titleMatch.Groups[1].Value
            Write-Host "$id | $title"
        } else {
            Write-Host "$id | (title not found)"
        }
    } catch {
        Write-Host "$id | ERROR"
    }
    Start-Sleep -Milliseconds 300
}
