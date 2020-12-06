import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
  } from 'react-native';
  import {baseUri} from '../../rawData';
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#bdc3c7',
      borderRadius: 7,
      marginBottom: 10,
    },
    imageContainer: {
      height: 100,
    },
    image: {
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
    },
    textContainer: {
      padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 15,
    },
    information: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttons: {
      padding: 20,
      backgroundColor: '#8E44AD',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },
    buttonText: {
      color: '#ecf0f1',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
    },
  });
  
  const ViewButton = ({addCard, type}) => {
    return type === 'card-list' &&
    <TouchableOpacity
      onPress={addCard}
      style={styles.buttons}>
      <Text style={styles.buttonText}>Agregar al carro</Text>
    </TouchableOpacity>
  }

  const DishCard = ({title, readyInMinutes, servings, image, addCard, type}) => (
<View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: `${baseUri}${image}`}}
        />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.information}>
            <Text>{`Listo en ${readyInMinutes} min`}</Text>
            <Text>{`Para ${servings} personas`}</Text>
        </View>
        </View>
        <ViewButton addCard={addCard} type={type} />
    </View>
  );

  export default DishCard;

