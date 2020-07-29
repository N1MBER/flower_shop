import React from "react";

export class RegistrationComponent extends React.Component{
    render() {
        return(
            <div id={"registration"}>
                <h1>Регистрация</h1>
                <form className={"registration_form"}>
                    <p>Почта</p>
                    <input required={"true"} type={"email"} placeholder={"Email"}/>
                    <p>Телефон</p>
                    <input required={"true"} type={"tel"} placeholder={"(XXX)-XXX-XXXX"} />
                    <p>Пароль</p>
                    <input required={"true"} type={"password"} placeholder={"Пароль"}/>
                    <p>Повторите пароль</p>
                    <input required={"true"} type={"password"} placeholder={"Пароль"}/>
                    <button type={"submit"}>Зарегистрироваться</button>
                </form>
            </div>
        )
    }
}
