import React from "react";

let pages = [
    "Главная",
    "Цветы",
    "Наборы",
    "Акссесуары",
    "Контакты"
];
export class NavBar extends React.Component{
    render() {
        return(
            <div id={"navigation"}>
                <nav>
                    {pages.map(function (item) {
                        return(
                        <button className={"navigation_item"}>
                            <p>{item}</p>
                        </button>
                        )})}
                    <button className={"navigation_item"}>
                        <img alt={""} src={"https://i.dlpng.com/static/png/1260891-png-file-cart-png-981_886_preview.png"}/>
                        <p>Корзина</p>
                    </button>
                </nav>
                <hr />
            </div>
        )
    }
}
