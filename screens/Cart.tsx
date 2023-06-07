import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { CartType, ProductType } from "../utils/types";
import Buttons from "../components/Buttons";
import Icons from "../components/Icons";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Array<CartType>>([]);
  const [cartPrice, setCartPrice] = useState<number>(0);

  useEffect(() => {
    getCartItems();
    calculateTotal();
  },[]);

  const quantityIncrement = async (item: CartType) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    await updateCartItems(updatedCart);
  };

  const quantityDecrement = async (item: CartType) => {
    if (item.quantity === 1) {
      await deleteCartItem(item.id);
    } else {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      await updateCartItems(updatedCart);
    }
  };

  const deleteCartItem = async (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    await updateCartItems(updatedCart);
  };

  const getCartItems = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Cart');
      const cart = jsonValue != null ? JSON.parse(jsonValue) : [];
      setCartItems(cart);
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  };

  const updateCartItems = async (updatedCart: CartType[]) => {
    try {
      await AsyncStorage.setItem('Cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error updating cart items:', error);
    }
  };

  const calculateTotal = () => {
    let price = 0;
    cartItems.forEach((item) => {
      price += (item.price * item.quantity);
    });
    setCartPrice(price);
  };

  const renderItem = ({ item }: { item: CartType }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.thumbnailImage} source={{ uri: item.thumbnail }} />
      <View style={styles.itemDetailsContainer}>
        <Text>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
      </View>
      <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={() => quantityIncrement(item)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => quantityDecrement(item)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
     
      </View>
      <TouchableOpacity onPress={() => deleteCartItem(item.id)}>
        <Icons name='cross' />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartItemsContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>${cartPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    height: '80%',
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    padding: 10,
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemContainer: {
    justifyContent: 'center',
    height: 100,
    borderRadius: 20,
    width: '95%',
    backgroundColor: 'white',
    padding: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  thumbnailImage: {
    minHeight: '100%',
    width: '20%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  itemDetailsContainer: {
    width: '40%',
    padding: 10,
  },
  itemPrice: {
    color: '#FF1616',
    fontSize: 15,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    color: '#FF1616',
  },
  quantityText: {
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  totalLabel: {
    fontSize: 20,
    color: 'black',
  },
  totalAmount: {
    fontSize: 20,
    color: '#FF1616',
  },
});

export default Cart;
