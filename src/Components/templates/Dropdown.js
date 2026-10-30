import React from "react";

function Dropdown({ title, options = [], onChange }) {
  return (
    <select
      onChange={(e) => onChange && onChange(e.target.value)}
      className="bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-xl outline-none cursor-pointer border border-zinc-700 hover:border-red-500 duration-300"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value} className="bg-zinc-900">
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
