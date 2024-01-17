import { Navigate } from "react-router-dom"


const Main = ({login}) => {


    return (
        <>
            {!login && <Navigate to="signUp"/>}
            <h1>Xush kelibsiz!</h1>
        </>
    )
}

export default Main