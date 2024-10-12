import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';

export const Products = ({navigation}) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    mainMethod();
  }, []);

  const mainMethod = async () => {
    await handleSplashScreen();
  };

  const handleSplashScreen = async () => {
    console.log('Starting method');

    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setProductsData(jsonData.products); // Use jsonData.products
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleProductPreview = async productData => {
    const params = {
      productData: productData,
    };
    navigation.navigate('ProductPreview', params);
  };
  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleProductPreview(item)}>
        <View style={styles.productContainer}>
          <View>
            <Image
              source={{uri: item.images[0]}}
              width={60}
              height={60}
              style={styles.productimage}
            />
          </View>
          {/* <Text></Text> */}
          <View style={styles.productdata}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 18,
                  marginRight: 10,
                  color: 'black',
                  fontWeight: '600',
                }}>
                ${item.price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  color: 'green',
                  fontWeight: '600',
                }}>
                {item.discountPercentage}% off
              </Text>
            </View>
            {/* <AirbnbRating
              defaultRating={item.rating}
              count={5}
              size={13}
              showRating={false}
            /> */}
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.title} numberOfLines={1}>
              Stocks - {item.stock}
            </Text>
            {/* <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Products</Text>
        <FlatList
          data={productsData}
          renderItem={renderData}
          keyExtractor={item => item.id.toString()} // Convert id to string
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  productContainer: {
    // padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginVertical: 8,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#deddd9',
  },
  productimage: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#deddd9',
  },
  productdata: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    marginRight: 10,

    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    marginRight: 20,
  },
});
