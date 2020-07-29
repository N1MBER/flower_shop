import React from "react";
import {AuthorizationHeader} from "../components/AuthorizationHeader";

export class Header extends React.Component{
    render() {
        return(
            <header id={"header"}>
                <AuthorizationHeader/>
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
