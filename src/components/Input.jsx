const Input = ({ val, onChangeValue }) => {

  const changeEventHandler = (event) => {
    const currentValue = event.target.value;
    onChangeValue(currentValue);
  };

  return (

    <div>
      <input value={val} onChange={changeEventHandler} />
      <p>Character Count: {val.length}</p>
    </div>
    
  );
};

export default Input;

/**
 * React checks the App component first.
 Because onChangeValue is defined as a function there,
 it can be used as a function in the Input component,
 allowing it to be called with the current input value.

 * App component is the parent component.
 * Input component is the child component.
 */
