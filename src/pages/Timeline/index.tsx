import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../../components/Header";
import Tweet from "../../components/Tweet";
import TweetForm from "../../components/TweetForm";
import "./style.css";

const Timeline = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: "Meu primeiro Tweet!",
      image: "https://github.com/tabatasouto.png",
      name: "Tabata Souto",
      user: "@tabatasouto",
      comments: 2,
      shares: 10,
      likes: 50,
    },
    {
      id: 2,
      content: "Meu segundo Tweet!",
      image: "https://github.com/tabatasouto.png",
      name: "Tabata Souto",
      user: "@tabatasouto",
      comments: 0,
      shares: 1,
      likes: 20,
    },
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();
    setNewTweet("");
    setTweets([
      {
        id: tweets.length + 1,
        content: newTweet,
        image: "https://github.com/tabatasouto.png",
        name: "Tabata Souto",
        user: "@tabatasouto",
        comments: 0,
        shares: 0,
        likes: 0,
      },
      ...tweets,
    ]);
  };

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setNewTweet(event.target.value);
  };

  return (
    <main className="timeline">
      <Header title="Página inicial" isStatus={false} />
      <TweetForm
        placeholder="O que está acontecendo?"
        button="Tweetar"
        createNewTweet={createNewTweet}
        handleChange={handleChange}
        value={newTweet}
      />

      <div className="timeline-tweet">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            content={tweet.content}
            image={tweet.image}
            name={tweet.name}
            user={tweet.user}
            comments={tweet.comments}
            shares={tweet.shares}
            likes={tweet.likes}
          />
        ))}
      </div>
    </main>
  );
};

export default Timeline;
