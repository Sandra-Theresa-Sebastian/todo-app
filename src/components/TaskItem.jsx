export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white p-2 rounded shadow">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} className="text-red-500">❌</button>
    </li>
  );
}
