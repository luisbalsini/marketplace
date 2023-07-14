import React from 'react';

import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/home';
import Login from './modules/login';
import { MenuUrl } from './shared/enums/menuUrl.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser/screens/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/icon/icon';
import { theme } from './shared/themes/theme';
import Profile from './modules/profile';
import Orders from './modules/orders';
import Product from './modules/product';

const TabNavigation = () => {
  const renderTabBarIcon = (
    color: string,
    size: number,
    route: RouteProp<ParamListBase, string>
  ) => {
    let iconName: string;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Orders':
        iconName = 'cart';
        break;
      default:
        iconName = 'profile';
        break;
    }

    return <Icon name={iconName} color={color} size={size} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => renderTabBarIcon(color, size, route),
        tabBarActiveTintColor: theme.colors.purpleTheme.purple80,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 60,
          padding: 8,
        },
      })}
    >
      <Tab.Screen
        name={MenuUrl.HOME_TAB}
        component={Home}
        options={{ title: 'Home', headerShown: false }}
      />
      <Tab.Screen
        name={MenuUrl.ORDERS}
        component={Orders}
        options={{ title: 'Pedidos', headerShown: false }}
      />
      <Tab.Screen
        name={MenuUrl.PROFILE}
        component={Profile}
        options={{ title: 'Perfil', headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.PRODUCT} component={Product} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar Usuário' }}
        />
        <Stack.Screen
          name={MenuUrl.HOME}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
