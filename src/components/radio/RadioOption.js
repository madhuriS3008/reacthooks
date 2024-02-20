const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="radioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value}>{children} </label>
    </div>
  );
};

export default RadioOption;
