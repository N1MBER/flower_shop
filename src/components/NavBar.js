import React from "react";

let pages = [
    "Главная",
    "Цветы",
    "Наборы",
    "Акссесуары",
    "Контакты"
];
let links = [
    "/",
    "/products/flowers/",
    "/products/set/",
    "/products/accessories/",
    "/contacts/"

];
export class NavBar extends React.Component{
    render() {
        return(
            <div id={"navigation"}>
                <nav>
                    {pages.map(function (item) {
                        return(
                        <button onClick={()=>{window.location.href = links[pages.indexOf(item)]}} className={"navigation_item"}>
                            <p>{item}</p>
                        </button>
                        )})}
                    <button className={"navigation_item"}>
                        <img alt={""} src={"https://image.flaticon.com/icons/png/512/34/34627.png"}/>
                        <p>Корзина</p>
                    </button>
                </nav>
                <hr />
            </div>
        )
    }
}
