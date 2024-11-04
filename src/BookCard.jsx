import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BookCard = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [book, setBook] = useState({
    title: props.title,
    author: props.author,
    category: props.category,
    price: props.price,
    cover: props.cover,
    reserved: !props.reserved,
  });

  const handleReserved = () => {
    axios
      .put(`https://mondayexam.onrender.com/api/v1/books/${props.id}`, book)
      .then((res) => {
        if (res.data.id > 0) {
          setError("");
          window.location.reload();
          //zinau, kad cia ne great solution info atnaujinimui, bet nebespejau pakeist
        }
      })
      .catch((err) =>
        setError("Something went wrong, please try again later.")
      );
  };

  return (
    <div className="row m-5 border-success border border-2 p-3">
      <div className="col">
        <img
          src={props.cover}
          alt="Book cover"
          className="card-img-top"
          style={{ width: "100%", height: "300px", objectFit: "contain" }}
        />
      </div>
      <div className="col">
        <p data-testid="book-title" className="m-4">
          <strong>{props.title}</strong>
        </p>
        <p>Author: {props.author}</p>
        <p>Category: {props.category}</p>
        {props.reserved ? (
          <button onClick={handleReserved} className="btn btn-primary mt-5">
            Return
          </button>
        ) : (
          <button onClick={handleReserved} className="btn btn-success mt-5">
            Borrow
          </button>
        )}
        <div>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
};
