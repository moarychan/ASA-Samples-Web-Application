
[CmdLetBinding()]
param()

# Set the API endpoint URL
$apiUrl = 'https://management.azure.com/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.AppPlatform/Spring/$ASA_SERVICE_NAME/buildServices/default?api-version=2023-05-01-preview'
$state = $null
$timeout = New-TimeSpan -Seconds 180
$sw = [System.Diagnostics.Stopwatch]::StartNew()
$accessToken = (Get-AzAccessToken).Token
while ($sw.Elapsed -lt $timeout) {
    $headers = @{
        'Authorization' = 'Bearer ' + $accessToken
    }
    $response = Invoke-WebRequest -Uri $apiUrl -Headers $headers -Method GET
    $state = $response | jq '.properties.provisioningState'
    if ($state -eq 'Succeeded') {
        break
    }
    Start-Sleep -Seconds 3
}

Write-Output "State: $state"
