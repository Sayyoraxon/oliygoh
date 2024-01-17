import { Outlet } from "react-router-dom"


const Home = () => {

    return (
        <>
            <div>
                <Outlet/>

            </div>
            <div className="fon">

            </div>
        </>
    )
}

export default Home