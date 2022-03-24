import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/index';
import styles from './style';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}&nbsp;<Text style={styles.taglineCTA}>{taglineCTA}</Text></Text>
            </View>

            <View style={styles.buttonContainer}>
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
        </View>
    );
};

export default CarItem;