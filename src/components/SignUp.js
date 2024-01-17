import "./style.css"
import user from '../images/user.jpeg'
import lock from '../images/lock.png'
import showpas from '../images/showpas.png'
import hide from '../images/hidepas.png'
import warning from "../images/warning.webp"
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-circular-progressbar/dist/styles.css';
import SendCode from "./SendCode"
import { NavLink } from "react-router-dom"




const SignUp = ({setLogin}) => {

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

    const startregistr = (value) => {
        if (value && phoneNumber.length > 0 && password.length > 0 && repeatpassword.length > 0 && firstName.length > 0 && lastName.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)

        }
    }

    const registr = () => {
        phoneNumber.length === 12 ? setCheckphonenumber(true) : setCheckphonenumber(false)
        password.length > 8 & password.length < 16 ? setCheckPassword(true) : setCheckPassword(false)
        password === repeatpassword ? setCheckrepeatpassword(true) : setCheckrepeatpassword(false)
        setTimeout(close, 3000)
        if(phoneNumber.length === 12 &&  password.length > 8 && password.length < 16 && password === repeatpassword){
            setNewWin(true)
        }
    }

    const close = () => {
        setCheckphonenumber(true)
        setCheckPassword(true)
        setCheckrepeatpassword(true)
    }



    return (
        <>
        <div className="registration">
            {!newWin ?
                <>
                    <h3>Ro'yxatdan o'tish - ma'lumotlaringizni kiriting:</h3>
                    <div className="input_div">
                        <img src={user} alt="user" />
                        <input type="text" placeholder="Ismingiz" required
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="input_div">
                        <img src={user} alt="user" />
                        <input type="text" placeholder="Familiyangiz" required
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="input_div">
                        <PhoneInput
                            placeholder="Telefon raqamingiz"
                            value={phoneNumber}
                            onChange={setPhoneNumber} />
                        {
                            !checkphonenumber &&
                            <img src={warning} alt="warning" />
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
                                    onClick={() => { showpassword ? setShowpassword(false) : setShowpassword(true) }} /> :
                                <img src={warning} alt="warning" />
                        }
                    </div>
                    <div className="input_div">
                        <img src={lock} alt="phone" />
                        <input type={showPassword ? "text" : "password"} placeholder="Parolni takrorlang"
                            onChange={(e) => setRepeatpassword(e.target.value)} />
                        {
                            checkrepeatpassword ?
                                <img src={showPassword ? showpas : hide} alt="hide"
                                    onClick={() => { showPassword ? setShowPassword(false) : setShowPassword(true) }} /> :
                                <img src={warning} alt="warning" />
                        }
                    </div>
                    <div className="inputdiv">
                        <input type="checkbox" className="check"
                            onClick={(e) => startregistr(e.target.checked)} />
                        <p style={{ fontSize: "14px" }}>Saytdan foydalanish <NavLink to={"/rules"}>shartlariga</NavLink> roziman</p>
                    </div>
                    <button className="registerbtn"
                        onClick={registr}
                        disabled={disabled}
                        style={{ backgroundColor: disabled ? "#fff" : "#0095f6", color: disabled ? "" : "#fff" }}
                    >RO'YXATDAN O'TISH</button>
                </> :
                <>
                   <SendCode phoneNumber={phoneNumber} setLogin={setLogin}/> 
                </>
            }



            <div className="div1"
                style={{ display: checkPassword ? "none" : "block" }}>Parol 8-16 ta belgidan iborat bo'lishi kerak</div>
            <div className="div2"
                style={{ display: checkrepeatpassword ? "none" : "block" }}>Parol tasdig'i noto'g'ri kiritilgan</div>
            <div className="div3"
                style={{ display: checkphonenumber ? "none" : "block" }}>Raqam noto'g'ri kiritilgan</div>

        </div>
            {!newWin && <p>Akkountingiz bormi? 
                <a> Kiring</a>
            </p>}
        </>
    )
}

export default SignUp