import React from "react";

export class Footer extends React.Component{
    render() {
        return(
            <footer id={"footer"}>
                <div>
                    <div className={"footer_content"}>
                        <div>
                            <h3>Ссылки</h3>
                            <div>
                                <a href={"/contacts/"}>О нас</a>
                                <a href={"/contacts/"}>Контакты</a>
                                <a>Политика конфидициальности</a>
                                <a href={"https://github.com/N1MBER"}>Разработчик</a>
                                <a href={"https://github.com/N1MBER"}>FAQ</a>
                            </div>
                        </div>
                        <div>
                            <h3>Товары</h3>
                            <div>
                                <a href={"/products/flowers"}>Цветы</a>
                                <a href={"/products/set"}>Наборы</a>
                                <a href={"/products/accessories"}>Акссесуары</a>
                                <a href={"https://github.com/N1MBER"}>Предложения</a>
                            </div>
                        </div>
                        <div className={"user_info"}>
                            <h3>Оповещение о новинках</h3>
                            <div>
                                <p>Оставьте нам ваш email и ваше имя</p>
                                <form>
                                    <input type={"text"} placeholder={"Ваше имя"}/>
                                    <input type={"email"} placeholder={"Ваш email"}/>
                                    <button type={"submit"}>Присоединиться</button>
                                </form>
                            </div>
                        </div>
                        <div>
                            <h3>Наши правила</h3>
                            <div>
                                <ul>
                                    <li>Свежий товар</li>
                                    <li>Хорошие специалисты</li>
                                    <li>Довольные клиенты</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={"https://inlegal.eu/wp-content/uploads/2019/05/visa-mastercard-paypal.png"} alt={""}/>
                    <p>Ⓒ 2020 flowershop.com </p>
                    <div>
                        <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"facebook"}/>
                        <img className={"login_icon"} src={"https://cdn.worldvectorlogo.com/logos/vk-1.svg"} alt={"vk"}/>
                        <img className={"login_icon"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt={"inst"}/>
                    </div>
                </div>
            </footer>
        )
    }
}
