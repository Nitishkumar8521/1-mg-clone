import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

function PrivateRoute({ children }) {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth === 0) {
            navigate('/login');
        }
    }, [auth, navigate]);

    return auth === 1 ? children : null;
}

export default PrivateRoute;
