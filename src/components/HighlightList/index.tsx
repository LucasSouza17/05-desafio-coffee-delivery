import { FlatList } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { CoffeeCardHighlight } from "../CoffeeCardHighlight";
import { COFFEES_HIGHTLIGHT } from "../../data/coffeesHightlight";

export function HighlightList() {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

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
        alignItems: 'center'
      }}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={176}
      onScroll={scrollHandler}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return <CoffeeCardHighlight coffee={item} index={index} scrollX={scrollX} />;
      }}
    />
  );
}