import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi!</h1>
                <p>You're logged in with React & JWT!!</p>
                <Link to="/register" className="btn btn-link">
                    Register
                </Link>
                <Link to="/login" className="btn btn-link">
                    Login
                </Link>
            </div>
        </div>
    );
}

export { HomePage };
