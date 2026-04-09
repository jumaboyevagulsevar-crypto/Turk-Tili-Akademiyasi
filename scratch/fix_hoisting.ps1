$file = 'logic.js'
$content = Get-Content $file -Raw
$content = $content -replace 'const setLevel = \(lvl\) => \{', 'function setLevel(lvl) {'
$content = $content -replace 'const showView = \(targetId\) => \{', 'function showView(targetId) {'
$content = $content -replace 'const renderVideoLessons = \(\) => \{', 'function renderVideoLessons() {'
$content = $content -replace 'const renderTopics = \(\) => \{', 'function renderTopics() {'
# Also fix the call to renderVideoLessons if it happens before assignment (which it does at the bottom)
# But wait, my manual fix already moved some things.
Set-Content $file $content -Encoding UTF8
Write-Host "Fixed functions in logic.js"
