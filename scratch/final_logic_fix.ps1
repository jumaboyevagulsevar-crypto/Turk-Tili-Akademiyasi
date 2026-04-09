$f = 'logic.js'
$c = Get-Content $f -Raw

# 1. Convert arrow functions to hoisted functions to prevent TDZ errors
# Standard function declarations are hoisted, arrow functions are not.
$functionsToFix = @("showView", "setLevel", "renderVideoLessons", "renderTopics", "updateStatsUI")

foreach ($name in $functionsToFix) {
    # Match pattern: const setLevel = (lvl) => {
    # We replace with: function setLevel(lvl) {
    $c = $c -replace "const $name = \((.*?)\) => \{", "function $name(`$1) {"
}

# 2. Fix the corrupted emoji from previous encoding issues
# рџ‘‹ is the UTF-8 bytes for 👋 interpreted as Windows-1252/UTF-8 mixup
$c = $c -replace 'рџ‘‹', '👋'

# 3. Ensure clean UTF-8 without BOM (Byte Order Mark)
# Using [System.Text.UTF8Encoding]::new($false) ensures no BOM
[System.IO.File]::WriteAllText($f, $c, [System.Text.UTF8Encoding]::new($false))

Write-Host "Logic.js has been successfully washed, hoisted, and UTF-8 encoded."
