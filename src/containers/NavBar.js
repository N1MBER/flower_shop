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
            <div>
                <nav>
                    {pages.map(function (item) {
                        return <p>{item}</p>
                    })}
                    <div>
                        <img width={30} alt={""} src={"https://i.dlpng.com/static/png/1260891-png-file-cart-png-981_886_preview.png"}/>
                        <p>Корзина</p>
                    </div>
                </nav>
            </div>
        )
    }
}
