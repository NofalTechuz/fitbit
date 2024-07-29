import { useNavigate } from "react-router-dom"

function Logo() {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center cursor-pointer">
            <img src="/img/fitbit.png" alt="" width={100} height={100} onClick={() => navigate('/')} className="cursor-pointer"/>
        </div>
    )
}

export default Logo
