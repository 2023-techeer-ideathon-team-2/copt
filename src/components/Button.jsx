const Button = (props) => {
  return <button {...props} 
            style={{
              width: "40%",
              height: "60px",
              color: "#fff",
              backgroundColor: props.backgroundColor, 
              borderRadius: "11px",
              border: "none"
            }}>
              {props.text}
            </button>;
};

export default Button;
