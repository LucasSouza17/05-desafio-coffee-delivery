import { SectionList, SectionListProps } from "react-native";
import { COFFEES } from "../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { styles } from "./styles";
import Animated, { SlideInDown } from "react-native-reanimated";
import { forwardRef, useRef } from "react";

type Props = Omit<SectionListProps<any>, "sections">;

export const CoffeeList = forwardRef(({...rest}: Props, ref) => {
  const sectionRef = useRef<any[]>([]);

  return (
    <SectionList
      ref={ref as any}
      keyExtractor={(item) => String(item.id)}
      sections={COFFEES}
      contentContainerStyle={{ flex: 1 }}
      style={{ paddingHorizontal: 32, gap: 32, paddingTop: 16 }}
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
      renderItem={({ item, index }) => (
        <Animated.View entering={SlideInDown.duration(1500)}>
          <CoffeeCard coffee={item} />
        </Animated.View>
      )}
      {...rest}
    />
  );
});
