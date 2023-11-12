// Importing the 'Card' component from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

// Defining a functional React component named 'BookItem' that takes 'props' as its parameter
function BookItem(props) {
  return (
    <div>
      {/* Creating a Bootstrap Card component to display book information */}
      <Card>
        {/* Displaying the book's title as the Card header */}
        <Card.Header>{props.mybook.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Displaying the book's thumbnail image */}
            <img src={props.mybook.thumbnailUrl} alt="Book Thumbnail" />

            <footer>
              {/* Displaying the first author's name */}
              {props.mybook.authors[0]}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Exporting the 'BookItem' component so it can be used in other parts of the application
export default BookItem;
