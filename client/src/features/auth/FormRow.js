import Wrapper from "../../assets/wrappers/FormRowW";

export default function FormRow({ id, name, type, value }) {
  return (
    <Wrapper>
      <div className="form-row">
        <label className="form-label" for={id}>
          {name}
        </label>
        <input
          className="form-input"
          type={type}
          id={id}
          name={name}
          value={value}
        />
      </div>
    </Wrapper>
  );
}
