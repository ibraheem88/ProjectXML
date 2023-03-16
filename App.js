import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Complain from './src/screens/Complains';
import ReportIssue from './src/screens/ReportIssue';
import ConfirmIssue from './src/screens/ConfirmIssue';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Complains" component={Complain} />
      <Stack.Screen name="Report Issue" component={ReportIssue} />
      <Stack.Screen name="Confirm Issue" component={ConfirmIssue} />
    </Stack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          console.log("Logout")
        }}
      />
    </DrawerContentScrollView>
  );
}

const AppDrawer = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Home Drawer"
      component={Home}
      options={{ title: 'Home' }}
    />
    {/* <Drawer.Screen name="Verified Orders" component={VerifiedOrders} /> */}
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <HomeStack />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
