import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { ShoppingCart } from "../screens/ShoppingCart";
import { OrderCompleted } from "../screens/OrderCompleted";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="shopping_cart" component={ShoppingCart} />
      <Screen name="order_completed" component={OrderCompleted} />
    </Navigator>
  );
}
