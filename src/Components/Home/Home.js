import React, {Component} from 'react';
import styled from 'styled-components'
import Header from "../Header/Header";
import Grid from '@material-ui/core/Grid';
import background from '../../img/strawberry.jpg'

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow: hidden;
  
  .shadow{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,30%);
  }

  .layer{
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -80px;
  
  ${({theme}) => theme.media.tablet}{
  bottom: 0;
  }
  }
  
  .caption{
  padding-left: 10%;
  padding-top: 35vh;
  display: flex;
  //align-items: center;
  justify-content: center;
  
  ${({theme}) => theme.media.tablet}{
    padding-top: 50%;
    padding-right: 10%;
  }
  }
  
  .phone{
  width: 300px;
  height: 2000px;
  overflow: hidden;
  @media(max-width: 1367px){
    
    width:200px
    
  }
  img{
  width: 100%;
  height: 100%;
  }
  
  
  ${({theme}) => theme.media.tablet}{
  display: none;
  }
  }
`;


class Home extends Component {

    render() {

        return (
            <HomeWrapper id="home">
                <div className="shadow">
                <Grid container>
                    <Grid item className="caption" xs={12} md={12}>
                        <Header/>
                    </Grid>
                </Grid>
                </div>
            </HomeWrapper>
        );
    }
}

export default Home;
