React Weather Application by Derek Coleman

Netlify Link: https://willowy-faloodeh-5b0f6f.netlify.app/

Summary: This is React application that displays the weather over a location that the user specifies. The user inputs their city name, state code (if applicable), and country code in the text fields, then the LocalWeather component makes a fetch request to OpenWeather API to retrieve the current weather of the specified location. It then prints out that information on the /localweather page.

Technologies Used: 1. React: For displaying the web UI and the search results.
                   2. useReducer: Handles the state in components.
                   3. useEffect: Handles the side effects from the AJAX fetch request.
                   4. AJAX: Sends requests that retrieves the data from the OpenWeather API.
                   5. OpenWeather API: An open and free database for weather data.

Input for the Textfields: 1. City Name: The name of the desired city. Example: 'Littleton'
                          2. State Code: The code of the state. Only applies to the United States. Example: 'CO'
                          3. Country Code: The code of the country. As per the OpenWeather API: "Please use ISO 3166 country codes." Example: '1' for united States

Unsolved Problems: Adding a map that displays the weather as a color overlay would be ideal, but I didn't have enough time to implement that. 