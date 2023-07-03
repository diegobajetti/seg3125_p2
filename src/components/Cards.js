import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Python lessons!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-1.jpg"
              text="Introduction to Python Syntax and Variables"
              label="Beginner"
              path="/services"
            />
            <CardItem
              src="./images/img-5.jpg"
              text="Working with Control Flow in Python (Conditional Statements, Loops)"
              label="Amateur"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/img-3.jpg"
              text="Object-Oriented Programming in Python"
              label="Intermediate"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Advanced Python Libraries and Frameworks (NumPy, Django)"
              label="Advanced"
              path="/products"
            />
            <CardItem
              src="./images/img-4.jpg"
              text="Design Patterns and Best Practices in Python"
              label="Expert"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
