import { TestData } from "app/TestData";
import { TaskList } from "./TaskList";

export default function Main() {
  return <TaskList tasks={TestData} />;
}
