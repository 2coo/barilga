import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import WarehouseList from "../screens/WarehouseList";
// import SearchWarehouse from "../screens/SearchWarehouse";
import WarehouseItems from "../screens/WarehouseItems/WarehouseItems";
import ItemDetail from "../screens/ItemDetail/ItemDetail";
import Profile from "../screens/Profile/Profile";
import History from "../screens/History/History";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { HomeBottomNavigation } from "../component/HomeBottomNavigation/HomeBottomNavigation";

import React from "react";

const assetController = createStackNavigator(
  {
    WarehouseList: {
      screen: WarehouseList
    },
    // SearchWarehouse: {
    //   screen: SearchWarehouse
    // },
    WarehouseItems: {
      screen: WarehouseItems
    },
    ItemDetail: {
      screen: ItemDetail
    }
  },
  {
    headerMode: "none"
  }
);

const profileController = createStackNavigator(
  {
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none"
  }
);

const historyController = createStackNavigator(
  {
    History: {
      screen: History
    }
  },
  {
    headerMode: "none"
  }
);

// const BottomTab = createBottomTabNavigator();

// const HomeTabsNavigator = () => (
//   <BottomTab.Navigator initialRouteName={initialTabRoute}>
//     <BottomTab.Screen name="Warehouses" component={assetController} />
//     <BottomTab.Screen name="Profile" component={profileController} />
//   </BottomTab.Navigator>
// );

const LoggedInNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: assetController
    },
    History: {
      screen: historyController
    },
    Profile: {
      screen: profileController
    }
  },
  {
    labeled: false,
    tabBarComponent: props => <HomeBottomNavigation {...props} />
  }
);

export default LoggedInNavigator;
