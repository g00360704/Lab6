import { useState } from "react";
import axios from "axios";

function Create() {
    // Defining state variables for title, cover, and author using useState hook
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Logging the values of title, cover, and author
        console.log("Title: " + title +
            " Cover:" + cover +
            " Author: " + author);

        // Creating a book object with the form input values
        const book = {
            title: title,
            cover: cover,
            author: author
        }

        // Sending a POST request to the server to create a new book
        axios.post('http://localhost:4000/api/book', book)
            .then(/* Handle success if needed */)
            .catch(/* Handle error if needed */);
    }

    return (
        <div>
            <h2>This is my Create Component</h2>
            {/* Creating a form with input fields for title, cover, and author */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    {/* Input field for book title */}
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    {/* Input field for book cover */}
                    <input
                        type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    {/* Input field for book author */}
                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    {/* Submit button for creating the book */}
                    <input
                        type="submit"
                        value="Create Book"
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;
