import {View} from 'react-native'
import Animated, { Extrapolate, SharedValue, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { MapPin } from "phosphor-react-native";
import { Cart } from '../Cart';

import { styles } from './styles';
import { THEME } from '../../styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  animatedScrollY: SharedValue<number>;
}

export function Header({animatedScrollY}: Props) {
  const {top} = useSafeAreaInsets();

  const containerStylesAnimated = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animatedScrollY.value,
        [0, 200],
        [THEME.COLORS.BASE_GRAY_100, THEME.COLORS.BASE_GRAY_900],
      ),
      paddingTop: interpolate(animatedScrollY.value, [0, 380], [top + 20, top + 8], Extrapolate.CLAMP),
      paddingBottom: interpolate(animatedScrollY.value, [0, 380], [20, 12], Extrapolate.CLAMP)
    };
  });

  const locationLabelStylesAnimated = useAnimatedStyle(() => {
    return {
      color: interpolateColor(animatedScrollY.value, [0, 300], [THEME.COLORS.BASE_GRAY_900, THEME.COLORS.BASE_GRAY_100])
    }
  })

  return (
    <Animated.View style={[styles.container, containerStylesAnimated]}>
    <View style={styles.content}>
      <View style={styles.locationContainer}>
        <MapPin size={17.5} weight="fill" color={THEME.COLORS.BRAND_PURPLE} />
        <Animated.Text style={[styles.locationLabel, locationLabelStylesAnimated]}>São José do Rio Preto</Animated.Text>
      </View>
      <Cart />
    </View>
  </Animated.View>
  )
}