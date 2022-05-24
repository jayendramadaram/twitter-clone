import uuid
import requests
headers = {
    'api-auth': str(uuid.uuid4())
}

craft_num = 'N628TS'
response = requests.get(
    f'https://adsbexchange.com/api/aircraft/call{craft_num}', headers=headers)
data = response.text

print(data)
