import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur, }) => {
    const width = Dimensions.get('window').width;
    return (
        <StyledInput width={width}
         placeholder={placeholder}
         maxLength={50}
         autoCapitalize="none"
         autoCorrect={false}
         returnKeyType="done"
         keyboardAppearence="dark"
         value = {value}
         onChangeText = {onChangeText}
         onSubmitEditing = {onSubmitEditing}
         onBlur ={onBlur}
         />
    );
};

Input.propTypes = {
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    onChangeText: propTypes.func.isRequired,
    onSubmitEditing: propTypes.func.isRequired,
    onBlur: propTypes.func.isRequired,
};

export default Input;