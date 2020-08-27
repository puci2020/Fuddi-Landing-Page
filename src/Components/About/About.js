import React from 'react';
import "./About.css"
import shoppingcart from '../../img/icons/shoppingcart.svg'
import vegetable from '../../img/icons/vegetable.svg'
import user from '../../img/icons/user.png'
import farmer from '../../img/icons/farmer.png'
import delivery from '../../img/icons/delivery.png'


function About() {

    return (

        <div className="about" id="about">
            <div className="background">
                {/*<Grid container className="box">*/}
                {/*    /!*<Grid item className="row first" xs={12} md={6}>*!/*/}

                {/*    /!*</Grid>*!/*/}
                {/*    /!*<Grid item className="row first" xs={12} md={6}>*!/*/}

                {/*    /!*</Grid>*!/*/}
                {/*    /!*<Grid item className="row secound" xs={12} md={4}>*!/*/}

                {/*    /!*</Grid>*!/*/}
                {/*    /!*<Grid item className="row secound" xs={12} md={4}>*!/*/}

                {/*    /!*</Grid>*!/*/}
                {/*    /!*<Grid item className="row secound" xs={12} md={4}>*!/*/}

                {/*    /!*</Grid>*!/*/}
                {/*    <Grid item xs={12} md={6}>*/}
                {/*        <Paper className="paper">xs=12 sm=6</Paper>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={6}>*/}
                {/*        <Paper className="paper">xs=12 sm=6</Paper>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={3}>*/}
                {/*        <Paper className="paper">xs=6 sm=3</Paper>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={3}>*/}
                {/*        <Paper className="paper">xs=6 sm=3</Paper>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={12} md={3}>*/}
                {/*        <Paper className="paper">xs=6 sm=3</Paper>*/}
                {/*    </Grid>*/}

                {/*</Grid>*/}
                <h2>Jakie wartości chcemy, aby niosła aplikacja</h2>
                <div className="row">

                    <div className="item one">
                        <div className="box first">
                            <div className="icon">
                                <img src={shoppingcart} alt="Shopping cart"/>
                            </div>
                            <div className="text">Tworzymy platformę e-commerce
                                dzięki, której codzienne zakupy będą proste i szybkie.
                            </div>
                        </div>
                    </div>
                    <div className="item two">
                        <div className="box first">
                            <div className="icon">
                                <img src={vegetable} alt="Shopping cart"/>
                            </div>
                            <div className="text">Oferowane produkty będą najwyższej jakości w przystępnej cenie. Zależy
                                nam na pokazaniu że wyroby wytyarzane przy użyciu rąk są nie tlko samczaniejsze ale mają
                                w sobie cząśtę swojego twórcy lub w przypdaku owoców i warzyw akcent osoby która o nich
                                dbała.
                            </div>
                        </div>
                    </div>

                </div>
                <h2>Pragniemy połączyć trzy grupy użytkowników Fuddi</h2>
                <div className="row">
                    <div className="item five">
                        <div className="box sec">
                            <div className="icon sm">
                                <img src={user} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>Klienci</h4>
                                <p>Jeśli nie byłoby klienta nie byłoby aplikacji.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item six">
                        <div className="box sec">
                            <div className="icon sm">
                                <img src={farmer} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>Producenci</h4>
                                <p>Rolnicy jak i rzemieślnicy, to oni dzięki sowjej cięzkiej pracy wytwarzają produkt najwyższej jakości.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item seven">
                        <div className="box sec">
                            <div className="icon sm">
                                <img src={delivery} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>Dostawcy</h4>
                                <p>Każda osoba, która przy okazji podróży zadklaruje chęć dostarczenia towaru od Producenta do Klienta. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="row sec">*/}
                {/*    <div className="col o">asd</div>*/}
                {/*    <div className="col t">dfg</div>*/}
                {/*    <div className="col th">dfg</div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default About;
