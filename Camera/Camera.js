import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const CameraStack = createStackNavigator();

function CameraScreen() {
    return(<div>Patrick was here!!!</div>);
}

export const cameraScreen = () => (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
      <CameraStack.Screen name="Camera Details" component={CameraScreen} />
    </CameraStack.Navigator>
  );