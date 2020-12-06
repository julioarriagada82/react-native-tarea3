import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, StyleSheet, View, Text, Alert} from 'react-native';
import HorizontalScroll from '../HorizontalScroll';
import {dishData} from '../../rawData';
import DishCard from './DishCard';
import TotalCard from './TotalCard';

const styles = StyleSheet.create({
  flatListFirstContainer: {
    padding: 10,
    width: '100%',
    height: '100%',
    flexGrow: 0,
  },
  flatListContainer: {
    padding: 10,
    width: '100%',
  },
  horizontalScroll: {margin: 10},
  TitleText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

const TYPE_LIST = 'card-list'

export default class DishList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishData,
      selectedDishes: [],
      orderDishes: [],
    };
  }

  selectDishes = (name) => {
    const {dishes} = this.state;

    const filteredDishes = dishes.filter((dish) => dish.cuisine === name);

    this.setState({selectedDishes: filteredDishes});
  };

  deleteCard = () => {
  
    Alert.alert('Confirmación', '¿Quieres eliminar todo el carrito?', [
      {
        text: 'Borra todo!!',
        onPress: () => {
          this.setState({orderDishes: []});
          Alert.alert("¡Muy Bien!",'Carro vacio!');
        },
      },
      {
        text: 'Me arrepenti',
      },
    ]);
  }

  addCard = (id) => {
    const { dishes, orderDishes } = this.state;

    for(order in orderDishes) {

      if(orderDishes[order].id == id){
        return;
      }
    }

    this.setState({
      orderDishes: 
      [...orderDishes, 
        dishes.find((dish) => dish.id === id),
      ],
    });

    Alert.alert("¡Muy Bien!",'Agregado al carrito!');
    
  }

  renderTotalCard = () => {
    const {orderDishes} = this.state;
    return orderDishes.length > 0 && <TotalCard total={orderDishes.length} deleteCard={() => this.deleteCard}></TotalCard>
  }

  renderOrderDishes = () => {
    const {orderDishes} = this.state;
    return orderDishes.length > 0 && 
    <FlatList
          style={styles.flatListContainer}
          data={orderDishes}
          keyExtractor={({id}) => id.toString()}
          renderItem={({
            item: {id, title, readyInMinutes, servings, image, sourceUrl},
          }) => (
            <DishCard
              id={id}
              title={title}
              readyInMinutes={readyInMinutes}
              servings={servings}
              image={image}
              sourceUrl={sourceUrl}
              addCard={() => this.addCard(id)}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.TitleText}>Lista vacia</Text>
            </View>
          )}
        />
  }

  render() {
    const {selectedDishes} = this.state;
    return (
      <>
        <HorizontalScroll
          style={styles.horizontalScroll}
          onPress={this.selectDishes}
        />
        <FlatList
          style={styles.flatListFirstContainer}
          data={selectedDishes}
          keyExtractor={({id}) => id.toString()}
          renderItem={({
            item: {id, title, readyInMinutes, servings, image, sourceUrl},
          }) => (
            <DishCard
              title={title}
              readyInMinutes={readyInMinutes}
              servings={servings}
              image={image}
              addCard={() => this.addCard(id)}
              type={TYPE_LIST}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.TitleText}>No hay items</Text>
            </View>
          )}
        />
        {this.renderTotalCard()}
        {this.renderOrderDishes()}
      </>
    );
  }
}
