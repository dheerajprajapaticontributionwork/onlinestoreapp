import React from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import styled from 'styled-components/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Rating, AirbnbRating} from 'react-native-ratings';
// const FormContainer = styled.View`
//   flex: 1;
//   padding: 20px;
//   justify-content: center;
// `;

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .required('Name is required')
//     .matches(/^[A-Za-z\s]*$/, 'Name must contain only letters'),
//   email: yup.string().email('Invalid email').required('Email is required'),
// });

// type FormData = yup.InferType<typeof schema>;

export const ProductPreview = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: {errors},
  // } = useForm<FormData>({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = (data: FormData) => {
  //   console.log(data);
  //   // Handle form submission
  // };
  const route = useRoute();
  const {productData} = route.params;
  const ReviewItem = ({review}) => (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E0E0E0',
        padding: 10,
        marginVertical: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: '600'}}>{review.reviewerName}</Text>
        <AirbnbRating
          defaultRating={review.rating}
          count={5}
          size={13}
          showRating={false}
        />
      </View>
      {/* <Text>Rating: {review.rating}</Text> */}
      <Text>{review.comment}</Text>
      <Text>On {new Date(review.date).toLocaleDateString()}</Text>
    </View>
  );
  const {width, height} = Dimensions.get('window');
  const productdetails = [
    {id: 1, name: productData.warrantyInformation},
    {id: 2, name: productData.shippingInformation},
    {id: 3, name: productData.availabilityStatus},
    {id: 4, name: productData.returnPolicy},
  ];
  const Productdetailsitem = ({details}) => (
    <View style={{flexDirection: 'row'}}>
      <Text>{details.name}</Text>
    </View>
    // <View
    //   style={{
    //     borderWidth: 1,
    //     borderRadius: 15,
    //     borderColor: '#E0E0E0',
    //     padding: 10,
    //     marginVertical: 5,
    //   }}>
    //   <View style={{flexDirection: 'row'}}>
    //     <Text style={{fontWeight: '600'}}>{review.reviewerName}</Text>
    //     <AirbnbRating
    //       defaultRating={review.rating}
    //       count={5}
    //       size={13}
    //       showRating={false}
    //     />
    //   </View>
    //   {/* <Text>Rating: {review.rating}</Text> */}
    //   <Text>{review.comment}</Text>
    //   <Text>{new Date(review.date).toLocaleDateString()}</Text>
    // </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Procduct Image */}
        <View>
          <Image
            source={{uri: productData.thumbnail}}
            width={width - 40}
            height={height / 2.5}
            style={styles.productimage}
          />
        </View>
        {/* Procduct Price & Description */}

        <View>
          <View style={styles.prinndiscount}>
            <Text style={styles.productprice}>${productData.price}</Text>
            <Text style={styles.productdiscount}>
              {productData.discountPercentage}% off
            </Text>
          </View>
          <Text style={styles.producttitle}>{productData.title}</Text>
          <Text style={styles.productdescription}>
            {productData.description}
          </Text>
        </View>
        {/* Procduct Details */}
        {/* <View style={{flexDirection: 'row'}}>
          {/* <FlatList
            data={productdetails}
            renderItem={({item}) => <Productdetailsitem details={item} />}
            keyExtractor={(item, index) => index.toString()}
            // contentContainerStyle={styles.list}
          /> 
          <Text>Warranty:- {productData.warrantyInformation}</Text>
          <Text>Shipping:- {productData.shippingInformation}</Text>
          <Text>Availability:- {productData.availabilityStatus}</Text>
          <Text>Return:- {productData.returnPolicy}</Text>
        </View> */}
        <View style={styles.productdetailscontainer}>
          <Text style={styles.productdetails}>Details</Text>
          <Text>Width:- {productData.dimensions.width}</Text>
          <Text>Height:- {productData.dimensions.height}</Text>
          <Text>Depth:- {productData.dimensions.depth}</Text>
          <Text>Brand:- {productData.brand}</Text>
          <Text>SKU:- {productData.sku}</Text>
          <Text>Weight:- {productData.weight}</Text>
          <Text>Stock:- {productData.stock}</Text>
          <Text>Min Order Quantity:- {productData.minimumOrderQuantity}</Text>
          <Text>Warranty:- {productData.warrantyInformation}</Text>
          <Text>Shipping:- {productData.shippingInformation}</Text>
          <Text>Availability:- {productData.availabilityStatus}</Text>
          <Text>Return:- {productData.returnPolicy}</Text>
          {/* <Text>{productData.availabilityStatus}</Text> */}
          {/* "warrantyInformation": "1 month warranty",
      "shippingInformation": "Ships in 1 month",
      "availabilityStatus": "Low Stock", */}
        </View>

        <View>
          {/* <Text>{productData.reviews[0].reviewerName}</Text>
          <Text>{productData.reviews[0].date}</Text>
          <Text>{productData.reviews[0].reviewerEmail}</Text>
          <Text>{productData.reviews[0].comment}</Text> */}
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              paddingLeft: 5,
              color: 'black',
            }}>
            Reviews
          </Text>
          <FlatList
            data={productData.reviews}
            renderItem={({item}) => <ReviewItem review={item} />}
            keyExtractor={(item, index) => index.toString()}
            // contentContainerStyle={styles.list}
          />

          {/* <Text>{productData.rating}</Text> */}
        </View>
      </View>
    </ScrollView>
  );
};
// const styles = StyleSheet.create({
// container: {
//   margin: 20,
// },
// });
