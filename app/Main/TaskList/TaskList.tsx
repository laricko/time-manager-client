import { Task } from "../Task";
import style from "./TaskList.module.css";

import { useState } from "react";

export default function TaskList({ tasks }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const handleFormClose = () => {
    setActiveCard(null);
  };

  return (
    <ul className={style.taskList}>
      {tasks.map((task, index) => (
        <li className={style.taskItem} key={index}>
          {
            <Task
              task={task}
              isActive={activeCard === task.id}
              handleCardClick={handleCardClick}
              handleFormClose={handleFormClose}
            />
          }
        </li>
      ))}
    </ul>
  );
}
