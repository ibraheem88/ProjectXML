import 'react-native-gesture-handler'
import { StyleSheet,Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Complain from './src/screens/Complains';
import ReportIssue from './src/screens/ReportIssue';
import ConfirmIssue from './src/screens/ConfirmIssue';
import Onboarding from './src/screens/Onboarding';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector,useDispatch } from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './src/state/store'
import { setUserInfo } from './src/state/actions/userActions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = () => {
  const {user,firstTime}=useSelector(state=>state.user)
  const {token} = user;
  return (
    <Stack.Navigator initialRouteName={firstTime ? "Onboarding" : token ? "Home" : "Login"}>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
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
  const dispatch=useDispatch()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          dispatch(setUserInfo({token:null}))
          props.navigation.replace('Login');
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
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <HomeStack />
            </PersistGate>
          </Provider>
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
