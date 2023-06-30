import style from "./Task.module.css";

import { TaskEdit } from "../TaskEdit";
import { ShowMoreText } from "../ShowMoreText";

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

  const card = (
    <div className={style.taskCard} onClick={onClick}>
      <div className={style.taskTime}>
        <div className={style.taskStart}>{task.start}</div>
        <div className={style.taskFinish}>{task.finish}</div>
      </div>
      <div className={style.taskContent}>
        <div className={style.taskTitleHeader}>
          <span>{task.title}</span>
          <button onClick={() => console.log("Delete task")}>X</button>
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

  return isActive ? taskEdit : card;
}
