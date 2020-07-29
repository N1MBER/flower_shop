import React from "react";
import {items} from "./ProductList";

export class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.get_array = this.get_array.bind();
        this.putItemIntoCart = this.putItemIntoCart.bind();
        this.state =({item: this.get_array().filter(item =>{
                return item[3] === Number(window.location.pathname.split("/")[3])
            })[0]
        });
    }
    get_array(){
        switch (window.location.pathname.split("/")[2]) {
            case "flowers":
                return items[0];
            case "set":
                return items[1];
            case "accessories":
                return items[2];
            default:
                return items[0];
        }
    }
    putItemIntoCart(item){
        if (localStorage.getItem("cart_item") == null)
            localStorage.setItem("cart_item", item + ";");
        else
            localStorage.setItem("cart_item",localStorage.getItem("cart_item") + item + ";");
    }

    render() {
        return(
            <div>
                <div id={"product_item"}>
                    <div>
                        <img src={this.state.item[1]} alt={""}/>
                    </div>
                    <div className={"product_item_content"}>
                        <h2>{this.state.item[0]}</h2>
                        <p>{this.state.item[2]} руб.</p>
                        <p>description</p>
                        <button onClick={() => {
                            // this.putItemIntoCart(window.location.pathname.split("/")[3])
                            this.putItemIntoCart(this.state.item);
                        }}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        )
    }
}
