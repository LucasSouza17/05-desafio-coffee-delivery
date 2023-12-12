import { View, Image, Text } from "react-native";

import CoffeeImage from "../../assets/cubano.png";

import { styles } from "./styles";
import { CoffeePrice } from "../CoffeePrice";
import { CoffeeData } from "../../@types/coffee";

type Props = {
  coffee: CoffeeData
}

export function CoffeeCard({coffee}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={coffee.image} style={styles.image} />
        <View style={styles.contentInfo}>
          <View>
            <Text style={styles.title}>{coffee.title}</Text>
            <Text style={styles.description}>
              {coffee.description}
            </Text>
          </View>
          <CoffeePrice price={coffee.price} />
        </View>
      </View>
    </View>
  );
}
