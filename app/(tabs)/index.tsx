import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Sizes from '@/constants/Sizes';
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/case.json';
import CompanyListings from '@/components/CompanyListings';
import companyData from '@/data/company.json';

const Page = () => {
  const [category, setCategory] = useState('전체');

  const onCatChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} />
              <TextInput placeholder="카테고리 검색" />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" style={styles.optionIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headingText}>최근 인기 장소</Text>
          <CategoryButtons onCategoryChanged={onCatChanged} />
          <Listings listings={listingData} category={category} />
          <CompanyListings listings={companyData} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.fullPageMargin,
    backgroundColor: Colors.bgColor,
    paddingTop: Sizes.paddingTop,
  },

  userBtn: {
    // shadow option
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    //-----
    marginRight: 20,
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 10,
  },

  userIcon: {
    fontSize: 28,
    color: Colors.primaryColor,
  },

  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.searchBar,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 8,
  },
  optionIcon: { color: Colors.white, fontSize: 28 },

  headingText: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.black,
    marginTop: 10,
  },
});
