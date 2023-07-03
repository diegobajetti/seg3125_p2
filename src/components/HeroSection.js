import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["filename", "datafile", "inputfile", "PyCodeX"],
    loop: 1,
    delaySpeed: 2000,
  });

  return (
    <div className="hero-container">
      <video
        src={"./seg3125_p2.github.io/videos/video-0.mp4"}
        autoPlay="autoPlay"
        loop="loop"
        muted="muted"
      />
      <h1>PyCodeX</h1>
      <p>
        with open('<span>{text}</span>
        .txt', 'r') as file:
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          print('GET_STARTED')
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          print('LEARN_MORE')
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="fa-play-circle"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
