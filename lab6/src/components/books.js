// Importing the 'BookItem' component from "./bookItem"
import BookItem from "./bookItem";

// Defining a functional React component named 'Books' that takes 'props' as its parameter
function Books(props){
    // Map through the 'myBooks' array in 'props' and render a 'BookItem' component for each book
    return props.myBooks.map(
        (book) => {
            // Passing the book object as a prop to the 'BookItem' component
            // Using 'book.isbn' as a unique key for each rendered 'BookItem'
            return <BookItem mybook={book} key={book.isbn}></BookItem>
         }
    );
}

// Exporting the 'Books' component so it can be used in other parts of the application
export default Books;
