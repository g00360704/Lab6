// Defining a functional React component named 'Content'
function Content(){
    return (
        <div>
            <h2>Hello World!</h2> <!-- Display a "Hello World!" heading -->
            <h2>It is {new Date().toLocaleTimeString()}.</h2> <!-- Display the current time using JavaScript's Date object -->
        </div>
    );
}

// Exporting the 'Content' component so it can be used in other parts of the application
export default Content;
