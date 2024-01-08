import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  SlideInLeft,
  SlideInRight,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

import { COFFEES_HIGHTLIGHT } from "../../data/coffeesHightlight";

import { CoffeeCardHighlight } from "../CoffeeCardHighlight";

export function HighlightList() {
  const { navigate } = useNavigation();

  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  function handleGoToDetails(coffeeId: number) {
    navigate("details", { id: coffeeId });
  }

  return (
    <Animated.FlatList
      data={COFFEES_HIGHTLIGHT}
      keyExtractor={(item) => String(item.id)}
      horizontal
      style={{ marginTop: -128 }}
      contentContainerStyle={{
        gap: 12,
        marginLeft: 0,
        paddingHorizontal: 32,
        paddingTop: 48,
        alignItems: "center",
      }}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={160}
      onScroll={scrollHandler}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <AnimatedTouchableOpacity
            entering={
              index === 0
                ? SlideInLeft.duration(800).delay(300).springify()
                : SlideInRight.duration(1000).delay(200)
            }
            onPress={() => handleGoToDetails(item.id)}
            activeOpacity={0.95}
          >
            <CoffeeCardHighlight coffee={item} index={index} scrollX={scrollX} />
          </AnimatedTouchableOpacity>
        );
      }}
    />
  );
}
