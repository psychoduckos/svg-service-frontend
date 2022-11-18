import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { register } from "../utils/auth.utils";

import '../view/auth/index.css'
const RegisterPage = () => {

      const navigate = useNavigate();

      const inputNickname = useRef();
      const inputEmail = useRef();
      const inputPassword = useRef();

      const getRefData = async () => {
            let object = {
                  username: inputNickname.current?.value,
                  email: inputEmail.current?.value,
                  password: inputPassword.current?.value
            }
            console.log(object);

            await register(object)
            alert('Check your EMAIL, man!')
            return (() => {navigate('/landing')})
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
                              <Input ref={inputNickname} placeholder={"Nickname"} type={'text'}/>
                              <Input ref={inputEmail} placeholder={"Email"} type={'text'}/>
                              <Input ref={inputPassword} placeholder={"Password"} type={'text'}/>
                        </div>
                        <div className="Next">
                              <div className="Contitue">
                                    <button className="ContinueButton" onClick={getRefData}>SIGN UP</button>
                              </div>     
                        </div>
                  </div>
            </div>

            <div className="NotAccount">
                  <div className="NotAccountContainer">
                        <div className="Greetings">Hello friend!</div>
                        <div className="TextToSignUp"><a>Check out the developer page!</a></div>
                        <div className="StartSignUp">            
                              <button className="StartSignUpButton" onClick={() => {navigate('/portfolio')}}>GO TO PAGE</button>
                        </div>
                  </div>

            </div>

      </div>
      </div>
       );
}
 
export default RegisterPage;