import React, {useState} from 'react';
import styled from 'styled-components'
import firebase from "../../firebaseConfigFile";
import {useTranslation} from "react-i18next";

const StyledItem = styled.div`
  width: auto;
  height: 100%;
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 40px 20px;
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
  text-align: center;
`;

const FormWrapper = styled.div`
  form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
`;

const SmallInput = styled.input`
&[type="text"]{
  width: 80%;
  height: 40px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  margin-bottom: 30px;
  outline: none;
  font: inherit;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 20px;
  //border: 1px solid lightgrey;
  border: none;
  outline: none;
  cursor:pointer;
  background-color: rgba(15, 173, 142 ,1);
  font-size: ${({theme}) => theme.font.size.s};
  letter-spacing: ${({theme}) => theme.font.space.s};
  color: ${({theme}) => theme.colors.white};
  transition: background-color .2s ease-in-out;
  &:hover{
  background-color: #18611c;
  }
`;

const NewsletterItem = () => {
    const [email, setEmail] = useState('');
    const date = Date().toLocaleString();

    const {t} = useTranslation();

    function onSubmit(e){
        e.preventDefault();

        let errors = [];

        function emailIsValid(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        }

        if (email.length === 0) {
            errors.push(t('contact.alert.error.email.empty'));
        }else if (emailIsValid(email)===false){
            errors.push(t('contact.alert.error.email.invalid'));
        }

        if (errors.length !== 0) {
            alert(errors.join('\n'));
        } else {
            sendToDB();
            alert(t('contact.alert.error.success'))
        }

        function sendToDB() {
            firebase.firestore().collection('/newsletter').add({
                email,
                date
            }).then(() => {
                setEmail('');
            })
        }
    }

    return (
        <StyledItem>
            <H2>{t('newsletter.header')}</H2>
            <FormWrapper>
                <form onSubmit={onSubmit}>
                    <SmallInput type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}
                                placeholder="Email"/>
                    <Button type="submit">{t('contact.form.button')}</Button>
                </form>
            </FormWrapper>
        </StyledItem>
    );
};

export default NewsletterItem;
