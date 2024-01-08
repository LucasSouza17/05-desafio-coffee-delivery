import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { ArrowLeft } from "phosphor-react-native";
import { Cart } from "../Cart";
import { useNavigation } from "@react-navigation/native";

type Props = {
  variant?: "dark" | "light";
  hasCart?: boolean;
  title?: string;
};

export function NavHeader({ variant = "dark", title = "", hasCart = false }: Props) {
  const { top } = useSafeAreaInsets();
  const {goBack} = useNavigation();

  const headerBg =
    variant === "dark" ? THEME.COLORS.BASE_GRAY_100 : THEME.COLORS.BASE_GRAY_900;
  const color =
    variant === "light" ? THEME.COLORS.BASE_GRAY_100 : THEME.COLORS.BASE_GRAY_900;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: headerBg, paddingTop: top + 20, paddingBottom: 20 },
      ]}
    >
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
          <ArrowLeft color={color} />
        </TouchableOpacity>

        <Text style={[styles.title, { color }]}>{title}</Text>

        {hasCart ? <Cart variant="purple" /> : <View style={{width: 20, height: 20}} />}
      </View>
    </View>
  );
}
