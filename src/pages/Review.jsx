import { useState } from "react";
import { Toast } from "react-bootstrap";

export const Review = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    reviewTitle: "",
    reviewText: "",
    name: "",
  });

  const closeToast = () => {
    setShowToast(false);
    setFormData({
      reviewTitle: "",
      reviewText: "",
      name: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
  };

  const handleForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <h1 className="m-4">Add review about a book:</h1>
        <form onSubmit={handleSubmit} className="container">
          <div className="row">
            <label className="mt-3 col">Your name: </label>
            <input
              name="name"
              onChange={handleForm}
              type="text"
              required
              minLength={2}
              maxLength={35}
              className="m-3 col"
              value={formData.name}
            />
          </div>
          <div className="row">
            <label className="mt-3 col">Review title: </label>
            <input
              name="reviewTitle"
              onChange={handleForm}
              type="text"
              required
              minLength={2}
              maxLength={35}
              className="m-3 col"
              value={formData.reviewTitle}
            />
          </div>
          <div className="row">
            <label className="mt-3 col">Review text:</label>
            <textarea
              name="reviewText"
              onChange={handleForm}
              type="text"
              required
              minLength={10}
              maxLength={300}
              className="m-3 col"
              value={formData.reviewText}
            />
          </div>
          <button className="m-4 btn btn-success">Submit</button>
        </form>
      </div>

      <Toast
        show={showToast}
        onClose={closeToast}
        className="position-fixed top-50 start-50 bg-white translate-middle border-success p-3 border-5"
      >
        <Toast.Header>
          <strong className="me-auto m-auto">
            Thank you, {formData.name},
          </strong>
        </Toast.Header>
        <Toast.Body>Your review was submitted!</Toast.Body>
      </Toast>
    </>
  );
};
