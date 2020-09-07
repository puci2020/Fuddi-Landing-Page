import React from 'react';
import styled from 'styled-components'
import wave from '../../img/wave.png'
import people from '../../img/contact.png'

const ContactWrapper = styled.div`
  
  width: 100%;
  //min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  grid-gap: 60px;
  padding: 0 10%;
  
  
  ${({theme}) => theme.media.tablet}{
  grid-template-columns: 1fr;
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 40px 20px 40px 10%;
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
`;

const Wave = styled.img`
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  z-index: 0;
  
`;

const ContactLeft = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  //background-color: #636363;
  img{
  width: 100%;
  height: auto;
  }
`;

const ContactRight = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SmallInput = styled.input`
&[type="text"]{
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  margin-bottom: 30px;
  outline: none;
  font: inherit;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 20px;
  border: 1px solid lightgrey;
  padding-left: 20px;
  margin-bottom: 30px;
  outline: none;
  padding-top: 10px;
  font: inherit;
  height: 30vh;
`;

const Checkbox = styled.div`
 
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 8px;
    cursor: pointer;

    
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      background-color: lightgray;
      border-radius: 3px;

  
`

const Label = styled.label`
  margin-left: 20px;
  color: ${({theme}) => theme.colors.white};
`;

const ContactItem = () => {
    return (
        <div>
            <H2>Chcesz o coś zapytać?</H2>
            <ContactWrapper>
                <ContactLeft>
                    <img src={people} alt="People"/>
                </ContactLeft>
                <ContactRight>
                    <SmallInput type="text" placeholder="Imię"/>
                    <SmallInput type="text" placeholder="Nazwisko"/>
                    <SmallInput type="text" placeholder="Email"/>
                    <Textarea  placeholder="Twoje pytanie..."/>
                    <Checkbox type="checkbox" name="policy"/>
                    <Label for="policy">Akceptuję politykę prywatności</Label>
                    {/*<Checkbox>*/}
                    {/*    <input className="checkbox" type="checkbox" />*/}
                    {/*    <p>Akceptuje politykę prywatności</p>*/}
                    {/*</Checkbox>*/}
                </ContactRight>
            </ContactWrapper>
            <Wave src={wave} alt="White wave"/>
        </div>
    );
};

export default ContactItem;
