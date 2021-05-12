import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DetailsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Hello React</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%'
    },
});
export default DetailsScreen;