import Navbar from "./Navbar";
import '../styles/AboutPage.css';

function AboutPage({classname='about-page'}) {
    return (
        <div className={classname}>
            <Navbar />
            <h2>
                Summary 
            </h2>
            <p> 
                This is React application that displays the weather over a location that the user specifies. The user inputs their city name, state code (if applicable), and country code in the text fields of the local weather page, then the LocalWeather component makes a fetch request to OpenWeather API to retrieve the current weather of the specified location. It then prints out that information on the /localweather page.
            </p>
            <h2>
                Technologies Used 
            </h2>
            <ol>
                <li>React: For displaying the web UI and the search results.</li>
                <li>useReducer: Handles the state in components.</li>
                <li>useEffect: Handles the side effects from the AJAX fetch request.</li>
                <li>AJAX: Sends requests that retrieves the data from the OpenWeather API.</li>
                <li>OpenWeather API: An open and free database for weather data.</li>
            </ol>
            <h2>
                Input for the Textfields
            </h2>
            <ol>
                <li>City Name: The name of the desired city. Example: 'Littleton'</li>
                <li>State Code: The code of the state. Only applies to the United States. Example: 'CO'</li>
                <li>Country Code: The code of the country. As per the OpenWeather API: "Please use ISO 3166 country codes." Example: 'US' for united States</li>
            </ol>
            <h2>
                Unsolved Problems
            </h2>
            <p>
                Adding a map that displays the weather as a color overlay would be ideal, but I didn't have enough time to implement that.
            </p> 
        </div>
    )
}

export default AboutPage;