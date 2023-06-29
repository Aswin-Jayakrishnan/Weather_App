from django.shortcuts import render,HttpResponse
import requests
from django.http import JsonResponse

# Create your views here.

def getData(request,loc):
    location = loc
    api_key = 'b3c4558c5bf84ec0a1f114634232706'  # Replace with your actual API key

    # Make a request to the weather API
    api_url = f'https://api.weatherapi.com/v1/current.json?key={api_key}&q={location}'
    response = requests.get(api_url)
    data = response.json()

    # Extract the necessary weather data
    weather = {
        'location': data['location']['name'],
        'temperature': data['current']['temp_c'],
        'humidity': data['current']['humidity'],
        'condition': data['current']['condition']['text'],
    }

    print(weather)

    return JsonResponse(weather)
