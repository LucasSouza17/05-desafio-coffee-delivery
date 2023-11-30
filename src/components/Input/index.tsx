import { TextInput, TextInputProps, View } from "react-native";
import { MagnifyingGlass } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { useState } from "react";

type Props = TextInputProps;

export function Input({ value, ...rest }: Props) {
  const [isActive, setIsActive] = useState(false);

  function handleChangeColor() {
    if (!isActive && !value) {
      return THEME.COLORS.BASE_GRAY_400;
    }
    if (!isActive && value) {
      return THEME.COLORS.BRAND_YELLOW_DARK;
    }
    if (isActive) {
      return THEME.COLORS.BRAND_YELLOW;
    }
  }

  return (
    <View style={styles.container}>
      <MagnifyingGlass color={handleChangeColor()} />
      <TextInput
        style={styles.input}
        selectionColor={THEME.COLORS.BASE_GRAY_400}
        value={value}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholderTextColor={THEME.COLORS.BASE_GRAY_400}
        {...rest}
      />
    </View>
  );
}
