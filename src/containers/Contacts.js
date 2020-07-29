import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [59.925763, 30.351430];
const information = [
    ["Адрес салона", "ул. Марата, 35, Санкт-Петербург, 191002"],
    ["Время работы", "Пн-Пт с 9 до 20; Сб-Вс с 10 до 18"],
    ["Телефон", "+7-900-600-20-70"],
    ["Email", "some_email@gmail.com"]
];

export class Contacts extends React.Component{
    render() {
        return(
            <div id={"contacts"}>
                <div>
                    <LeafletMap center={position} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={position}>
                            <Popup>Мы находимся здесь<br/>Ждем вас!</Popup>
                        </Marker>
                    </LeafletMap>
                </div>
                <div>
                    <div>
                        <h1>Наши контакты</h1>
                        {information.map(function (item) {
                            return(
                                <div className={"contacts_info"}>
                                    <h3>{item[0]}</h3>
                                    <p>{item[1]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
