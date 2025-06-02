import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="p-2 border rounded w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}
