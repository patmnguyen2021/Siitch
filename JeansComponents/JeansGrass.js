import React, {useState, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {ImageIcon} from '../ImageIcon';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Linking,
  TextInput,
  Pressable,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {images} from '../ImageURL';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const JeansGrass = ({inputData, navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
      <ImageBackground
        source={images.earthBackground}
        style={{width: Width, height: Height/1.5}}
        imageStyle={{resizeMode: 'stretch'}}>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 10}}>
          <Image source={images.cotton} style={{resizeMode: 'cover'}} />
          <Text
            style={{
              color: 'white',
              width: Width / 1.5,
              fontSize: 20,
              marginLeft: 20,
              marginTop: 10,
            }}>
            Cotton is an extremely thirsty crop to grow.
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
              marginLeft: 10,
              marginTop: 10,
            }}>
            65% of the worlds denims are still made using a heavy chemical process; bleach etc  
          </Text>
          <Image source={images.percent} style={{resizeMode: 'cover'}} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image source={images.drain} style={{resizeMode: 'cover',marginTop: 20, marginLeft: 10}} />
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>
            That outflow often pours into the rivers in countries like India & China, poisoning the soils & flowing into our oceans
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <Text
            style={{
              color: 'white',
              width: Width / 1.4,
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}>
            You can a make a difference! Support brands doing good
          </Text>
          <Image source={images.dollar} style={{resizeMode: 'cover', marginLeft: 10}} />
        </View>
      </ImageBackground>

      <TouchableHighlight
        onPress={() => navigation.navigate('What')}
        activeOpacity={1}
        underlayColor="#8DC73F"
        style={{
          backgroundColor: '#8DC73F',
          width: Width - Width / 5,
          height: Height / 20,
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: Width / 10,
          marginRight: Width / 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>What Can I do?</Text>
      </TouchableHighlight>
      <View style={{flexDirection:'column',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Doing good</Text>
        <Text style={{fontSize:16,width:Width/1.3}}>U.S.A companies, as recommended by
          <Text onPress={() => Linking.openURL('https://goodonyou.eco/')} style={{color:'#00ADEF'}}> Good On You, </Text>
          in random order.
        </Text>
      </View>
      <View  style={{flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.thereformation.com/')}}>
              <ImageIcon category='brand' image={images.ref}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.outlanddenim.com/')}}>
              <ImageIcon category='brand' image={images.outland}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.patagonia.com/home/')}}>
              <ImageIcon category='brand' image={images.patagonia}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.boyish.com/')}}>
              <ImageIcon category='brand' image={images.boyish}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.outerknown.com/')}}>
              <ImageIcon category='brand' image={images.outerknown}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://amourvert.com/')}}>
              <ImageIcon category='brand' image={images.amourvert}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://citizensofhumanity.com/')}}>
              <ImageIcon category='brand' image={images.citizens}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://triarchy.com/')}}>
              <ImageIcon category='brand' image={images.triarchy}></ImageIcon>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row',marginTop:'5%'}}>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.dl1961.com/')}}>
              <ImageIcon category='brand' image={images.dl}></ImageIcon>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={1} underlayColor="transperant" style={{ width: Width/2,alignItems:'center'}} onPress={ ()=>{ Linking.openURL('https://www.g-star.com/en_us')}}>
              <ImageIcon category='brand' image={images.g_star}></ImageIcon>
            </TouchableHighlight>
          </View>
        </View>
    </ScrollView>
  );
};
export default JeansGrass;
