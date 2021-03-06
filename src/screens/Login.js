import React, { useState, useRef, useEffect, useContext } from 'react';
import { ProgressContext, UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { images } from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { Alert } from 'react-native';
import { login } from '../utils/firebase';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 20px;
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText};
`;

function Login({ navigation }) {
    const { spinner } = useContext(ProgressContext);
    const { dispatch } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
      setDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);
    
    const passwordRef = useRef();
    

    const _handleEmailChage = email => {
            const changedEmail = removeWhitespace(email);
            setEmail(changedEmail);
            setErrorMessage(
                validateEmail(changedEmail) ? '' : 'Plase verify your email'
            );
    }

    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    };

    const _handleLoginButtonPress = async () => {
        try {
          spinner.start();
          const user = await login({ email, password });
          dispatch(user);
        } catch (e) {
          Alert.alert('Login Error', e.message);
        } finally {
          spinner.stop();
        }
    };


    return (
        <KeyboardAwareScrollView 
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}
        >
            <Container>
                <Image url={images.logo} imageStyle={{ borderRadius: 8}} />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={_handleEmailChage}
                    onSubmitEditing={_handleLoginButtonPress}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="password"
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={() => {}}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="Login"
                    onPress={_handleLoginButtonPress}
                    disabled={disabled}
                />
                <Button
                    title="Sign up with email"
                    onPress={() => navigation.navigate('Signup')}
                    isFilled={false}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}


export default Login
