import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
    reserved: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    axios
      .post("https://mondayexam.onrender.com/api/v1/books", formData)
      .then((res) => {
        if (res.data.id > 0) {
          alert(
            `Book ${formData.title} has been added with id ${res.data.id}!`
          );
          navigate("/");
        }
      })
      .catch((err) =>
        setError("The request could not be processed, please try again later.")
      );
  };

  const handleForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Add a new book</h1>
      <form className="mt-5 container" onSubmit={handleSubmit}>
        <div className="row m-3">
          <label className="col">Title: </label>
          <input
            name="title"
            onChange={handleForm}
            type="text"
            required
            className="col"
            value={formData.title}
          />
        </div>
        <div className="row m-3">
          <label className="col">Author: </label>
          <input
            name="author"
            onChange={handleForm}
            type="text"
            required
            className="col"
            value={formData.author}
          />
        </div>
        <div className="row m-3">
          <label className="col">Category: </label>
          <input
            name="category"
            onChange={handleForm}
            type="text"
            required
            className="col"
            value={formData.category}
          />
        </div>
        <div className="row m-3">
          <label className="col">Cover URL: </label>
          <input
            name="cover"
            onChange={handleForm}
            type="text"
            required
            className="col"
            value={formData.cover}
          />
        </div>
        <div className="row m-3">
          <label className="col">Price: </label>
          <input
            name="price"
            type="number"
            step={0.01}
            onChange={handleForm}
            min={0.01}
            required
            className="col"
            value={formData.price}
          />
        </div>
        <button className="btn btn-success mt-3 mb-5">Submit</button>
      </form>
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
};
