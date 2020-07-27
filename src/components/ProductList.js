import React from "react";

export class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.elements = this.elements.bind();
    }
    elements(){
        switch (String(window.location.pathname)) {
            case "/products/set/":
                return sets;
            case "/products/flowers/":
                return flowers;
            case "/products/accessories/":
                return accessories;
            default:
                return accessories;
        }
    }
    render() {
        return(
            <div className={"products_elements"}>
                {this.elements().map(function (item) {
                    return(
                        <div className={"products_elements_item"}>
                            <h5>{item[0]}</h5>
                            <div>
                                <img alt={""} src={item[1]}/>
                                <div className={"products_order"}>
                                    <p>{item[2]} руб.</p>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const flowers =[
    ["Розы", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/rose_210_210.png", 180],
    ["Тюльпаны", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/tulips_210_210.png", 100],
    ["Лилии", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/lily_210_210.png", 190],
    ["Хризантемы", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/chrysanthemum_210_210.png", 200],
    ["Гвоздики", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/cloves_210_210.png", 80],
    ["Ирисы", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/iris_210_210.png", 70],
    ["Орхидеи", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/orchids_210_210.png", 150],
    ["Альстромерии", "https://ybyket.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/alstroemeria_210_210.png", 120],
];
const sets = [
    ["Цветочная корзина", "https://ybyket.ru/images/cms/thumbs/971f0a6a4d1a01d85cca053c62e255ef5bdf6701/korzina_s_ezhikom_i_rozami_210_210.jpg", 6000],
    ["Цветочное лукошко", "https://ybyket.ru/images/cms/thumbs/4be33a4b7c8c451d645424fe3c5c29421abe3af8/fcru2c-ihey_210_210.jpg", 4500],
    ["Подарочный набор", "https://ybyket.ru/images/cms/thumbs/a73feaccea26b215bef579f328189b8f99c0bad7/6_210_210.jpg", 3500],
    ["Шляпная коробка", "https://ybyket.ru/images/cms/thumbs/e4bb8e0456d9448403af4b79f66aaab50d6d07ca/604sq-gaogs_210_210.jpg", 2500],
    ["Поздравительный букет", "https://ybyket.ru/images/cms/thumbs/971f0a6a4d1a01d85cca053c62e255ef5bdf6701/3t0i3p0jlja_210_210.jpg", 3000],
    ["Свадебный букет", "https://ybyket.ru/images/cms/thumbs/9799c8258567b66fc1873aa4697de592b97d61ed/4u9mluel0q0_210_210.jpg", 3800]
];
const accessories = [
    ["Открытка", "https://ybyket.ru/images/cms/thumbs/d83af7dc4ff5cdc1561df3bab27cf0bcb1d1ebd6/2175f_0_210_210.jpg", 250],
    ["Сладкий подарок", "https://ybyket.ru/images/cms/thumbs/9b7b3dbe04c39d9a6f5b74e00ee2d9fd2837a3ed/pwpyafu9lvk_210_210.jpg", 2300],
    ["Открытка", "https://ybyket.ru/images/cms/thumbs/d83af7dc4ff5cdc1561df3bab27cf0bcb1d1ebd6/1255661_210_210.jpg", 100],
    ["Фруктовая корзина", "https://ybyket.ru/images/cms/thumbs/a73feaccea26b215bef579f328189b8f99c0bad7/sqimnqthkvs_210_210.jpg", 4500],
    ["Открытка", "https://ybyket.ru/images/cms/thumbs/d83af7dc4ff5cdc1561df3bab27cf0bcb1d1ebd6/2965f_210_210.jpg", 250]
];
