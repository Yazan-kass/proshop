import "./style.css";

function Review({ UserName, rate, Date, Review }) {
  return (
    <div>
      <div className="Review flex">
        <h5>{UserName}</h5>
        <div className="DateOfReview flex">
          <div className="rating flex">{rate}</div>
          <div className="Date">{Date}</div>
        </div>
        <div className="ReviewDescription">
          <p>{Review}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
