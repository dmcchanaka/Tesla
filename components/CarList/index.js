import React from 'react';
import {View, Text, FlatList} from 'react-native';
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
            />
        </View>
        
    );
};

export default CarList;