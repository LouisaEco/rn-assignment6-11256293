import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckoutPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const removeIcon = require('./assets/remove.png'); 
  const logo = require('./assets/Logo.png');
  const search = require('./assets/Search.png');

  useEffect(() => {
    const loadSelectedItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('selectedItems');
        if (storedItems) {
          setSelectedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Error loading selected items:', error);
      }
    };

    loadSelectedItems();
  }, []);

  const handleRemoveItem = async (index) => {
    try {
      // Remove the item from selectedItems
      const updatedItems = selectedItems.filter((_, i) => i !== index);

      // Update the state
      setSelectedItems(updatedItems);

      // Save the updated items to AsyncStorage
      await AsyncStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          <View style={styles.searchContainer}>
            <Image source={search} style={styles.searchImage} />
          </View>
        </View>

        <View style={styles.headingContainer}>
          <View style={styles.line} />
          <View style={styles.diamond} />
          <Text style={styles.heading}>Checkout</Text>
          <View style={styles.line} />
        </View>

        {selectedItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemType}>{item.dressType}</Text>
              <Text style={styles.itemDescription}>{item.dressDescription}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
              <Image source={removeIcon} style={styles.removeImage} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure items are centered vertically
    paddingBottom: 10,
    marginBottom: 12,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logoImage: {
    width: 125,
    height: 48,
  },
  searchImage: {
    width: 30,
    height: 30,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'relative',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemDetails: {
    marginLeft: 10,
  },
  itemType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#888',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  removeImage: {
    width: 24,
    height: 24,
  },
});

export default CheckoutPage;
