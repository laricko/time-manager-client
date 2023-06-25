import style from "./Task.module.css";

import { ShowMoreText } from "../ShowMoreText";

export default function Task({ task }) {
  return (
    <div className={style.taskCard}>
      <div className={style.taskTime}>
        <div className={style.taskStart}>{task.start}</div>
        <div className={style.taskFinish}>{task.finish}</div>
      </div>
      <div className={style.taskContent}>
        <div className={style.taskTitle}>{task.title}</div>
        <div className={style.taskDesc}>
          <ShowMoreText text={task.description} />
        </div>
        <div className={style.taskDuration}>Duration: {task.duration}</div>
        <div className={style.taskCreated}>Created: {task.created_at}</div>
      </div>
    </div>
  );
}
