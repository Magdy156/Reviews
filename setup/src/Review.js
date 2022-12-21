import React, { useState } from "react";
import people from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber == index) {
      randomNumber += 1;
    }
    setIndex(checkNum(randomNumber));
  };
  const nextPerson = () => {
    const newIndex = index + 1;
    setIndex(checkNum(newIndex));
  };
  const prevPerson = () => {
    const newIndex = index - 1;
    setIndex(checkNum(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <div className="job">{job}</div>
      <div className="info">{text}</div>
      <div className="buttton-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;
