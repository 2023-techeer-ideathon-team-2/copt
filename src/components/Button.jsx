const Button = (props) => {
  return (
    <button
      {...props}
      style={{
        width: '40%',
        height: '60px',
        color: '#fff',
        backgroundColor: props.backgroundcolor,
        borderRadius: '11px',
        border: 'none',
        cursor: 'pointer',
        ...props.style,
      }}>
      {props.text}
    </button>
  );
};

export default Button;
