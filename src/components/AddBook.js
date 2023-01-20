import React from "react";

const AddBook = () => {
  return (
    <>
      <div>
        <h3>Add a new book: </h3>
      </div>
      <form>
        <input type="text" name="title"/>
        <input type="text" name="author"/>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default AddBook;