import React from "react";

let orders =[
    ["ЗАКАЖИТЕ", "ЦВЕТЫ", "Купите любимым"],
    ["ЗАКАЖИТЕ", "НАБОР", "Сделать подарок"],
    ["ПОСМОТРИТЕ", "ГАЛЕРЕЯ", "Просмотреть портфолио"]
];
let links = ["/products/flowers", "/products/set", "https://github.com/N1MBER"];

export class MainPage extends React.Component{
    render() {
        return(
            <div id={"main_content"}>
                <div>
                    {orders.map(function (item) {
                        return (
                            <div className={"order_element"}>
                                <p>{item[0]}</p>
                                <h2>{item[1]}</h2>
                                :::::::::::::::::::::
                                <button>
                                    <p>{item[2]}</p>
                                    <img width={30} alt={""} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Circle_arrow_right_font_awesome.svg/768px-Circle_arrow_right_font_awesome.svg.png"}/>
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className={"main_photo"}>
                    <div>
                        <h1>Order <span>Flowers</span></h1>
                        <hr/>
                        <p>100% Гарантия</p>
                        <hr/>
                        <button>Заказать сейчас ></button>
                    </div>
                </div>
            </div>
        )
    }
}
