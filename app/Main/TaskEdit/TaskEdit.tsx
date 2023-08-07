import style from "./TaskEdit.module.css";
import axiosService from "../axiosService";
import axios from "axios";

export default function TaskEdit({ task, setShowTaskCard }) {
  let start = task.start
    ? new Date(task.start).toISOString().split(".")[0]
    : "";
  let finish = task.finish
    ? new Date(task.finish).toISOString().split(".")[0]
    : "";

  const testCredentials = {
    Authorization: "Basic bGFyaTpzdHJpbmc=",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };

  let taskButtonHandle;

  if (!task) {
    taskButtonHandle = (event) => {
      event.preventDefault();
      const data = event.target.elements;
      axiosService
        .post(
          "/task/",
          {
            title: data.title.value,
            description: data.description.value,
            start: data.start.value,
            finish: data.finish.value,
          },
          {
            headers: testCredentials,
            withCredentials: true,
          }
        )
        .then((response) => {
          window.location.reload();
        });
    };
  } else {
    taskButtonHandle = (event) => {
      event.preventDefault();
      const data = event.target.elements;
      axiosService
        .patch(
          `task/${task.id}`,
          {
            title: data.title.value,
            description: data.description.value,
            start: data.start.value,
            finish: data.finish.value,
          },
          { headers: testCredentials, withCredentials: true }
        )
        .then((response) => {
          window.location.reload();
        });
    };
  }

  return (
    <div className={style.CardEdit}>
      <button className={style.xBtn} onClick={() => setShowTaskCard(false)}>
        X
      </button>
      <form onSubmit={taskButtonHandle}>
        <label className={style.formLabel}>
          Title
          <input
            className={style.CardDataInputData}
            type="text"
            defaultValue={task.title}
            id="title"
            required
          />
        </label>
        <label className={style.formLabel}>
          Description
          <input
            className={style.CardDataInputData}
            type="text"
            defaultValue={task.description}
            id="description"
            required
          />
        </label>
        <label className={style.formLabel}>
          Start
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={start}
            id="start"
            required
          />
        </label>
        <label className={style.formLabel}>
          Finish
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={finish}
            id="finish"
            required
          />
        </label>
        <button type="submit" className={style.SubmitCardBtn}>
          Submit
        </button>
      </form>
      <ul className={style.CardNonEditableData}>
        <ol>Duration: {task.duration}</ol>
        <ol>Created: {task.created_at}</ol>
      </ul>
    </div>
  );
}
