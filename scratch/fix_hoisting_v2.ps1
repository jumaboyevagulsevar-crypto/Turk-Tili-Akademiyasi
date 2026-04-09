$file = 'logic.js'
$c = Get-Content $file -Raw

# Helper to convert arrow function to named function
function Convert-ArrowToFunction($content, $name) {
    # Match: const name = (params) => {
    $pattern = "const $name = \((.*?)\) => \{"
    $replacement = "function $name(`$1) {"
    return ($content -replace $pattern, $replacement)
}

# List of functions to convert
$functions = @(
    "updateStatsUI",
    "renderAdminVideoList",
    "renderUsersList",
    "openLessonTasks",
    "closeLessonModal",
    "startLesson",
    "submitTask",
    "addXP",
    "completeLesson",
    "handleSendMessage"
)

foreach ($f in $functions) {
    $c = Convert-ArrowToFunction $c $f
}

Set-Content $file $c -Encoding UTF8
Write-Host "Aggressively fixed hoisting for more functions in logic.js"
