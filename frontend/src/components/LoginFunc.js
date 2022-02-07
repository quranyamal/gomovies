import React, {useState, Fragment} from 'react'
import Input from './form-components/Input'
import Alert from './ui-components/Alert'

function LoginFunc(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [alert, setAlert] = useState({type: "d-none", message: ""});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (props.jwt === "") {
            props.history.push({
                pathname: "/login",
            });
            return;
        }

        if (email === "") {
            errors.push("email");
        }
    
        if (password === "") {
            errors.push("password");
        }
    
        setErrors(errors);
    
        if (errors.length > 0) {
            return false;
        }
    
        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());
    
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(payload),
        }
    
        fetch("http://localhost:4000/v1/signin", requestOptions)
            .then((response) => {
                if (response.status !== 200) {}
                return response.json();
            })
            .then((data) => {
                if (data.error) {
                    console.log("login failed");
                    console.log("error", data.error);
                    setAlert({type: "alert-danger", message: "Invalid login" });
                } else {
                    console.log("Logging in");
                    handleJWTChange(Object.values(data)[0]);
                    window.localStorage.setItem("jwt", JSON.stringify(Object.values(data)[0]));
                    props.history.push({
                        pathname: "/admin",
                    })
                }
            })
    }

    function handleJWTChange(jwt) {
        props.handleJWTChange(jwt);
    }

    function hasError(key) {
        return errors.indexOf(key) !== -1;
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    
    return (
        <Fragment>
            <h2>Login</h2>
            <hr />
            <Alert
            alertType={alert.type}
            alertMessage={alert.message}
            />
    
            <form className="pt-3" onSubmit={handleSubmit}>
            <Input
                title={"Email"}
                type={"email"}
                name={"email"}
                value={email}
                handleChange={handleEmail}
                className={hasError("email") ? "is-invalid" : ""}
                errorDiv={hasError("email") ? "text-danger" : "d-none"}
                errorMsg={"Please enter a valid email address"}
            />
    
            <Input
                title={"Password"}
                type={"password"}
                name={"password"}
                handleChange={handlePassword}
                className={hasError("password") ? "is-invalid" : ""}
                errorDiv={hasError("password") ? "text-danger" : "d-none"}
                errorMsg={"Please enter a password"}
            />
    
            <hr />
            <button className="btn btn-primary">Login</button>
            </form>
        </Fragment>
        );
      
}

export default LoginFunc;