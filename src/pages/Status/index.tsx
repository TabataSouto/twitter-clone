import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../../components/Header";
import Tweet from "../../components/Tweet";
import TweetForm from "../../components/TweetForm";
import "./style.css";

const Status = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    {
      id: 1,
      image: "https://github.com/tabatasouto.png",
      name: "Alessandra",
      user: "@alegames",
      content: "Concordo...",
      comments: 0,
      shares: 1,
      likes: 10,
    },
    {
      id: 2,
      image: "https://github.com/tabatasouto.png",
      name: "Marcedo in Game",
      user: "@mercadoingame",
      content: "Olha, faz sentido!",
      comments: 2,
      shares: 0,
      likes: 25,
    },
    {
      id: 3,
      image: "https://github.com/tabatasouto.png",
      name: "Ruby",
      user: "@lobemanhwa",
      content: "Parabéns pelo progresso.",
      comments: 0,
      shares: 0,
      likes: 80,
    },
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();
    setNewAnswer("");
    setAnswers([
      {
        id: answers.length + 1,
        content: newAnswer,
        image: "https://github.com/tabatasouto.png",
        name: "Tabata Souto",
        user: "@tabatasouto",
        comments: 0,
        shares: 0,
        likes: 0,
      },
      ...answers,
    ]);
  };

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setNewAnswer(event.target.value);
  };

  return (
    <main className="status">
      <Header title="Tweet" isStatus={true} />
      <Tweet
        image="https://github.com/tabatasouto.png"
        name="Tabata Souto"
        user="@tabatasouto"
        comments={3}
        shares={10}
        likes={50}
        content={
          "Hoje terminei uma das melhores Masterclass de React que eu já vi! Apesar de existirem várias tecnologias Front-end, acho que o React está em disparado como uma das favoritas."
        }
      />
      <TweetForm
        placeholder="Tweetar sua resposta!"
        button="Responder"
        value={newAnswer}
        createNewTweet={createNewTweet}
        handleChange={handleChange}
      />
      {answers.map((a) => (
        <Tweet
          key={a.id}
          content={a.content}
          image={a.image}
          name={a.name}
          user={a.user}
          comments={a.comments}
          shares={a.shares}
          likes={a.likes}
        />
      ))}
    </main>
  );
};

export default Status;
