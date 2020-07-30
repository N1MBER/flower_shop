import React from "react";
import {valid_email, valid_password, valid_phone} from "../validators";
import {apiURL, registration} from "../api_configuration";

export class RegistrationComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: undefined
        };
        this.registration = this.registration.bind();
    }

    registration = () =>{
        let login = document.getElementById("registration_login").value.trim();
        let phone = document.getElementById("registration_phone").value.trim();
        let password = document.getElementById("registration_password").value.trim();
        let repeat_password = document.getElementById("registration_repeat_password").value.trim();
        if (password === repeat_password){
            let flag = true;
            if (!valid_email(login)) {
                flag = false;
                this.setState({message: "Неверно указана почта"});
            }else if (!valid_password(password)) {
                flag = false;
                this.setState({message: "Неверно указан пароль"});
            }else if (!valid_phone(phone)) {
                flag = false;
                this.setState({message: "Неверно указан номер телефона"})
            }
            if (flag){
                let header = new Headers();
                header.append('Authorization', 'Basic ' + btoa(login + ':' + phone + ':' + password));
                fetch(apiURL + registration, {
                    method: 'POST',
                    headers: header,
                }).then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("login",login);
                        localStorage.setItem("authorized", "true");
                        window.location.href = "/"
                    }
                    else {
                        localStorage.setItem("authorized", "false");
                        this.setState({
                            message: "Такой пользователь уже существует"
                        })
                    }
                }).catch(response => {
                    this.setState({message: "Произошла ошибка"});
                    localStorage.setItem("authorized", "false");
                    console.log(response)
                });
            }
        }else
            this.setState({message: "Пароли должны совпадать"})
    };

    render() {
        return(
            <div id={"registration"}>
                <h1>Регистрация</h1>
                <p>{this.state.message}</p>
                <div className={"registration_form"}>
                    <p>Почта</p>
                    <input id={"registration_login"} required={"true"} type={"email"} placeholder={"Email"}/>
                    <p>Телефон</p>
                    <input id={"registration_phone"} required={"true"} type={"tel"} placeholder={"(XXX)-XXX-XXXX"} />
                    <p>Пароль</p>
                    <input id={"registration_password"} required={"true"} type={"password"} placeholder={"Пароль"}/>
                    <p>Повторите пароль</p>
                    <input id={"registration_repeat_password"} required={"true"} type={"password"} placeholder={"Пароль"}/>
                    <button onClick={() => this.registration()}>Зарегистрироваться</button>
                </div>
            </div>
        )
    }

}
