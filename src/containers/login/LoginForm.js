import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../../styles/Login.css";

export default function LoginForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    // function handlePageChangeToRegister() {
    //     window.location.hash = "/register";
    // }
    //
    // function handlePageChangeResetPassword() {
    //     window.location.hash = "/resetpass";
    // }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        id ="checkbox_id"
                        type="checkbox"
                    /> Remember me!
                </FormGroup>
                <FormGroup>
                <span>Forgot your password?</span>
                </FormGroup>

                <Button block bsSize="large" type="submit">
                    Login
                </Button>
                <Button block bsSize="large" type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
}