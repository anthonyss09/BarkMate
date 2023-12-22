import { useState } from "react";

export default function FormCheckbox({
  label,
  handleCheckboxChange,
  inputs,
  id,
}) {
  const [inputValues, setInputValues] = useState([]);
  const handleChange = (e) => {
    const copyArray = inputValues.slice();
    const { value } = e.target;
    console.log(value);

    if (copyArray.includes(value)) {
      const index = inputValues.indexOf(value);
      copyArray.splice(index, 1);
      setInputValues(copyArray);
      handleCheckboxChange({ id, value: copyArray });
    } else {
      copyArray.push(value);
      setInputValues(copyArray);
      handleCheckboxChange({ id, value: copyArray });
    }
  };

  const content = inputs.map((input, index) => {
    return (
      <div key={index} className="form-checkbox-row">
        <input
          type="checkbox"
          id={input}
          name={input}
          value={input}
          onChange={handleChange}
        />
        <label htmlFor={input} className="form-checkbox-label">
          {input}
        </label>
      </div>
    );
  });

  return (
    <div className="form-checkbox-container">
      <span className="form-label">{label}</span>
      {content}
    </div>
  );
}
