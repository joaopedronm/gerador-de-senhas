import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Passwords() {
    return (
        <View style={styles.container}>
            <Text>Minhas Senhas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

// export default Passwords;
