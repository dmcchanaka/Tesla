import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/index';
import styles from './style';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} resizeMode="cover" style={styles.backgroundImage} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
                type="primary" 
                content={"Custom Order"}
                onPress={()=>{
                    console.warn("custom order button pressed");
                }}
            />
            <StyledButton 
                type="secondary"
                content={"Existing Inventory"}
                onPress={()=>{
                    console.warn("existing inventory button pressed");
                }}
             />
        </View>
    );
};

export default CarItem;