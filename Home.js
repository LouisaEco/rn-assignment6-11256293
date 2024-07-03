import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const menu = require('./assets/Menu.png');
  const logo = require('./assets/Logo.png');
  const search = require('./assets/Search.png');
  const shoppingBag = require('./assets/shoppingBag.png');
  const contentImage = require('./assets/content.png');
  const sortDescendingImage = require('./assets/sortDescending.png');
  const dress1 = require('./assets/dress1.png');
  const dress2 = require('./assets/dress2.png');
  const dress3 = require('./assets/dress3.png');
  const dress4 = require('./assets/dress4.png');
  const dress5 = require('./assets/dress5.png');
  const dress6 = require('./assets/dress6.png');
  const dress7 = require('./assets/dress7.png');
  const addCircle = require('./assets/addCircle.png');

  const navigation = useNavigation();

  const handleAddToCart = async (item) => {
    try {
      const existingItems = await AsyncStorage.getItem('selectedItems');
      let updatedItems = existingItems ? JSON.parse(existingItems) : [];

      updatedItems.push(item);

      await AsyncStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleNavigateToCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.menuContainer}>
            <Image source={menu} style={styles.menuImage} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
              <View style={styles.searchContainer}>
                <Image source={search} style={styles.searchImage} />
              </View>
          </TouchableOpacity>
          <View style={styles.shoppingBagContainer}>
            <Image source={shoppingBag} style={styles.shoppingBagImage} />
          </View>
        </View>

        <View style={styles.secondHeader}>
          <Text style={styles.ourStoryText}>O  U  R    S  T  O  R  Y</Text>
          <TouchableOpacity onPress={handleNavigateToCheckout}>
            <View style={styles.contentContainer}>
              <Image source={contentImage} style={styles.contentImage} />
            </View>
          </TouchableOpacity>
          <View style={styles.sortDescendingContainer}>
            <Image source={sortDescendingImage} style={styles.sortDescendingImage} />
          </View>
        </View>

        <View style={styles.dressesContainer}>
          <View style={styles.dressContainer}>
            <Image source={dress1} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress1, dressType: 'Office Wear', dressDescription: 'reversible angora cardigan', price: '$120' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Office Wear</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$120</Text>
            </View>
          </View>
          <View style={styles.dressContainer}>
            <Image source={dress2} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress2, dressType: 'Black', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Black</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
        </View>

        <View style={styles.dressesContainer}>
          <View style={styles.dressContainer}>
            <Image source={dress3} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress3, dressType: 'Church Wear', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Church Wear</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
          <View style={styles.dressContainer}>
            <Image source={dress4} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress4, dressType: 'Lamerai', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Lamerai</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
        </View>

        <View style={styles.dressesContainer}>
          <View style={styles.dressContainer}>
            <Image source={dress5} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress5, dressType: '21WN', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>21WN</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
          <View style={styles.dressContainer}>
            <Image source={dress6} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress6, dressType: 'Lapo', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Lapo</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
        </View>

        <View style={styles.dressesContainer}>
          <View style={styles.dressContainer}>
            <Image source={dress7} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress7, dressType: '21WN', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>21WN</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
          <View style={styles.dressContainer}>
            <Image source={dress3} style={styles.dressImage} />
            <TouchableOpacity onPress={() => handleAddToCart({ image: dress3, dressType: 'Lame', dressDescription: 'reversible angora cardigan', price: '$180' })} style={styles.addCircleContainer}>
              <Image source={addCircle} style={styles.bottomRightImage} />
            </TouchableOpacity>
            <View style={styles.dressText}>
              <Text style={styles.dressType}>Lame</Text>
              <Text style={styles.dressDescription}>reversible angora cardigan</Text>
              <Text style={styles.price}>$180</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 10,
    marginBottom: 12,
    marginRight: 10,
    marginLeft: 10,
  },
  menuContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    marginLeft: 50,
  },
  searchContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  shoppingBagContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft: -25,
  },
  menuImage: {
    width: 50,
    height: 50,
  },
  logoImage: {
    width: 125,
    height: 48,
  },
  searchImage: {
    width: 30,
    height: 30,
  },
  shoppingBagImage: {
    width: 30,
    height: 30,
  },
  secondHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 12,
    marginLeft: 10,
  },
  ourStoryText: {
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 34,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    marginRight: 20,
  },
  contentImage: {
    // Add your image styles here
  },
  sortDescendingContainer: {
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 34,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
  },
  sortDescendingImage: {
    // Add your image styles here
  },
  dressesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 14,
  },
  dressContainer: {
    position: 'relative',
    paddingTop: 0,
  },
  dressImage: {
    width: 165,
    height: 221,
  },
  addCircleContainer: {
    position: 'absolute',
    bottom: 50,
    right: 15,
  },
  bottomRightImage: {
    width: 30,
    height: 30,
  },
  dressText: {
    marginTop: 10,
    marginBottom: -20,
  },
  dressType: {
    fontWeight: 'bold',
  },
  dressDescription: {
    color: 'gray',
  },
  price: {
    color: 'red',
  },
});

export default Home;