import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
}from 'react-router-dom'
import {ProductList} from "../components/ProductList";
import {ProductItem} from "../components/ProductItem";
import NotFoundPage from "../components/NotFoundPage";

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
            default:
                return "Цветы";
        }
    }
    render() {
        return(
            <div id={"products"}>
                <h1 className={"title"}>{this.this_page()}</h1>
                <BrowserRouter>
                    <Switch>
                        {window.location.pathname.split("/").length < 4?
                            window.location.href = window.location.pathname + "flowers/":undefined
                        }
                        <Route exact strict path={"/products/*/"} component={ProductList}/>
                        <Route exact path={"/products/*/:id"} component={ProductItem}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
