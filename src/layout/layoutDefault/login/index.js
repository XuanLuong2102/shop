import { Button, Checkbox } from "antd";
import { IoClose } from "react-icons/io5";
import "./style.scss";

function Login({ StateLogin, SetState, SetWindow }) {
  return (
    <>
      <div class="login__popup">
        <div class="btn-close" onClick={() => SetWindow(false)}>
          <IoClose />
        </div>
        <h1>{StateLogin}</h1>
        <form class="login__form">
          <input
            type="email"
            name="email"
            id="email"
            class="login__form__input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            class="login__form__input"
            placeholder="Password"
          />
          {StateLogin === "SIGNUP" ? (
            <>
              <input
                type="password__re"
                name="password__re"
                id="password__re"
                class="login__form__input"
                placeholder="Enter password"
              />
            </>
          ) : (
            <></>
          )}
          <div className="checkbox__area">
            <Checkbox className="checkbox__item" id="remember"> Remember account</Checkbox>
            {StateLogin === "LOGIN" ? (
              <>
                <div className="checkbox__item" id="forgot">Forgot pasword?</div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Button type="submit" className="login__form__submit">
            {StateLogin}
          </Button>
          <div className="login_sigup" >{StateLogin === "LOGIN" ? (
              <>
                No account? <span onClick={()=>SetState("SIGNUP")}>_Signup now</span>
              </>
            ) : (
              <>Already have an account? <span onClick={()=>SetState("LOGIN")}>_Login now</span></>
            )}</div>
          
        </form>
      </div>
    </>
  );
}
export default Login;
