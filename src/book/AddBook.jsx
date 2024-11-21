import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/book/bookSlice";
import ViewBook from "./ViewBook";

function AddBook() {
  const [book, setBook] = useState({});
  const [updateId, setUpdateId] = useState("");

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    // console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId == "") {
      dispatch(addBook(book));
      // dispatch(getBook(book));
    } else {
      dispatch(updateBook(book));
      setUpdateId("");
    }
    setBook({});
  };

  let handleUpdate = (book) => {
    setBook(book);
    setUpdateId(book.id);
  };

  return (
    <>
     <div className="container">
  <h2 className="text-center m-3 text-uppercase fw-bold text-success">
    <u>Add Book</u>
  </h2>
  <form
    className="mt-4 mx-auto p-4 rounded-4 shadow-lg bg-light"
    style={{ width: "40rem" }}
    onSubmit={handleSubmit}
  >
    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Book Name:</label>
      <input
        type="text"
        className="form-control border-2 rounded-pill"
        placeholder="Enter the title of the book"
        name="title"
        value={book.title || ""}
        onChange={handleInput}
      />
    </div>
    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Author:</label>
      <input
        type="text"
        className="form-control border-2 rounded-pill"
        placeholder="Enter the price in Rs."
        name="author"
        value={book.author || ""}
        onChange={handleInput}
      />
    </div>
    <div className="mb-4">
      <label className="form-label fw-bold text-primary">Description:</label>
      <textarea
        className="form-control border-2 rounded-4"
        placeholder="Enter a brief description of the book"
        rows="3"
        name="dsc"
        value={book.dsc || ""}
        onChange={handleInput}
      ></textarea>
    </div>
    <div className="mb-4">
      <label className="form-label fw-bold text-primary">CoverPage:</label>
      <input
        className="form-control border-2 rounded-4"
        type="text"
        name="image"
        value={book.image || ""}
        onChange={handleInput}
      ></input>
    </div>
   
    <div className="d-flex justify-content-center">
      <button type="submit" className="btn btn-success btn-lg rounded-pill px-5">
        <i className="bi bi-plus-circle"></i> Submit
      </button>
    </div>
  </form>
  <div className="mt-5">
    <ViewBook handleUpdate={handleUpdate} />
  </div>
</div>
    </>
  );
}

export default AddBook;
