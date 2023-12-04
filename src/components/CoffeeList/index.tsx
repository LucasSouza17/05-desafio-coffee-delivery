import { ScrollView, SectionList, SectionListProps, Text, View } from "react-native";
import { COFFEES } from "../../data/coffees";
import { CoffeeData } from "../../@types/coffee";
import { useEffect, useState } from "react";

type Props = Omit<SectionListProps<any>, "sections">;

export function CoffeeList({ scrollEnabled, ...rest }: Props) {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (scrollEnabled === false) {
        setIsScrollEnabled(true);
      } else {
        setIsScrollEnabled(false);
      }
    }, 1000);
  }, [scrollEnabled]);

  return (
    <SectionList
      keyExtractor={(item) => String(item.id)}
      sections={COFFEES}
      contentContainerStyle={{ flex: 1 }}
      scrollEnabled={isScrollEnabled}
      renderSectionHeader={({ section: { title } }) => (
        <View>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{title}</Text>
          <Text>{title}</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
          <Text style={{ color: "#000" }}>{item.title}</Text>
        </View>
      )}
      {...rest}
    />
  );
}
