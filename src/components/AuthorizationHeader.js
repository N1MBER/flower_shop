import React from "react";
localStorage.setItem("authorized",true);
export class AuthorizationHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            input_visible: false
        };
        this.setAuthorized = this.setAuthorized.bind();
        this.getAuthorized = this.getAuthorized.bind();
        this.getLogin = this.getLogin.bind();
        this.authorization = this.authorization.bind();
    }
    setAuthorized(flag){
        localStorage.setItem("authorized",flag);
    }
    getAuthorized(){
        return localStorage.getItem("authorized") !== "false";
    }
    getLogin(){
        return localStorage.getItem("login");
    }
    authorization(login, password){
        this.setState({input_visible: false})
    }
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
                            <form>
                                <input className={"header_input_field"} type={"text"} placeholder={"Логин"}/>
                                <input className={"header_input_field"} type={"password"} placeholder={"Пароль"}/>
                                <button className={"header_button"} onClick={()=>this.authorization("ss","ss")}>Войти</button>
                            </form>
                        </div>
                    ):
                    undefined
                }
            </div>
        )
    }
}

