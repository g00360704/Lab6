import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    // Defining state variable 'data' to store book data received from the server
    const [data, setData] = useState([]);

    // Using the useEffect hook to fetch data from the server when the component mounts
    useEffect(() => {
        // Sending a GET request to the server to retrieve a list of books
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    // Updating the 'data' state with the book data from the response
                    setData(response.data.myBooks);
                }
            )
            .catch(
                (error) => {
                    // Handle errors if the GET request fails
                    console.log(error);
                }
            );
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <h2>Hello from my Read Component</h2>
            {/* Render the 'Books' component and pass the 'data' state as a prop */}
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;
