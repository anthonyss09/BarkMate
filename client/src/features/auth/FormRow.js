import Wrapper from "../../assets/wrappers/FormRowW";

export default function FormRow({
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
  classNames,
}) {
  return (
    <Wrapper>
      <div className="form-row">
        <label className="form-label" htmlFor={id}>
          {name}
        </label>
        <input
          className={`form-input ${classNames}`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </Wrapper>
  );
}
