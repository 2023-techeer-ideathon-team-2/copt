const Radio = (props) => {
  const { text,value, ...others } = props;

  return (
    <label htmlFor={others.id}>
      <input type='radio' {...others} value={value}
        style={{
          verticalAlign: 'middle',
          appearance: 'none',
          border: 'max(2px, 0.1em) solid gray',
          borderRadius: '50%',
          width: '1.25rem',
          height: '1.25em',
          cursor: 'pointer',
          ":checked": {
            border: "0.4em solid #9B68B4"
          }
        }}
      />

      <span>{text}</span>
    </label>
  );
};

export default Radio;
