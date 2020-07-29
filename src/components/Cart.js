import React from "react";

function getItems(){
    let store = localStorage.getItem("cart_item");
    if (store !== undefined && store !== null) {
        if (store.length > 0) return store.split(";");
        else return [];
    }
    else return [];
}

function deleteItem(item){
    let arr = localStorage.getItem("cart_item").split(";");
    arr.splice(item,1);
    arr.pop();
    arr = arr.map(el => el +";");
    localStorage.setItem("cart_item", String(arr))
}

export class Cart extends React.Component{
    constructor(props){
        super(props);
        let items = getItems();
        this.state = {
            items: items,
            all_price: 0
        };
    }
    componentDidMount() {
        setInterval(
            () => {
                if (localStorage.getItem("cart_item") !== null) {
                    this.setState({items: getItems()})
                }
            },
            1000
        );
    }
    render() {
        let price = 0;
        return(
            <div id={"cart"}>
                <h1>Корзина</h1>
                {this.state.items.length !== 0? (
                    <div className={"cart_place"}>
                        {this.state.items.filter(function (item) {
                            return item.length > 0
                        }).map(function (items) {
                            price += Number(items.split(",")[2]);
                            return(
                                <div className={"cart_item"}>
                                    <div>
                                        <img alt={""} src={items.split(",")[1]} onClick={() => {
                                            window.location.href = "/products/"+items.split(",")[4]+"/"+items.split(",")[3]
                                        }}/>
                                    </div>
                                    <div className={"cart_item_info"} >
                                        <h3>{items.split(",")[0]}</h3>
                                        <p>Цена: {items.split(",")[2]} руб.</p>
                                        <button onClick={() => {
                                            deleteItem(localStorage.getItem("cart_item").split(";").indexOf(items));
                                        }}>Удалить</button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className={"cart_price"}>
                            <div>
                                <h2>Итоговая стоимость:</h2>
                                <p>{price} руб.</p>
                            </div>
                            <button>Перейти к оформлению заказа</button>
                        </div>
                    </div>
                ):(
                        <div className={"carts"}>
                            <h1>Корзина пуста</h1>
                        </div>
                )
                }
            </div>
        )
    }
}
