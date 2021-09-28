import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { registerValidationSchema } from "../../../validation";
import { userActions } from "../../../redux/action";

function Register({ history }) {
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    };
    const dispatch = useDispatch();
    const registerStatus = useSelector((state) => state.registration);

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // redirect to login when registered successfully
    useEffect(() => {
        if (registerStatus.status) {
            history.push("./login");
        }
    }, [history, registerStatus.status]);

    function onSubmit(user) {
        if (user.email && user.password && user.confirmPassword && user.acceptTerms) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                <Form>
                    <h3 className="card-header">Register</h3>
                    <div className="card-body">
                        {registerStatus.error ? <h5 className="card-header bg-danger text-center ">{registerStatus.error}</h5> : null}

                        <div className="form-group">
                            <label>Email</label>
                            <Field
                                name="email"
                                type="text"
                                autoComplete="true"
                                className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    autoComplete="true"
                                    className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Confirm Password</label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="true"
                                    className={"form-control" + (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")}
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <Field
                                type="checkbox"
                                name="acceptTerms"
                                id="acceptTerms"
                                className={"form-check-input " + (errors.acceptTerms && touched.acceptTerms ? " is-invalid" : "")}
                            />
                            <label htmlFor="acceptTerms" className="form-check-label">
                                Accept Terms & Conditions
                            </label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            <Link to="/login" className="btn btn-link">
                                Login
                            </Link>
                            <Link to="/" className="btn btn-link">
                                Home
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export { Register };
