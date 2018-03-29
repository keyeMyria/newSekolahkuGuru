import React, { Component } from 'react';

import { StackNavigator, SwitchNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import NavigatorService from './services/navigator';

import LoginForm from './components/unauthorized/LoginForm';
import GantiPassword from './components/unauthorized/GantiPassword';
import Home from './components/authorized/Home';
import Sekolah from './components/authorized/Sekolah';
import GantiAkun from './components/authorized/GantiAkun';
import Profile from './components/authorized/Profile';

import Pengumuman from './components/authorized/InsideHome/Pengumuman';
import PengumumanDetail from './components/authorized/InsideHome/PengumumanDetail';
import Absensi from './components/authorized/InsideHome/Absensi';
import AbsensiDetail from './components/authorized/InsideHome/AbsensiDetail';
import JadwalMapel from './components/authorized/InsideHome/JadwalMapel';
import Nilai from './components/authorized/InsideHome/Nilai';
import Raport from './components/authorized/InsideHome/Raport';
import RaportDetail from './components/authorized/InsideHome/RaportDetail';

const AuthStack = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      header: null
    }
  },
  gantiPassword: {
    screen: GantiPassword,
    navigationOptions: {
      header: null
    }
  }
});

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Pengumuman: { screen: Pengumuman },
  PengumumanDetail: { screen: PengumumanDetail },
  Absensi: { screen: Absensi },
  AbsensiDetail: { screen: AbsensiDetail },
  JadwalMapel: { screen: JadwalMapel },
  Nilai: { screen: Nilai },
  Raport: { screen: Raport },
  RaportDetail: { screen: RaportDetail }
});

const AppStack = TabNavigator({
  Home: { screen: HomeStack },
  Sekolah: { screen: Sekolah },
  'Ganti Akun': { screen: GantiAkun },
  Profil: { screen: Profile }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Sekolah') {
        iconName = `ios-school${focused ? '' : '-outline'}`;
      } else if (routeName === 'Ganti Akun') {
        iconName = `ios-people${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profil') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'rgb(255, 0, 0)'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom'
});

const Navigator = SwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'Auth'
});

class Router extends Component {
  render() {
    return (
      <Navigator
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
      />
    );
  }
}

export default Router;
