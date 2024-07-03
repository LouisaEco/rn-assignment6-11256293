import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
      const updatedItems = selectedItems.filter((_, i) => i !== index);
      setSelectedItems(updatedItems);
      await AsyncStorage.setItem(
        'selectedItems',
        JSON.stringify(updatedItems)
      );
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

        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>C H E C K O U T</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <View style={styles.diamond} />
            <View style={styles.line} />
          </View>
        </View>

        {selectedItems.length === 0 ? (
          <Text style={styles.emptyMessage}>
            Items are not yet selected!
          </Text>
        ) : (
          selectedItems.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemType}>{item.dressType}</Text>
                <Text style={styles.itemDescription}>
                  {item.dressDescription}
                </Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveItem(index)}
                style={styles.removeButton}
              >
                <Image source={removeIcon} style={styles.removeImage} />
              </TouchableOpacity>
            </View>
          ))
        )}
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
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 12,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    width: 79,
    height: 32,
    marginLeft: 100,
  },
  searchContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
  },
  logoImage: {
    width: 79,
    height: 32,
  },
  searchImage: {
    width: 30,
    height: 30,
  },
  headingWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#CECECE',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DCDCDC',
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: '#DCDCDC',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 8,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
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
    color: '#DEA457',
  },
  itemDescription: {
    fontSize: 16,
    color: '#888',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
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
