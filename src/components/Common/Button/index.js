import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native'

const Button = ({onPress, children}) => {
    const { buttonStyle } = styles;
    
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            {children}
        </TouchableOpacity>
    )
}