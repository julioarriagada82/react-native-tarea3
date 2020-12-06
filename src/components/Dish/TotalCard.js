import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      margin: 20,
      padding: 20,
      backgroundColor: 'green',
      borderRadius: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttons: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: 'red',
    },
    buttonText: {
      color: '#ecf0f1',
      fontWeight: 'bold',
    },
  });

const TotalCard = ({total, deleteCard}) => (
    <View style={styles.container}>
        <Text style={styles.containerText}>Total carrito ({total})</Text>
        <TouchableOpacity
            onPress={deleteCard()}
            style={styles.buttons}>
            <Text style={styles.buttonText}>Vaciar carrito</Text>
        </TouchableOpacity>
    </View>
);
    
export default TotalCard;