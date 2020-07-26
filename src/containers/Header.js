import React from "react";
// import "../styles/header.css"
let icon_size = 25;

export class Header extends React.Component{
    render() {
        return(
            <header className={"header"}>
                <div className={"header-input"}>
                    <div>
                        <img width={icon_size} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"facebook"}/>
                        <img width={icon_size} src={"https://cdn.worldvectorlogo.com/logos/vk-1.svg"} alt={"vk"}/>
                        <img width={icon_size} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt={"inst"}/>
                    </div>
                    <div>
                        <button>Вход</button>
                        |
                        <button>Регистрация</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img width={icon_size} src={"https://i.pinimg.com/originals/20/27/3c/20273cfda041b47e89e057a4c2296928.png"} alt={""}/>
                        <div>
                            <p>Нужна помощь?</p>
                            <p>8-800-555-35-35</p>
                        </div>
                    </div>
                    <h1>Flowers Shop</h1>
                    <div>
                        <label htmlFor={"search_input"}>
                            <img width={icon_size} src={"https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones.png"} alt={""}/>
                        </label>
                        <input id={"search_input"} name={"search_input"} type={"text"}/>
                    </div>
                </div>
            </header>
        )
    }
}
