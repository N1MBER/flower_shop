import React from "react";
import {apiURL, login} from "../api_configuration";
import {valid_email, valid_password} from "../validators";
export class AuthorizationHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            input_visible: false,
            message: undefined
        };
        this.setAuthorized = this.setAuthorized.bind();
        this.getAuthorized = this.getAuthorized.bind();
        this.getLogin = this.getLogin.bind();
        this.authorization = this.authorization.bind();
        this.setLoginValue = this.setLoginValue.bind();
        this.setPasswordValue = this.setPasswordValue.bind();
    }
    setLoginValue = (event) =>{
        this.setState({
            login_value: event.target.value
        });
    };
    setPasswordValue = (event) =>{
        this.setState({
            password_value: event.target.value
        });
    };
    setAuthorized(flag){localStorage.setItem("authorized",flag);}

    getAuthorized(){return localStorage.getItem("authorized") !== "false";}

    getLogin(){return localStorage.getItem("login");}

    authorization = () =>{
        let login = this.state.login_value;
        let password = this.state.password_value;
        if (valid_email(login) && valid_password(password)) {
            let user_info = {
                login: login,
                password: password
            };
            let header = new Headers();
            header.append('Authorization', 'Basic ' + btoa(user_info.login + ':' + user_info.password));
            fetch(apiURL + login, {
                method: 'POST',
                headers: header,
            }).then(response => {
                if (response.status === 200) {
                    localStorage.setItem("login", this.state.login_value);
                    this.setAuthorized(true);
                    this.setState({input_visible: false})
                }
                else {
                    this.setAuthorized(false);
                    this.setState({
                        input_visible: true,
                        message: "Неверное имя пользователя или пароль"
                    })
                }
            }).catch(response => {
                this.setState({message: "Произошла ошибка"});
                this.setAuthorized(false);
                console.log(response)
            });
        }else {
            this.setState({message: "Неверно указано имя пользователя или пароль"});
        }
    };
    render() {
        return(
            <div id={"authorized_header"}>
                {Boolean(this.getAuthorized()) ?
                    (
                        <div id={"login"}>
                            <p>{this.getLogin()}</p>
                            <button onClick={() => {
                                this.setAuthorized(false);
                                this.setState({auth: false});
                            }}>Выйти</button>
                        </div>
                    ):
                    (
                        <div className={"authorization"}>
                            <div className={"header_icons"}>
                                <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"facebook"}/>
                                <img className={"login_icon"} src={"https://cdn.worldvectorlogo.com/logos/vk-1.svg"} alt={"vk"}/>
                                <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt={"inst"}/>
                            </div>
                            <div className={"header_buttons"}>
                                <button onClick={() => {
                                    this.setState({auth: true, input_visible: true});
                                }}>Вход</button>
                                |
                                 <button onClick={() => window.location.href = "/registration/"}>Регистрация</button>
                            </div>
                        </div>
                    )
                }
                {this.state.input_visible ?
                    (
                        <div>
                            <div>
                                <input className={"header_input_field"} onChange={this.setLoginValue} id={"header_login"} type={"email"} placeholder={"Логин"}/>
                                <input className={"header_input_field"} onChange={this.setPasswordValue} type={"password"} placeholder={"Пароль"}/>
                                <button className={"header_button"} onClick={()=>{this.authorization()
                                }}>Войти</button>
                            </div>
                            <p>{this.state.message}</p>
                        </div>
                    ):
                    undefined
                }
            </div>
        )
    }
}

