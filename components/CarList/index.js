import React from 'react';
import {View, Text, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import CarContainer from '../CarItem/index';
import styles from './style';

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars} 
            renderItem={({item}) => <CarContainer car={item} /> }    
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('screen').height}
            />
        </View>
        
    );
};

export default CarList;