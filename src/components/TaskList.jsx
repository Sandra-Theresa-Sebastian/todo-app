import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
