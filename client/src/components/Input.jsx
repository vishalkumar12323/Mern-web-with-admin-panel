function Input(props) {
  return (
    <>
      <div className="input-box my-3">
        <label htmlFor={props.idLabel}>{props.label}</label>
        <input
          type={props.inputType}
          placeholder={props.placeHolder}
          onChange={props.handleInputChange}
          value={props.value}
          name={props.name}
          id={props.idLabel}
          autoComplete="off"
          className="py-2 px-2 w-full border outline-none tracking-wider focus:shadow shadow-black transition-shadow rounded"
        />
      </div>
    </>
  );
}

export { Input };
