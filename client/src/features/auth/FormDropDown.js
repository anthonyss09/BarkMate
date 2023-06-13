import Wrapper from "../../assets/wrappers/FormW";

export default function FormDropDown({
  options,
  label,
  handleInputChange,
  id,
}) {
  const content = options.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <div className="form-input">
          {" "}
          <select
            name={label}
            id={id}
            className="form-select"
            onChange={handleInputChange}
          >
            {content}
          </select>
        </div>
      </div>
    </Wrapper>
  );
}
