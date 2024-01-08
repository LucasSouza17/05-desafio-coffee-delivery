import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { SlideInDown, SlideInUp } from "react-native-reanimated";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import { NavHeader } from "../../components/NavHeader";
import { Tag } from "../../components/Tag";
import { CoffeeTitle } from "../../components/CoffeeTitle";
import { CoffeePrice } from "../../components/CoffeePrice";
import { CoffeeDescription } from "../../components/CoffeeDescription";
import { SizeButton } from "../../components/SizeButton";
import { Button } from "../../components/Button";
import { AddRemoveButton } from "../../components/AddRemoveButton";
import { Smoke } from "../../components/Smoke";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

import CoffeeDetails from "../../assets/coffeedetails.png";
import { COFFEES } from "../../data/coffees";
import { CoffeeData } from "../../@types/coffee";
import { useCart } from "../../hooks/useCart";

interface Params {
  id: number;
}

export function Details() {
  const { bottom } = useSafeAreaInsets();

  const { addCart } = useCart();

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as Params;

  const [isLoading, setIsLoading] = useState(true);
  const [coffee, setCoffee] = useState<CoffeeData | null>(null);
  const [sizeSelected, setSizeSelected] = useState("");
  const [coffeeAmount, setCoffeeAmount] = useState(1);

  function handleIncreaseCoffee() {
    setCoffeeAmount((amount) => amount + 1);
  }

  function handleDecreaseCoffee() {
    if (coffeeAmount === 1) {
      return;
    } else {
      setCoffeeAmount((amount) => amount - 1);
    }
  }

  function handleSelectSizeCoffee(size: string) {
    setSizeSelected(size);
  }

  async function playSound() {
    const file = require("../../assets/addcart.mp3");
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

    await sound.setPositionAsync(100);
    await sound.setVolumeAsync(0.10)
    await sound.playAsync();
  }

  async function vibratePhone() {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }

  function handleAddCoffeeToCart() {
    if (!coffee) {
      return;
    }

    const cartData = {
      id: uuid.v4().toString(),
      coffeeId: coffee.id,
      title: coffee.title,
      size: sizeSelected,
      image: coffee.image,
      price: coffee.price,
      amount: coffeeAmount,
    };

    addCart(cartData);
    playSound();
    vibratePhone();
    navigation.goBack();
  }

  useEffect(() => {
    const coffees = COFFEES.flatMap((coffee) => coffee.data);
    const coffeeSelected = coffees.filter((item) => item.id === id)[0];
    setCoffee(coffeeSelected);
    setIsLoading(false);
  }, []);

  if (isLoading || !coffee) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: THEME.COLORS.BASE_GRAY_100,
        }}
      >
        <ActivityIndicator color={THEME.COLORS.BASE_GRAY_900} size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavHeader hasCart />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Animated.View
          style={{ flex: 1, zIndex: 1 }}
          entering={SlideInUp.stiffness(1).duration(700)}
        >
          <View style={styles.mainContent}>
            <View style={styles.mainContentInfo}>
              <Tag label={coffee.type_label.toUpperCase()} size="md" variant="dark" />
              <CoffeeTitle label={coffee.title} size="lg" variant="light" />
            </View>
            <CoffeePrice variant="yellow" price={coffee.price} size="xl" />
          </View>

          <View style={styles.descriptionContainer}>
            <CoffeeDescription label={coffee.description} size="md" variant="gray_500" />
          </View>

          <View style={styles.imageContainer}>
            <Smoke />
            <Image
              source={CoffeeDetails}
              style={{ width: 355, height: 320, marginBottom: -60 }}
            />
          </View>
        </Animated.View>

        <Animated.View
          entering={SlideInDown.stiffness(1).duration(800)}
          style={[styles.buyContainer, { paddingBottom: bottom }]}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 14, color: THEME.COLORS.BASE_GRAY_400 }}>
              Selecione o tamanho:
            </Text>
            <View style={styles.sizesContainer}>
              {coffee.sizes.map((size) => (
                <SizeButton
                  key={size}
                  label={size}
                  isSelected={size === sizeSelected}
                  onPress={() => handleSelectSizeCoffee(size)}
                />
              ))}
            </View>
          </View>

          <View style={styles.addCartContainer}>
            <AddRemoveButton
              onPressAdd={handleIncreaseCoffee}
              onPressRemove={handleDecreaseCoffee}
              value={coffeeAmount}
            />
            <View style={{ flex: 1 }}>
              <Button
                label="ADICIONAR"
                disabled={!sizeSelected}
                onPress={handleAddCoffeeToCart}
              />
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
