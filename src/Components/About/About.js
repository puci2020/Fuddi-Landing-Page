import React from 'react';
import "./About.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


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

                    <div className="one">
                        <div className="box first">
                            <div className="icon lg">asdasd</div>
                            <div className="text">asdkljasldkj</div>
                        </div>
                    </div>
                    <div className="two">
                        <div className="box first">
                            ggg
                        </div>
                    </div>

                </div>
                <h2>Pragniemy połączyć trzy grupy użytkowników Fuddi</h2>
                <div className="row">
                    <div className="five">
                        <div className="box sec">
                            asd
                        </div>
                    </div>
                    <div className="six">
                        <div className="box sec">
                            asd
                        </div>
                    </div>
                    <div className="seven">
                        <div className="box sec">
                            asd
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
