import React, { useState } from "react";

const BookCard = ({ book }) => {
  const { volumeInfo, saleInfo } = book;
  const { title, authors, description, imageLinks } = volumeInfo;

  const [showDescription, setShowDescription] = useState(false);

  const handleDescriptionToggle = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  // Function to handle image load errors and provide a fallback image
  const handleImageError = (event) => {
    event.target.src = "./images/book.jpg"; // Replace with the path to your default book image
  };

  return (
    <div className="card">
      <img
        src={imageLinks?.thumbnail}
        alt={title}
        onError={handleImageError}
      />
      <h3>{title}</h3>
      {authors && <p>Author(s): {authors.join(", ")}</p>}
      {/* Display the price of the book */}
      {saleInfo?.listPrice ? (
        <p>
          Price: {saleInfo.listPrice.amount} {saleInfo.listPrice.currencyCode}
        </p>
      ) : (
        <p>Price: not available</p>
      )}
      {/* Toggle button to show/hide description */}
      <button onClick={handleDescriptionToggle}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {/* Show the description only when the button is clicked */}
      {showDescription && <p>{description}</p>}
    </div>
  );
};

export default BookCard;

    