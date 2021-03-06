import React, {useState} from 'react';
import styled from 'styled-components'
import wave from '../../img/wave.png'
import people from '../../img/contact.png'
import {useTranslation} from "react-i18next";
import {db} from "../../firebaseConfigFile";

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
  display: flex;
  align-items: center;
  justify-content: center;
  img{
  width: 100%;
  height: auto;
  }
  
  ${({theme}) => theme.media.tablet}{
    display: none;
  }
`;

const ContactRight = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
    display: flex;
  align-items: center;
  justify-content: center;

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

// const Checkbox = styled.div`
//   width: auto;
//   height: auto;
//   display: flex;
//   align-items: center;
//   margin-bottom: 30px;
//   input[type="checkbox"]{
//     width: 20px;
//     height: 20px;
//     margin-right: 10px;
//   }
//   label{
//   display: flex;
//   align-items: center;
//   }
// `;

// const Label = styled.label`
//   margin-left: 10px;
//   color: rgb(5,28,74);
//
// `;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
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


const ContactItem = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    const date = Date().toLocaleString();

    const {t} = useTranslation();


    function onSubmit(e) {
        e.preventDefault();

        let errors = [];

        function emailIsValid(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        }

        if (firstName.length === 0) {
            errors.push(t('contact.alert.error.firstName'));
        }

        if (lastName.length === 0) {
            errors.push(t('contact.alert.error.lastName'));

        }

        if (email.length === 0) {
            errors.push(t('contact.alert.error.email.empty'));
        }else if (emailIsValid(email)===false){
            errors.push(t('contact.alert.error.email.invalid'));
        }

        if (question.length === 0) {
            errors.push(t('contact.alert.error.message'));

        }
        // if (checkbox === false) {
        //     errors.push(t('contact.alert.error.checkbox'));
        //
        // }

        if (errors.length !== 0) {
            alert(errors.join('\n'));
        } else {
            sendToDB();
            alert(t('contact.alert.error.success'))
        }
        function sendToDB() {
            db.collection('/contact-form').add({
                firstName,
                lastName,
                email,
                question,
                date
            }).then(() => {
                setFirstName('');
                setLastName('');
                setEmail('');
                setQuestion('');
            })
        }
    }


    return (
        <div>
            <H2>{t('contact.header')}</H2>
            <ContactWrapper>
                <ContactLeft>
                    <img src={people} alt="People"/>
                </ContactLeft>
                <ContactRight>
                    <form onSubmit={onSubmit}>
                        <SmallInput type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)}
                                    placeholder={t('contact.form.placeholder.firstName')}/>
                        <SmallInput type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)}
                                    placeholder={t('contact.form.placeholder.lastName')}/>
                        <SmallInput type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}
                                    placeholder="Email"/>
                        <Textarea value={question} onChange={e => setQuestion(e.currentTarget.value)}
                                  placeholder={t('contact.form.placeholder.question')}/>
                        {/*<Checkbox>*/}
                        {/*    <Label><input type="checkbox" checked={checkbox} onChange={e => setCheckbox(!checkbox)} name="policy"/>*/}
                        {/*    {t('contact.form.policy.part1')}<a href="#">{t('contact.form.policy.part2')}</a></Label>*/}
                        {/*</Checkbox>*/}
                        <Button type="submit">{t('contact.form.button')}</Button>
                    </form>
                </ContactRight>
            </ContactWrapper>
            <Wave src={wave} alt="White wave"/>
        </div>
    );
};

export default ContactItem;
