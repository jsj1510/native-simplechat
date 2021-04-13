import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { Alert } from 'react-native';
import { signup } from '../utils/firebase';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 40px 20px;
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText};
`;

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [photoUrl, setPhotoUrl] = useState(images.photo);

    const passwordRef = useRef();
    const emailRef = useRef();
    const passwordConfirmRef = useRef();
    const didMountRef = useRef();

    useEffect(() => {
        if(didMountRef.current) {
            let _errorMessage = '';
            if(!name) {
                _errorMessage = "Please enter you name";
            } else if (!validateEmail(email)) {
                _errorMessage = "please email"
            } else if (password.length < 6) {
                _errorMessage = "length 6"
            } else if (password !== passwordConfirm) {
                _errorMessage = "not match";
            } else {
                _errorMessage = '';
            }
            setErrorMessage(_errorMessage);
        } else {
            didMountRef.current = true;
        }
    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        setDisabled(!(name && email && password && !errorMessage));
      }, [name, email, password, passwordConfirm, errorMessage]);
      


    const _handleSignupButtonPress = async () => {
        try {
            const user = await signup({ email, password, name, photoUrl });
            console.log(user);
            Alert.alert("sign sucess", user.email);
        } catch(e) {
            Alert.alert('signup error', e.message);
        }
    };


    return (
        <KeyboardAwareScrollView  
            extraScrollHeight={20}
        >
            <Container>
                <Image rounded url={photoUrl} showButton 
                onChange={url => setPhotoUrl(url)} />
                <Input
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim())
                        emailRef.current.focus();
                    }}
                    onBlur ={() => setName(name.trim())}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={emailRef}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="password"
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => {passwordConfirmRef.current.focus()}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                <Input
                    ref={passwordRef}
                    label="passwordconfirm"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={_handleSignupButtonPress}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />

                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="Sign up"
                    onPress={_handleSignupButtonPress}
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}


export default Signup
