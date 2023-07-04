import style from "./TaskEdit.module.css";

export default function TaskEdit({ task, setShowTaskCard }) {
  let start = task.start
    ? new Date(task.start).toISOString().split(".")[0]
    : "";
  let finish = task.finish
    ? new Date(task.finish).toISOString().split(".")[0]
    : "";
  return (
    <div className={style.CardEdit}>
      <button className={style.xBtn} onClick={() => setShowTaskCard(false)}>
        X
      </button>
      <form>
        <label className={style.formLabel}>
          Title
          <input
            className={style.CardDataInputData}
            type="text"
            defaultValue={task.title}
          />
        </label>
        <label className={style.formLabel}>
          Description
          <input
            className={style.CardDataInputData}
            type="text"
            defaultValue={task.description}
          />
        </label>
        <label className={style.formLabel}>
          Start
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={start}
          />
        </label>
        <label className={style.formLabel}>
          Finish
          <input
            className={style.CardDataInputData}
            type="datetime-local"
            defaultValue={finish}
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
