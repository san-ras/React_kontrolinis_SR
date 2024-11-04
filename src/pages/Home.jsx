import axios from "axios";
import { useState, useEffect } from "react";
import { BookCard } from "../BookCard";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [booksData, setBooksData] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [reloadBooks, setReloadBooks] = useState(false);

  useEffect(() => {
    axios
      .get("https://mondayexam.onrender.com/api/v1/books")
      .then((response) => {
        setBooksData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [reloadBooks]);

  const handleSearchChange = (event) => {
    setSearchCategory(event.target.value);
  };

  if (isLoading) {
    return <div>Please wait, loading...</div>;
  }

  const filteredBooks = booksData.filter((book) =>
    book.category.includes(searchCategory)
  );

  return (
    <div className="mt-5">
      <h1 className="m-4">Hey! Welcome</h1>
      <h3 className="m-4">Here are all the books:</h3>

      <div className="mt-5">
        <h4 className="m-4">Search books by category</h4>
        <input
          type="text"
          value={searchCategory}
          onChange={handleSearchChange}
          placeholder="Enter category"
          minLength={1}
        />
      </div>

      {filteredBooks?.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.id}
          cover={book.cover}
          reserved={book.reserved}
        />
      ))}
    </div>
  );
};
