import { useEffect, useState } from "react";
import axios from "axios";

import { TaskList } from "./TaskList";

export default function Main() {
  const [taskList, setTaskList] = useState([]);

  const testCredentials = { Authorization: "Basic bGFyaTpzdHJpbmc=" };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/task/", {
        headers: testCredentials,
      })
      .then((response) => {
        setTaskList(response.data);
      });
  }, []);

  return <TaskList tasks={taskList} />;
}
