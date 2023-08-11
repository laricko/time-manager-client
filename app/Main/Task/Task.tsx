import { useState } from "react";

import style from "./Task.module.css";
import { TaskEdit } from "../TaskEdit";
import { ShowMoreText } from "../ShowMoreText";
import axiosService from "../axiosService";
import testCredentialsHeaders from "../testCredentialsHeaders";

export default function Task({
  task,
  isActive,
  handleCardClick,
  handleFormClose,
}) {
  const onClick = () => {
    handleCardClick(task.id);
  };

  const onClose = () => {
    handleFormClose();
  };

  const [showDelete, setShowDelete] = useState(false);

  const card = (
    <div className={style.taskCard}>
      <div className={style.taskTime} onClick={onClick}>
        <div className={style.taskStart}>{task.start}</div>
        <div className={style.taskFinish}>{task.finish}</div>
      </div>
      <div className={style.taskContent} onClick={onClick}>
        <div className={style.taskTitleHeader}>
          <span>{task.title}</span>
          <button onClick={() => setShowDelete(true)}>X</button>
        </div>
        <div className={style.taskDesc}>
          <ShowMoreText text={task.description} />
        </div>
        <div className={style.taskDuration}>Duration: {task.duration}</div>
        <div className={style.taskCreated}>Created: {task.created_at}</div>
      </div>
    </div>
  );

  const taskEdit = <TaskEdit task={task} setShowTaskCard={onClose} />;

  let deleteTask = () => {
    axiosService
      .delete(`/task/${task.id}`, {
        headers: testCredentialsHeaders,
        withCredentials: false,
      })
      .then((response) => {
        window.location.reload();
      });
  };

  const taskDeleteConfirmation = (
    <div className={style.taskDeleteConfirmation}>
      <p>
        Are you sure want to delete <strong>{task.title}</strong>?
      </p>
      <div className={style.buttons}>
        <button onClick={deleteTask}>Yes</button>
        <button
          onClick={() => {
            setShowDelete(false);
            onClose();
          }}
        >
          No
        </button>
      </div>
    </div>
  );

  if (showDelete) {
    return (
      <div>
        {taskDeleteConfirmation}
        {card}
      </div>
    );
  }

  return isActive ? taskEdit : card;
}
