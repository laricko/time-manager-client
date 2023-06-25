import { useState } from "react";

const readableLenght = 200;

export default function ShowMoreText({ text }) {
  if (text.length < readableLenght) {
    return <p>{text}</p>;
  }

  const [showMore, setShowMore] = useState(false);

  return (
    <p>
      {showMore ? text : `${text.substring(0, readableLenght)}`}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "ShowMore"}
      </button>
    </p>
  );
}
