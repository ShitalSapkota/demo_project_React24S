const Button = ({ text, click, type = "button" }) => {
  return (
    <button type={type} onClick={click}>
      {text}
    </button>
  ); // (click) as a parameter calling function
};

export default Button;
