import { forwardRef, useRef } from "react";
import { SectionList, SectionListProps, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { SlideInDown } from "react-native-reanimated";
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

import { COFFEES } from "../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";

import { styles } from "./styles";

type Props = Omit<SectionListProps<any>, "sections">;

export const CoffeeList = forwardRef(({...rest}: Props, ref) => {
  const sectionRef = useRef<any[]>([]);

  const {navigate} = useNavigation();

  function handleGoToDetails(coffeeId: number) {
    navigate("details", { id: coffeeId });
  }

  return (
    <SectionList
      ref={ref as any}
      keyExtractor={(item) => String(item.id)}
      sections={COFFEES}
      contentContainerStyle={{ flex: 1 }}
      style={{ paddingHorizontal: 32, gap: 32, paddingTop: 16, paddingBottom: 80 }}
      renderSectionHeader={({ section: { title } }) => (
        <Animated.Text
          ref={(element) =>
            sectionRef?.current ? (sectionRef.current[title] = element) : null
          }
          entering={SlideInDown.duration(1500)}
          style={styles.sectionTitle}
        >
          {title}
        </Animated.Text>
      )}
      renderItem={({ item }) => (
        <AnimatedTouchableOpacity entering={SlideInDown.duration(1500)} onPress={() => handleGoToDetails(item.id)} activeOpacity={0.75}>
          <CoffeeCard coffee={item} />
        </AnimatedTouchableOpacity>
      )}
      {...rest}
    />
  );
});
