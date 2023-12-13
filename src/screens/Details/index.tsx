import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { NavHeader } from "../../components/NavHeader";
import { THEME } from "../../styles/theme";
import { Tag } from "../../components/Tag";
import { CoffeeTitle } from "../../components/CoffeeTitle";
import { CoffeePrice } from "../../components/CoffeePrice";
import { CoffeeDescription } from "../../components/CoffeeDescription";

import CoffeeDetails from "../../assets/coffeedetails.png";
import Smoke from "../../assets/smoke.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Minus, Plus } from "phosphor-react-native";

export function Details() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NavHeader hasCart />
      <ScrollView
        contentContainerStyle={{ flex: 1, backgroundColor: THEME.COLORS.BASE_GRAY_100 }}
      >
        <View
          style={{
            paddingHorizontal: 32,
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ alignItems: "flex-start", gap: 12 }}>
            <Tag label="ESPECIAL" size="md" variant="dark" />
            <CoffeeTitle label="Irlandês" size="lg" variant="light" />
          </View>
          <CoffeePrice variant="yellow" price={9.9} size="xl" />
        </View>

        <View style={{ paddingHorizontal: 32, marginTop: 20 }}>
          <CoffeeDescription
            label="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            size="md"
            variant="gray_500"
          />
        </View>

        <View
          style={{
            position: "relative",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            zIndex: 10,
          }}
        >
          <Smoke
            width={70}
            height={150}
            style={{ position: "absolute", top: 36, zIndex: 10 }}
          />
          <Image
            source={CoffeeDetails}
            style={{ width: 355, height: 320, marginBottom: -60 }}
          />
        </View>

        <View
          style={{
            backgroundColor: THEME.COLORS.BASE_GRAY_900,
            paddingBottom: bottom,
            paddingTop: 42,
            paddingHorizontal: 32,
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 14, color: THEME.COLORS.BASE_GRAY_400 }}>
              Selecione o tamanho:
            </Text>
            <View
              style={{ flexDirection: "row", gap: 8, justifyContent: "space-between" }}
            >
              <View
                style={{
                  width: 105,
                  height: 40,
                  backgroundColor: THEME.COLORS.BASE_GRAY_700,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{color: THEME.COLORS.BASE_GRAY_300}}>114ml</Text>
              </View>
              <View
                style={{
                  width: 105,
                  height: 40,
                  backgroundColor: THEME.COLORS.BASE_GRAY_700,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{color: THEME.COLORS.BASE_GRAY_300}}>140ml</Text>
              </View>
              <View
                style={{
                  width: 105,
                  height: 40,
                  backgroundColor: THEME.COLORS.BASE_GRAY_700,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{color: THEME.COLORS.BASE_GRAY_300}}>227ml</Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 20, backgroundColor: THEME.COLORS.BASE_GRAY_700, padding: 8, gap: 16, borderRadius: 6, flexDirection: "row", alignItems: "center"}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Minus color={THEME.COLORS.BRAND_PURPLE} size={20} weight="bold" />
              </View>
              <View
                style={{
                  height: 36,
                  width: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>1</Text>
              </View>
              <View
                style={{
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Plus color={THEME.COLORS.BRAND_PURPLE} size={20} weight="bold" />
              </View>
            </View>
            <TouchableOpacity style={{flex: 1, paddingHorizontal: 8, paddingVertical: 12, alignItems: "center", justifyContent: "center", backgroundColor: THEME.COLORS.BRAND_PURPLE_DARK, borderRadius: 6}}>
              <Text style={{fontWeight: "700", fontFamily: THEME.FONTS.BOLD_BALOO2, fontSize: 14, color: THEME.COLORS.BASE_WHITE}}>ADICIONAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
