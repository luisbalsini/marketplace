import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/home';
// import Login from './modules/login';
// import { MenuUrl } from './shared/enums/menuUrl.enum';
// import Splash from './modules/splash';
// import CreateUser from './modules/createUser/screens/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/icon/icon';
import { theme } from './shared/themes/theme';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name={MenuUrl.SPLASH} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }} />
        <Stack.Screen
          name={MenuUrl.CREATE_USER}
          component={CreateUser}
          options={{ title: 'Criar Usuário' }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
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
          },
          tabBarActiveTintColor: theme.colors.mainTheme.primary,
          tabBarInactiveTintColor: theme.colors.grayTheme.gray80,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Orders" component={Home} options={{ title: 'Pedidos' }} />
        <Tab.Screen name="Profile" component={Home} options={{ title: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
