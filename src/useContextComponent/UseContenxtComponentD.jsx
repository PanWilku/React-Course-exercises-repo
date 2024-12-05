import { useContext } from "react";
import { UserContext } from "./UserContext";

function UseContenxtComponentD() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>ComponentD</h1>
      <h1>{user}</h1>
    </>
  );
}

export default UseContenxtComponentD;
