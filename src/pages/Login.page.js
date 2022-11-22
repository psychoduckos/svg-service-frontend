import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { login } from "../utils/auth.utils";

import '../view/auth/index.css'


const AuthPage = () => {

      const navigate = useNavigate();

      const inputEmail = useRef();
      const inputPassword = useRef();

      const getRefData = async () => {
            let object = {
                  email: inputEmail.current?.value,
                  password: inputPassword.current?.value
            }

            let res = await login(object)
            console.log(res);
            return navigate('/landing')
      }

      return ( 
            <div className="MainContainer">
            <div className="Container">
            <div className="AuthWindow">
                  <div className="AuthContainer">            
                        <div className="ActionType">
                              <h3>Sign in</h3>
                        </div>
                        <div className="LoginForm">
                              <Input ref={inputEmail} placeholder={"Email"} type={'text'}/>
                              <Input ref={inputPassword} placeholder={"Password"} type={'password'}/>
                        </div>
                        <div className="Next">
                              <div className="ForgotPassword">
                                    <button className="ForgotPasswordButton">Forgot your password</button>
                              </div>
            
                              <div className="Contitue">
                                    <button className="ContinueButton" onClick={getRefData}>SIGN IN</button>
                              </div>     
                        </div>
                  </div>
            </div>

            <div className="NotAccount">
                  <div className="NotAccountContainer">
                        <div className="Greetings">Hello friend!</div>
                        <div className="TextToSignUp"><a>Enter your details and start journey with us</a></div>
                        <div className="StartSignUp">            
                              <button className="StartSignUpButton" onClick={() => {navigate('/register')}}>SIGN UP</button>
                        </div>
                  </div>

            </div>

      </div>
      </div>
       );
}
 
export default AuthPage;