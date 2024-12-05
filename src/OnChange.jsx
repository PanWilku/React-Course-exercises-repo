import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

function OnChange({ setInputLength }) {
  const [name, setName] = useState("Guest");
  // Update input length whenever `name` changes
  useEffect(() => {
    setInputLength(name.length);
  }, [name, setInputLength]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={(e) => handleNameChange(e)}></input>
    </div>
  );
}

OnChange.propTypes = {
  setInputLength: PropTypes.func.isRequired,
};

export default OnChange;
