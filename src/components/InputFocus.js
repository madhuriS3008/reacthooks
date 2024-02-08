import { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const focusHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Input focus using Ref</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusHandler}>Focus on input</button>
    </div>
  );
};

export default InputFocus;
