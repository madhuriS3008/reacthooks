import React from "react";

const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange,
    })
  );

  return <div className="radioGroup">{RadioOptions}</div>;
};

export default RadioGroup;
