import React, {Component} from 'react';
import styled from 'styled-components'
import Header from "../Header/Header";
import Grid from '@material-ui/core/Grid';
import background from '../../img/home-strawberry.jpeg'
import backgroundTablet from '../../img/home-strawberry-tablet.jpeg'
import backgroundPhone from '../../img/home-strawberry-phone.jpeg'

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
   ${({theme}) => theme.media.tablet}{
     background-image: url(${backgroundTablet});
  }
  ${({theme}) => theme.media.phone}{
     background-image: url(${backgroundPhone});
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
