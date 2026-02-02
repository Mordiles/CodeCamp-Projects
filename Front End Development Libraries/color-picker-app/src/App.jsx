import { useState } from "react";

export function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }} className="space-y-5">
      <p>Choose a color using the input below:</p>
      <input id="color-input" className="bg-white" type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
