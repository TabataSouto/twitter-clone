// import React, { ReactHTMLElement } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

interface ITweetProps {
  image: string;
  name: string;
  user: string;
  comments: number;
  shares: number;
  likes: number;
  content: string;
}

const Tweet = (props: ITweetProps) => {
  const { image, name, user, comments, shares, likes, content } = props;

  return (
    <Link to="/status" className="tweet">
      <img src={image} alt="Tabata Souto" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{name}</strong>
          <span>{user}</span>
        </div>
        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {comments}
          </button>
          <button type="button">
            <ArrowsClockwise />
            {shares}
          </button>
          <button type="button">
            <Heart />
            {likes}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
