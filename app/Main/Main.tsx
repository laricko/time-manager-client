import { useEffect, useState } from "react";
import axios from "axios";

import { TaskList } from "./TaskList";
import testCredentialsHeaders from "./testCredentialsHeaders";
import axiosService from "./axiosService";

export default function Main() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axiosService
      .get("/task/", {
        headers: testCredentialsHeaders,
        withCredentials: false
      })
      .then((response) => {
        setTaskList(response.data);
      });
  }, []);

  return <TaskList tasks={taskList} />;
}
