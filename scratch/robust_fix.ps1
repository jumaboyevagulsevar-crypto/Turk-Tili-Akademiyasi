$f = 'logic.js'
$c = Get-Content $f -Raw

# Fix corruption by replacing known mangled sequences with literals
$c = $c -replace 'рџ‘‹', ([char]0xD83D + [char]0xDC4B)
$c = $c -replace 'Д°yi akЕџamlar', 'İyi akşamlar'
$c = $c -replace 'GГјnaydД±n', 'Günaydın'
$c = $c -replace 'GГ¶rГјЕџГјrГјz', 'Görüşürüz'
$c = $c -replace 'GeГ§miЕџ', 'Geçmiş'
$c = $c -replace 'Д°stek', 'İstek'
$c = $c -replace 'Д°vedilikle', 'İvedilikle'

# Fix hoisting: replace arrow function const with standard function declarations
$names = @("showView", "setLevel", "renderVideoLessons", "renderTopics", "updateStatsUI", "renderAdminVideoList", "renderUsersList")
foreach ($n in $names) {
    # Regex for const name = (params) => {
    $c = $c -replace "const $n = \((.*?)\) => \{", "function $n(`$1) {"
}

# Remove semicolons from the end of function declarations (optional but cleaner)
# foreach ($n in $names) { $c = $c -replace ("function $n\(.*?\)\s*\{(.*?)\}\s*;"), ("function $n($1) {$2}") }

# Force save as clean UTF-8 (No BOM)
[System.IO.File]::WriteAllText($f, $c, [System.Text.UTF8Encoding]::new($false))
Write-Host "Logic.js fixed and encoded successfully."
