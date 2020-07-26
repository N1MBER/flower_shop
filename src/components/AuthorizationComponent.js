import React from "react";

export class AuthorizationComponent extends React.Component{
    render() {
        return(
            <div>
                <div className={"header_icons"}>
                    <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"facebook"}/>
                    <img className={"login_icon"} src={"https://cdn.worldvectorlogo.com/logos/vk-1.svg"} alt={"vk"}/>
                    <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt={"inst"}/>
                </div>
                <div className={"header_buttons"}>
                    <button>Вход</button>
                    |
                    <button>Регистрация</button>
                </div>
            </div>

        )
    }
}
