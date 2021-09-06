import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {login} from "../redux/action/loginAction";


const Login = (props) => {
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={props.login}>
                                <AvField
                                    type="text"
                                    name="phoneNumber"
                                    label="Your Phone Number"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <AvField
                                    type="password"
                                    name="password"
                                    label="Your password"
                                    required
                                    errorMessage="To'ldirish majburiy"
                                />

                                <button
                                    type="submit"
                                    className="btn btn-success btn-block"
                                >
                                    Sign in
                                </button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, {login})(Login);