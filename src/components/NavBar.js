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
    constructor(props){
        super(props);
        let items;
        if (localStorage.getItem("cart_item") === null ||
            localStorage.getItem("cart_item").split(";") === null ||
            !(localStorage.getItem("cart_item").split(";").length > 0)
        ) {
            items = 0
        }
        else
            items = localStorage.getItem("cart_item").split(";").length;
        this.state = {
            cart_item: items
        }
    }
    componentDidMount() {
         setInterval(
            () => {
                let store = localStorage.getItem("cart_item");
                if (store !== null){
                    if(store.length>0)
                        this.setState({cart_item: localStorage.getItem("cart_item").split(";").length})
                    else
                        this.setState({cart_item: 0})
                }
            },
            1000
        );
    }
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
                    <button  onClick={()=> window.location.href = "/cart/"} className={"navigation_item"}>
                        <img alt={""} src={"https://image.flaticon.com/icons/png/512/34/34627.png"}/>
                        <p>Корзина</p>
                        {(localStorage.getItem("cart_item") !== null &&
                            localStorage.getItem("cart_item") !== undefined &&
                            localStorage.getItem("cart_item").length !== 0
                        ) ? (
                            <div className={"cart_items"}>
                                <p>
                                    {this.state.cart_item - 1}
                                </p>
                            </div>
                        ):
                            undefined
                        }
                    </button>
                </nav>
                <hr />
            </div>
        )
    }
}
