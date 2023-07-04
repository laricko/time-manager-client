import { Task } from "../Task";
import style from "./TaskList.module.css";
import { TaskEdit } from "../TaskEdit";

import { useState } from "react";

export default function TaskList({ tasks }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const handleFormClose = () => {
    setActiveCard(null);
  };

  const [showCreateTask, setShowCreateTask] = useState(false);

  let taskList = (
    <div className={style.container}>
      <button
        className={style.buttonPlus}
        onClick={() => {
          setShowCreateTask(!showCreateTask);
        }}
      >
        +
      </button>
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
    </div>
  );

  let taskCreate = <TaskEdit task={{}} setShowTaskCard={setShowCreateTask} />;

  return showCreateTask ? taskCreate : taskList;
}
