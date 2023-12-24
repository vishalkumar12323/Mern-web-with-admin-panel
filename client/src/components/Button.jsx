function Button(props) {
  return (
    <button
      className={`text-${props.color} hover:text-white py-2 px-5 bg-transparent rounded transition cursor-pointer  hover:bg-blue-500 border border-blue-500`}
      type={props.type}
      onClick={props.showPage}
    >
      {props.text}
    </button>
  );
}
export { Button };
