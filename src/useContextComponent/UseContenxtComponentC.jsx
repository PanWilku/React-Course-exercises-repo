import { useContext } from "react";
import UseContenxtComponentD from "./UseContenxtComponentD";
import { UserContext } from "./UserContext";

function UseContenxtComponentC() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>ComponentC</h1>
      <h1>{user}</h1>
      <UseContenxtComponentD></UseContenxtComponentD>
    </>
  );
}

export default UseContenxtComponentC;
