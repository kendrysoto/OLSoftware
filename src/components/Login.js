import React, { useState } from 'react';
import TableUser from './TableUser';
import Loading from './Loading';
import NavUser from './NavUser';
import { Nav } from 'react-bootstrap';
import '../styles/Login.css';

const Login = () => {
    const [login, setLogin] = useState({
        user: "",
        password: "",
    })

    const [loginIncorrect, setLoginIncorrect] = useState(false)
    const [loginCorrect, setLoginCorrect] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleChange(evt) {
        const value = evt.target.value;
        setLogin({
            ...login,
            [evt.target.name]: value
        });
    }

    function ifMactch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user == "kendry soto morales" && param.password == "1234567") {
                const { user, password } = param;
                let ac = { user, password };
                let acount = JSON.stringify(ac);
                localStorage.setItem("acount", acount);
                setLoginCorrect(true)
            } else {
                setLoginIncorrect(true)
            }
        } else {
            setLoginCorrect(false)
        }
    }

    function loginUser() {
        if (login) {
            ifMactch(login)
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 3000)
        }
    }
    if (loading) {
        return (
            <div>
                <Loading />
                <Login />
            </div>
        )
    }

    return (
        <div>
            {loginCorrect ? <div className="boxPrev">
                <Nav.Link className="prevButton" href="/Banner">
                    <i class="fas fa-sign-out-alt"></i>
                </Nav.Link>
                <NavUser />
                <h6>{login.user}</h6>
                <i id="iconLogin" class="fas fa-user-circle"></i>
                <TableUser />
            </div> :
                <div className="login">
                    <h4>Inicio de sesion</h4>
                    <div class="input-icons">
                        <i class="far fa-user"></i>
                        <input
                            placeholder="User"
                            type="texy"
                            name="user"
                            value={login.user}
                            onChange={handleChange}
                        /><br />
                        <i id="iconPassword" class="fas fa-lock"></i>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    {loginIncorrect && <div className="user-not-login"><p >your username or password are incorrect</p></div>}
                    <button
                        data-testid="login-user"
                        className="button-login"
                        onClick={() => loginUser()}
                    >Login</button>
                </div>
            }
        </div>
    )
}

export default Login;