import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
}from 'react-router-dom'
import {ProductList} from "../components/ProductList";
import {ProductItem} from "../components/ProductItem";

export class Products extends React.Component{
    constructor(props){
        super(props);
        this.this_page = this.this_page.bind();
    }
    this_page() {
        let path = String(window.location.pathname).split("/")[2];
        switch (path) {
            case "set":
                return "Наборы";
            case "flowers":
                return "Цветы";
            case "accessories":
                return "Акссесуары";
        }
    }
    render() {
        return(
            <div id={"products"}>
                <h1 className={"title"}>{this.this_page()}</h1>
                <BrowserRouter>
                    <Switch>
                        <Route exact strict path={"/products/*/"} component={ProductList}/>
                        <Route exact path={"/products/*/:id"} component={ProductItem}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
