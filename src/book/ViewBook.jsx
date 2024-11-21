import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBook } from "../features/book/bookSlice";

function ViewBook({handleUpdate}) {
  const { books, loading, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>{error}</div>;

  return (
    <>

<div className="container w-50">
        <h2 className="text-center m-4">
          <u className="font-thin">Books</u>
        </h2>
        <div className="row justify-content-center my-3">
          {books.map((book) => {
            return (
              <div className=" d-flex justify-between col-6 my-3" key={book.id}>
                <div
                  className="card border-0 shadow-lg rounded-4"
                  style={{ backgroundColor: "#f9f9f9", width: "20rem" }}
                >
                  <div
                    className="card-header text-white text-center fw-bold"
                    style={{ backgroundColor: "black" }}
                  >
                    {book.title}
                  </div>
                  <div className="text-center  p-2">
                    <img src={book.image} width="100%"  height="100%" alt={book.title} />
                  </div>
                  <div className="card-body p-4">
                    <p className="card-text mb-3 text-muted">
                      {book.dsc}
                    </p>
                    <p className="card-title fs-5 mb-4 text-dark">
                       Author : Rs.{book.author}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-danger w-45 rounded-pill"
                        onClick={() => dispatch(deleteBook(book.id))}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                      <button
                        className="btn btn-success w-45 rounded-pill"
                        onClick={() => handleUpdate(book)}
                      >
                        <i className="bi bi-pencil-square"></i> Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
}

export default ViewBook;
