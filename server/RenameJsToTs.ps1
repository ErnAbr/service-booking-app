# Path to the root directory of the Express project
$projectRoot = "C:\Users\ernab\Desktop\coding\Javascript Accelerator\service-booking-app\server"

# Get all .js files in the project directory and subdirectories
$jsFiles = Get-ChildItem -Path $projectRoot -Recurse -Filter "*.js"

# Loop through each .js file and rename it to .ts
foreach ($file in $jsFiles) {
    $newFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".ts")
    Rename-Item -Path $file.FullName -NewName $newFileName
    Write-Output "Renamed $($file.FullName) to $newFileName"
}

Write-Output "All .js files have been renamed to .ts"