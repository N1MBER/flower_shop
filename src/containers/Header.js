import React from "react";

export class Header extends React.Component{
    render() {
        return(
            <header id={"header"}>
                <div>
                    <div className={"header_icons"}>
                        <img className={"header_login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"facebook"}/>
                        <img className={"header_login_icon"} src={"https://cdn.worldvectorlogo.com/logos/vk-1.svg"} alt={"vk"}/>
                        <img className={"header_login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt={"inst"}/>
                    </div>
                    <div className={"header_buttons"}>
                        <button>Вход</button>
                        |
                        <button>Регистрация</button>
                    </div>
                </div>
                <div className={"header_content"}>
                    <div>
                        <img className={"header_content_icon"} src={"https://i.pinimg.com/originals/20/27/3c/20273cfda041b47e89e057a4c2296928.png"} alt={""}/>
                        <div>
                            <p>Нужна помощь?</p>
                            <p>8-800-555-35-35</p>
                        </div>
                    </div>
                    <h1>Flowers Shop</h1>
                    <div>
                        <label className={"search_input_label"} htmlFor={"search_input"}>
                            <img className={"header_content_icon"} src={"https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"} alt={""}/>
                        </label>
                        <input id={"search_input"} placeholder={"Поиск"} name={"search_input"} type={"text"}/>
                    </div>
                </div>
                <hr/>
            </header>
        )
    }
}
