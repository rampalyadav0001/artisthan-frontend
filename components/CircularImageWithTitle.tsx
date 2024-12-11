import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Festival Data
const mainFestivals = [
  {
    id: 1,
    name: 'Diwali',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 2,
    name: 'Holi',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 3,
    name: 'Navratri',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 4,
    name: 'Eid',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 5,
    name: 'Christmas',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
];

// Minor Festival Data
const minorFestivals = [
  {
    id: 101,
    name: 'Akshaya Tritiya',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 102,
    name: 'Basant Panchami',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
  {
    id: 103,
    name: 'Mahashivratri',
    imageSource: { uri: 'https://via.placeholder.com/150' },
  },
];

const CircularFestivalList: React.FC = () => {
  const [festivals, setFestivals] = useState(mainFestivals);
  const [minorFestivalsAdded, setMinorFestivalsAdded] = useState(false);

  const handlePress = (index: number) => {
    if (!minorFestivalsAdded) {
      // Insert minor festivals after the clicked index
      const newFestivals = [
        ...festivals.slice(0, index + 1),
        ...minorFestivals,
        ...festivals.slice(index + 1),
      ];
      setFestivals(newFestivals);
      setMinorFestivalsAdded(true);
    } else {
      // If minor festivals already added, continue with remaining festivals
      const remainingFestivals = festivals.slice(
        index + 1 + minorFestivals.length
      );
      setFestivals([...festivals.slice(0, index + 1), ...remainingFestivals]);
      setMinorFestivalsAdded(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {festivals.map((festival, index) => (
        <TouchableOpacity key={festival.id} onPress={() => handlePress(index)}>
          <View style={styles.festivalContainer}>
            <Image source={festival.imageSource} style={styles.festivalImage} />
            <Text style={styles.festivalName}>{festival.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  festivalContainer: {
    alignItems: 'center',
    margin: 10,
  },
  festivalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  festivalName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default CircularFestivalList;
