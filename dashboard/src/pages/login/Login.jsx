import "./login.scss"
import { useContext } from "react";
import { Check_Authentication } from "../../context/Authcontext";
const Login = () => {
const a = useContext(Check_Authentication);
const {user} = a;
  return (
    <>
      <input type="email"></input>
      <input type="password"></input>
      <button>Submit</button>
      <div>{user}</div>
    </>
  )
}

export default Login