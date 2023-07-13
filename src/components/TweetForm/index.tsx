import { ChangeEvent, FormEvent } from "react";
import "./style.css";

interface TweetFormProps {
  placeholder: string;
  button: string;
  value: string;
  createNewTweet: (event: FormEvent) => void;
  handleChange: (event: ChangeEvent<{ value: string }>) => void;
}

const TweetForm = (props: TweetFormProps) => {
  const { placeholder, button, createNewTweet, handleChange, value } = props;

  return (
    <form onSubmit={createNewTweet} className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/tabatasouto.png" alt="Tabata Souto" />
        <textarea
          onChange={handleChange}
          id="tweet"
          placeholder={placeholder}
          value={value}
        />
      </label>
      <button type="submit">{button}</button>
    </form>
  );
};

export default TweetForm;
