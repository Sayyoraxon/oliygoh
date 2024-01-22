import "./style.css"
import user from '../images/User star 2.svg'
import usr from '../images/User gem 3.svg'
import lock from '../images/Lock 1.svg'
import lock2 from '../images/Lock 1.png'
import phone from '../images/Call Phone 1.svg'
import showpas from '../images/Show 2.svg'
import hide from '../images/Hide 3.svg'
import warning from "../images/Error circle 3.png"
import fon from "../images/fonImage.png"
import icon from "../images/Notebook 1.svg"
import { useState } from 'react'
import SendCode from "./SendCode"
import { NavLink } from "react-router-dom"




const SignUp = ({ setLogin }) => {

    const [newWin, setNewWin] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showpassword, setShowpassword] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [firstName, setFirstName] = useState(false)
    const [lastName, setLastName] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [checkphonenumber, setCheckphonenumber] = useState(true)
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState(true)
    const [repeatpassword, setRepeatpassword] = useState("")
    const [checkrepeatpassword, setCheckrepeatpassword] = useState(true)
    const [outline, setOutline] = useState(false)
    const checkbox = document.getElementById("checkbox")

    const validPhone = new RegExp('^[+]?[0-9]{12}$')

    const startregistr = (value) => {
        if (value && phoneNumber.length > 0 && password.length > 0 && repeatpassword.length > 0 && firstName.length > 0 && lastName.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)

        }
    }

    const registr = () => {
        validPhone.test(phoneNumber) ? setCheckphonenumber(true) : setCheckphonenumber(false)
        password.length > 8 & password.length < 16 ? setCheckPassword(true) : setCheckPassword(false)
        password === repeatpassword ? setCheckrepeatpassword(true) : setCheckrepeatpassword(false)
        setTimeout(close, 3000)
        if (validPhone.test(phoneNumber) && password.length > 8 && password.length < 16 && password === repeatpassword) {
            setNewWin(true)
        } else {
            setOutline(true)
            checkbox.checked = false
        }
    }

    const close = () => {
        setCheckphonenumber(true)
        setCheckPassword(true)
        setCheckrepeatpassword(true)
    }



    return (
        <div className="signup">
        <div className="sign_div">
            <div className="icon_div">
                <img src={icon} alt="icon"/>
                <h2>Oliygoh</h2>
            </div>
            <div className="registration">
                {!newWin ?
                    <>
                        <h2 className="title">Ro'yxatdan o'tish - ma'lumotlaringizni kiriting:</h2>
                        <div className="input_div">
                            <img src={user} alt="user" />
                            <input type="text" placeholder="Ismingiz" required
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="input_div">
                            <img src={usr} alt="user" />
                            <input type="text" placeholder="Familiyangiz" required
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="input_div">
                            <img src={phone} alt="phone" />
                            <input
                                type="tel"
                                placeholder="Telefon raqamingiz"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                pattern="[+]{1}[0-9]{12}" />
                            {
                                !checkphonenumber &&
                                <img src={warning} alt="warning"
                                    className="hide" />
                            }
                        </div>
                        <div className="input_div">
                            <img src={lock} alt="phone" />
                            <input type={showpassword ? "text" : "password"} placeholder="Parolni kiriting"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            {
                                checkPassword ?
                                    <img src={showpassword ? showpas : hide} alt="hide"
                                        className="hide"
                                        onClick={() => { showpassword ? setShowpassword(false) : setShowpassword(true) }} /> :
                                    <img src={warning} alt="warning"
                                        className="hide" />
                            }
                        </div>
                        <div className="input_div">
                            <img src={lock2} alt="phone" />
                            <input type={showPassword ? "text" : "password"} placeholder="Parolni takrorlang"
                                onChange={(e) => setRepeatpassword(e.target.value)} />
                            {
                                checkrepeatpassword ?
                                    <img src={showPassword ? showpas : hide} alt="hide"
                                        className="hide"
                                        onClick={() => { showPassword ? setShowPassword(false) : setShowPassword(true) }} /> :
                                    <img src={warning} alt="warning"
                                        className="hide" />
                            }
                        </div>
                        <div className="inputdiv">
                            <input type="checkbox" className="check" id="checkbox"
                                onClick={(e) => startregistr(e.target.checked)}
                                style={{ outline: outline && "1px auto #ff1717" }}
                            />
                            <p className="useRules">Saytdan foydalanish <NavLink to={"/rules"}>shartlariga</NavLink> roziman</p>
                        </div>
                        <button className="registerbtn"
                            onClick={registr}
                            disabled={disabled}
                            style={{ backgroundColor: disabled ? "#fff" : "#8024ff", color: disabled ? "" : "#fff" }}
                        >RO'YXATDAN O'TISH</button>
                    </> :
                    <>
                        <SendCode phoneNumber={phoneNumber} setLogin={setLogin} />
                    </>
                }



                <div className="div1"
                    style={{ display: checkPassword ? "none" : "block" }}>Parol 8-16 ta belgidan iborat bo'lishi kerak
                    <div className="shape"></div>
                </div>
                <div className="div2"
                    style={{ display: checkrepeatpassword ? "none" : "block" }}>Parol tasdig'i noto'g'ri kiritilgan
                    <div className="shape"></div>
                </div>
                <div className="div3"
                    style={{ display: checkphonenumber ? "none" : "block" }}>Raqam noto'g'ri kiritilgan
                    <div className="shape"></div>
                </div>

            </div>
            {!newWin && <p className="account">Akkountingiz bormi?
                <NavLink to="/"> Kirish</NavLink>
            </p>}
        </div>

        <div className="fon">
            <img src={fon} alt="fon" width="100%" height="100%" style={{objectFit: "cover"}}/>
        </div>
        </div>
    )
}

export default SignUp