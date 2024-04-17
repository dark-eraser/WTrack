import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Chip } from '@rneui/themed';
import Colors from '/Users/darkeraser/Documents/dev/WTrack/screens/style/Colors.js';

const FilterableList = ({
  items,
  renderItem,
  filterOptions,
  searchPlaceholder,
  filterField = 'muscle_group' // default filter field
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const handleFilter = () => {
      const filteredData = items.filter(item => {
        const matchesSearch = 
          searchQuery.length === 0 ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
          !selectedFilter || item[filterField] === selectedFilter;
        return matchesSearch && matchesFilter;
      });
      setFilteredItems(filteredData);
    };

    handleFilter();
  }, [searchQuery, selectedFilter, items, filterField]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipsContainer}>
        {['All', ...filterOptions].map(group => (
          <Chip
            key={group}
            title={group}
            titleStyle={{fontSize: 14}}
            type={selectedFilter === group ? 'solid' : 'outline'}
            onPress={() => setSelectedFilter(group === 'All' ? null : group)}
            color={Colors.ACCENT_ORANGE}
            size="md"
            radius="md"
            containerStyle={{marginBottom: 15, height: 35, marginHorizontal: 4}}
          />
        ))}
      </ScrollView>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: filteredItems.length > 0 ? 'flex-start' : 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  searchBarContainer: {
    // marginHorizontal: 20,
  },
    
  searchBar: {
    fontSize: 16,
    backgroundColor: Colors.BASE_LIGHT,
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  chipsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default FilterableList;
