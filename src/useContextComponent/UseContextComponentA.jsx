import { useState } from "react";
import { UserContext } from "./UserContext";
import UseContenxtComponentB from "./UseContenxtComponentB";

function UseContenxtComponentA() {
  function handleUserName(e) {
    setValue(e.target.value);
  }

  function handlechangeName(value) {
    setUser(value);
  }

  const [user, setUser] = useState("SIEMA");
  const [userName, setValue] = useState("");

  return (
    <>
      <h1>ComponentA</h1>
      <h1>{user}</h1>
      <input value={userName} onChange={(e) => handleUserName(e)}></input>
      <button onClick={() => handlechangeName(userName)}>Change Name</button>
      <UserContext.Provider value={user}>
        <UseContenxtComponentB></UseContenxtComponentB>
      </UserContext.Provider>
    </>
  );
}

export default UseContenxtComponentA;
