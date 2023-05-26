const Radio = (props) => {
  const { text, ...others } = props;

  return (
    <label htmlFor={others.id}>
      <input type='radio' {...props} />
      <span>{text}</span>
    </label>
  );
};

export default Radio;
