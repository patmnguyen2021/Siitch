
import Vs from './MeatComponents/Vs';
import Grass from './MeatComponents/Grass';
import Recycle from './MeatComponents/Recycle';
import Heart from './MeatComponents/Heart';
import Water from './MeatComponents/Water';
import Search from './Search/Search';
import Compare, {compareScreen} from './Comparing/Compare';
import Camera, {cameraScreen} from './Camera/Camera';
import NormalSearch from './NormalSearchingComponents/NormalSearch';
import What from './MeatComponents/What';
// Jeans import
import JeansWater from './JeansComponents/JeansWater';
import JeansVs from './JeansComponents/JeansVs';
import JeansRecycle from './JeansComponents/JeansRecycle';
import JeansHeart from './JeansComponents/JeansHeart';
import JeansGrass from './JeansComponents/JeansGrass';
import WhatJeans from './JeansComponents/WhatJeans';
// Makeup import
import MakeupWater from './MakeupComponents/MakeupWater';
import MakeupVs from './MakeupComponents/MakeupVs';
import MakeupRecycle from './MakeupComponents/MakeupRecycle';
import MakeupHeart from './MakeupComponents/MakeupHeart';
import MakeupGrass from './MakeupComponents/MakeupGrass';
import WhatMakeUp from './MakeupComponents/WhatMakeUp';
//
import 'react-native-gesture-handler';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image, Dimensions, Button, Pressable, ScrollView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './Ranking/Styles';
import {RankStackScreen} from './Ranking/Ranking';
import {CalculateStackScreen} from './Calculate/Calculate';

//Stuff for extra menu
import { MenuMain } from './Menu/Screens';
import { Sources } from './Menu/Sources';
import { Mission } from './Menu/Mission';
import { About } from './Menu/About';
import { Virtual } from './Menu/Virtual';
import { FAQ } from './Menu/FAQ';
import { Feedback } from './Menu/Feedback';
import { Tutorial } from './Menu/Tutorial';

// import Profiles from './Ranking/ImageDB';
import {images} from './ImageURL';
import Profiles from './ImageDB';
import { color } from 'react-native-reanimated';
import { OnboardingScreen } from './OnboardingScreen';
const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;




function HomeScreen() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.MainContainer}>
          <Image
            style={styles.alpha}
            source={Profiles.alpha}
            resizeMode="contain"
          />
          <View style={styles.center}>
            <Image
              style={styles.logo}
              source={Profiles.logo}
              resizeMode="contain"
            />
          </View>
  
          <Text style={styles.text}>Make Good Choices For Our Planet</Text>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{width: DeviceWidth * 0.8, height: 300, marginBottom: DeviceHeight * 0.01}}
              source={Profiles.landing_image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.bottomtext}>Helping you make an</Text>
          <Text style={styles.bottomtext}>environmental <Text style={{
            position: 'relative',
            textAlign: 'center',
            color: '#70BF41',
            fontSize: 22,
            }}>IMPACT</Text>,</Text>
          <Text style={styles.bottomtext}>one Siitch-uation at a time</Text>
        </View>
      </ScrollView>
    );
  }
  
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const Stack = createStackNavigator();
  
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
        options={({navigation}) => ({
          headerBackTitleVisible: false,
          headerShown : true,
          headerTitle: null,
          headerRight: () => (
            <MaterialCommunityIcons
              name="menu"
              size={25}
              color={'black'}
              style={{
                paddingRight: 20
            }}
              onPress={() => navigation.navigate('Menu')}
            />
          ),
        })}
      />
      
      <HomeStack.Screen 
        name = "Menu"
        component = {MenuMain}
        />
      
      <HomeStack.Screen
      name = "Sources"
      component = {Sources}
      options = {({route}) => ({
        headerTitle: "Sources & Resources"
      })}
      />
      <HomeStack.Screen
      name = "Mission"
      component = {Mission}
      />
      <HomeStack.Screen
      name = "About"
      component = {About}
      />
      <HomeStack.Screen
      name = "Virtual"
      component = {Virtual}
      options = {({route}) => ({
        headerTitle: "Virtual Water"
      })}
      />
      <HomeStack.Screen
      name = "FAQ"
      component = {FAQ}
      options = {({route}) => ({
        headerTitle: "Frequently Asked Questions"
      })}
      />
      <HomeStack.Screen
      name = "Feedback"
      component = {Feedback}
      />
      <HomeStack.Screen
      name = "Tutorial"
      component = {Tutorial}
      options = {{
      }}
      />
      <HomeStack.Screen
      //This is so the button at the end
      //of the tutorial goes to the right place
      name = "Landing Page"
      component = {MenuMain}
      />
    </HomeStack.Navigator>
  );
  
  const landingdetails = () => {
    const [status, setStatus] = useState(true);
    const [getData, setGetData] = useState({});
    const [keyword, setKeyword] = useState('');
    const GoToSearch = ({navigation}) => {
      return <Search searchData={searchData} navigation={navigation} />;
    };
    const toWhat = () => {
      if (keyword === 'Beef') {
        return <What />;
      } else if (keyword === 'Jeans') {
        return <WhatJeans />;
      } else {
        return <WhatMakeUp />;
      }
    };
    const searchData = get => {
      setGetData(get);
    };
    const HomeTabs = () => {
      return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Rank"
            component={RankStackScreen}
            options={{
              tabBarLabel: 'Rank',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="chart-bar"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search2"
            component={GoToSearch}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Calculate"
            component={CalculateStackScreen}
            options={{
              tabBarLabel: 'Calculate',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="calculator"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Compare"
            component={compareScreen}
            options={{
              tabBarLabel: 'Compare',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={Profiles.vs_compare_select}
                    resizeMode="contain"
                  />
                ) : (
                  <Image source={Profiles.vs_compare} resizeMode="contain" />
                ),
            }}
          />
            <Tab.Screen
            name="Camera"
            component={cameraScreen}
            options={{
              tabBarLabel: 'Camera',
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={Profiles.camera_select}
                    resizeMode="contain"
                  />
                ) : (
                  <Image source={Profiles.camera} resizeMode="contain" />
                ),
            }}
          />
        </Tab.Navigator>
      );
    };
    const WaterPage = ({navigation}) => {
      if (keyword === 'Beef') {
        return <Water inputData={getData} navigation={navigation} />;
      } else if (keyword === 'Jeans') {
        return <JeansWater inputData={getData} navigation={navigation} />;
      } else {
        return <MakeupWater navigation={navigation} />;
      }
    };
    const HeartPage = ({navigation}) => {
      if (keyword === 'Beef') {
        return <Heart inputData={getData} navigation={navigation} />;
      } else if (keyword === 'Jeans') {
        return <JeansHeart inputData={getData} navigation={navigation} />;
      } else {
        return <MakeupHeart navigation={navigation} />;
      }
    };
    const VsPage = ({navigation}) => {
      if (keyword === 'Beef') {
        return <Vs inputData={getData} navigation={navigation} />;
      } else if (keyword === 'Jeans') {
        return <JeansVs inputData={getData} navigation={navigation} />;
      } else {
        return <MakeupVs navigation={navigation} />;
      }
    };
    const RecyclePage = ({navigation}) => {
      if (keyword === 'Beef') {
        return <Recycle inputData={getData} navigation={navigation} />;
      } else if (keyword === 'Jeans') {
        return <JeansRecycle inputData={getData} navigation={navigation} />;
      } else {
        return <MakeupRecycle navigation={navigation} />;
      }
    };
    const GrassPage = ({navigation}) => {
      if (keyword === 'Beef') {
        return <Grass inputData={getData} navigation={navigation} />;
      } else if (keyword === 'Jeans') {
        return <JeansGrass inputData={getData} navigation={navigation} />;
      } else {
        return <MakeupGrass navigation={navigation} />;
      }
    };
  
    const searchDetail = ({navigation, route}) => {
      setGetData(route.params.value);
      let detail = true;
      if (
        route.params.name !== 'Beef' &&
        route.params.name !== 'Jeans' &&
        route.params.name !== 'Makeup'
      ) {
        detail = false;
      }
      setKeyword(route.params.name);
      if (detail) {
        return (
          <Tab.Navigator
            tabBarOptions={{
              style: {height: DeviceHeight / 10},
              showLabel: false,
            }}>
            <Tab.Screen
              name="Water"
              component={WaterPage}
              options={{
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Image
                      source={images.water_drop_click}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.water_drop}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
            <Tab.Screen
              name="Vs"
              component={VsPage}
              options={{
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Image
                      source={images.vs_select}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.vs}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
            <Tab.Screen
              name="Grass"
              component={GrassPage}
              options={{
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Image
                      source={images.grass_select}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.grass}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
            <Tab.Screen
              name="Heart"
              component={HeartPage}
              options={{
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Image
                      source={images.heart_select}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.heart}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
            <Tab.Screen
              name="Recycle"
              component={RecyclePage}
              options={{
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <Image
                      source={images.recycle_select}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.recycle}
                      style={{width: DeviceWidth / 9, height: DeviceHeight / 18}}
                      resizeMode="contain"
                    />
                  ),
              }}
            />
          </Tab.Navigator>
        );
      }
      return (
        <NormalSearch name={route.params.name} inputData={route.params.value} />
      );
    };

    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Search"
              component={searchDetail}
              options={({navigation}) => ({
                headerBackTitleVisible: false,
                headerRight: () => (
                  <MaterialCommunityIcons
                    name="home"
                    size={25}
                    color={'grey'}
                    style={{
                      paddingRight: 15
                  }}
                    onPress={() => navigation.navigate('Home')}
                  />
                ),
              })}
            />
            <Stack.Screen name="What" component={toWhat} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  };

  export {
    landingdetails
  }