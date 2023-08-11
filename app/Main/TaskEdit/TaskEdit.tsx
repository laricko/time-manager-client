import { useForm } from "react-hook-form";

import style from "./TaskEdit.module.css";
import axiosService from "../axiosService";
import testCredentialsHeaders from "../testCredentialsHeaders";

export default function TaskEdit({ task, setShowTaskCard }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(task).length == 0) {
      axiosService
        .post("/task/", data, { headers: testCredentialsHeaders })
        .then((response) => {
          window.location.reload();
        });
    } else {
      const updatedFields = {};

      for (const key in data) {
        if (["start", "finish"].includes(key)) {
          data[key] = data[key].replace("T", " ");
        }
        if (data[key] !== task[key]) {
          updatedFields[key] = data[key];
        }
      }

      axiosService
        .patch(`/task/${task.id}`, updatedFields, {
          headers: testCredentialsHeaders,
        })
        .then((response) => {
          window.location.reload();
        });
    }
  };

  return (
    <div className={style.CardEdit}>
      <button className={style.xBtn} onClick={() => setShowTaskCard(false)}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={style.formLabel}>
          Title
          <input
            className={style.CardDataInputData}
            type="text"
            defaultValue={task.title}
            id="title"
            required
            {...register("title")}
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
            {...register("description")}
          />
        </label>
        <label className={style.formLabel}>
          Start
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={task.start}
            id="start"
            required
            {...register("start")}
          />
        </label>
        <label className={style.formLabel}>
          Finish
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={task.finish}
            id="finish"
            required
            {...register("finish")}
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
