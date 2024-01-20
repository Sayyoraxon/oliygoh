import { useEffect, useRef, useState } from 'react'
import unlock from '../images/Unlock 1.svg'
import warning from "../images/Error circle 3.png"
import "./style.css"
import { useNavigate } from 'react-router-dom'


const SendCode = ({phoneNumber, setLogin}) => {

    const [code, setCode] = useState("")
    const code1 = "910101"
    const [enter, setEnter] = useState(true)
    const [seconds, setSeconds] = useState(60)
    const timerId = useRef()

    const navigate = useNavigate()

    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setSeconds(prev=>prev-1)
        },1000)
        return() => clearInterval(timerId.current)
    },[seconds])

    useEffect(()=>{
        seconds <= 0 && clearInterval(timerId.current)
    },[seconds])

    const registr = () => {
        if(code !== code1){
            setEnter(false)
            setTimeout(()=>{setEnter(true)},2500) 
        }else{
            navigate('/', { replace: true });
            setLogin(true)
        }
    }




    return (
        <>
            <div className='timer_div'>
                <h2 className='title'>Raqamni tasdiqlash</h2>
                <div className="circular"
            style={{display: seconds <= 0 ? "none" : ""}}>
                <div className="inner"></div>
                <div className="outer"></div>
                <div className="numb">
                    {seconds}
                </div>
                <div className="circle">
                    <div className="dot">
                        <span></span>
                    </div>
                    <div class="bar left">
                        <div className="progress"></div>
                    </div>
                    <div className="bar right">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>

            </div>
            
            <p className='sendingSMS'>SMS quyidagi raqamga yuborilgan:</p>
            <p className='sendingSMS_'>{phoneNumber}</p>
            <div className="input_div">
                <img src={unlock} alt="unlock" />
                <input placeholder="Tasdiqlash kodi"
                value={code}
                onChange={(e)=>
                setCode(e.target.value)} />
                {!enter && <img src={warning} alt="warning"/>}
            </div>
            <button className='repeatcode'
            disabled={seconds === 0 ? false : true}
            onClick={()=>setSeconds(60)}>Kodni qayta jo'natish</button>
            <button className="registerbtn"
            onClick={registr}
            disabled={code === undefined || code.length ? false : true}  
            style={{backgroundColor: code === undefined || code.length === 0 ? "" : "#a841d0", color: code === undefined || code.length === 0 ? "" : "#fff" }}
            >RO'YXATDAN O'TISH</button>


            {!enter && <div className='div4'>
                Kod xato kiritilgan
                <div className='shape'></div>
            </div>}

            
        </>
    )
}

export default SendCode