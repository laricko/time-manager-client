import { Task } from "../Task";

import style from "./TaskList.module.css";

export default function TaskList({ tasks }) {
  return (
    <ul className={style.taskList}>
      {tasks.map((item: number, index) => (
        <li className={style.taskItem} key={index}>
          {<Task task={item} />}
        </li>
      ))}
    </ul>
  );
}
