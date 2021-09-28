import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/action";

function HomePage({ history }) {
    const dispatch = useDispatch;
    const user = useSelector((state) => state.authentication);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = decodeToken(token);
            const dateNow = Date.now() / 1000;
            if (decodedToken.exp < dateNow) {
                history.push("/");
                dispatch(userActions.logout());
            }
        }
    }, [dispatch, history]);

    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi!</h1>
                {user.status ? (
                    <>
                        <p>You're logged in with React & JWT!!</p>
                        <div>
                            <Link to="/logout" className="btn btn-link">
                                Logout
                            </Link>
                            <Link to="/profile" className="btn btn-link">
                                Profile | ({user.userInfo.email})
                            </Link>
                        </div>
                    </>
                ) : (
                    <div>
                        <Link to="/register" className="btn btn-link">
                            Register
                        </Link>
                        <Link to="/login" className="btn btn-link">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export { HomePage };
