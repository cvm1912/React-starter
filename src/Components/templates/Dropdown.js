import React from "react";

function Dropdown({ title, options = [], onChange }) {
  return (
    <select
      onChange={(e) => onChange && onChange(e.target.value)}
      className="bg-zinc-800 text-zinc-400 px-3 py-1 rounded-lg outline-none cursor-pointer"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
