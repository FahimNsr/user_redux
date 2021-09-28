import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { loginValidationSchema } from "../../../validation";
import { userActions } from "../../../redux/action";

function Login({ history }) {
    const initialValues = {
        email: "",
        password: "",
    };

    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.authentication);
    const registerStatus = useSelector((state) => state.registration);

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // redirect to home page when logged successfully
    useEffect(() => {
        if (authStatus.status) {
            history.replace("/");
        }
    }, [authStatus.status, history]);

    function onSubmit({ email, password }) {
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                <Form>
                    <h3 className="card-header">Login</h3>

                    {registerStatus.status ? <h5 className="card-header bg-success text-center ">Registration successful</h5> : null}
                    {authStatus.error ? <h5 className="card-header bg-warning text-center ">{authStatus.error}</h5> : null}

                    <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <Field
                                name="email"
                                type="text"
                                className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field
                                name="password"
                                type="password"
                                autoComplete="true"
                                className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")}
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" className="btn btn-primary mt-3">
                                    Login
                                </button>
                            </div>
                            <div className="form-group col text-right">
                                <Link to="/register" className="btn btn-link">
                                    Register
                                </Link>

                                <Link to="/forgot-password" className="btn btn-link pr-0">
                                    Forgot Password?
                                </Link>
                                <Link to="/" className="btn btn-link">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export { Login };
