import { Text, View } from "react-native";
import { styles } from "./styles";
import { FilterButton } from "../FilterButton";
import { COFFEES_TYPE } from "../../data/coffeesType";
import { useEffect, useState } from "react";
import Animated, { SlideInRight } from "react-native-reanimated";

type Props = {
  onChangeFilter: (index: number) => void;
  selectedFilterByScrollIndex: string;
};

export function CoffeeListHeader({ onChangeFilter, selectedFilterByScrollIndex }: Props) {
  const [selectedFilter, setSelectedFilter] = useState(0);

  function handleSelectFilter(filterId: number, index: number) {
    setSelectedFilter(filterId);
    onChangeFilter(index);
  }

  useEffect(() => {
    if (selectedFilterByScrollIndex) {
      const getFilter = COFFEES_TYPE.filter(item => item.title === selectedFilterByScrollIndex)[0]
      setSelectedFilter(getFilter.id);
    }
  }, [selectedFilterByScrollIndex]);

  return (
    <View style={styles.container}>
      <Animated.Text style={styles.title} entering={SlideInRight.duration(1000)}>
        Nossos cafés
      </Animated.Text>
      <View style={styles.filterSection}>
        {COFFEES_TYPE.map((item, index) => (
          <Animated.View key={item.id} entering={SlideInRight.duration(1200)}>
            <FilterButton
              title={item.title}
              isChecked={selectedFilter === item.id}
              onPress={() => handleSelectFilter(item.id, index)}
            />
          </Animated.View>
        ))}
      </View>
    </View>
  );
}
