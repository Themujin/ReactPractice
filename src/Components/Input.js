const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id} className="control-label">
        {props.lable}
      </label>
      <br />
      <input
        type="text"
        id="props.id"
        value={props.value}
        onChange={(e) => props.onChange(props.id, e.target.value)}
      />
    </>
  );
};

export default Input;
