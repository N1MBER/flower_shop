import React from "react";

export class ProductItem extends React.Component{
    render() {
        return(
            <div>
                <div id={"product_item"}>
                    <div>
                        <img src={"https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/rose_210_210.png"}/>
                    </div>
                    <div className={"product_item_content"}>
                        <h2>Rose</h2>
                        <p>price</p>
                        <p>description</p>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        )
    }
}
