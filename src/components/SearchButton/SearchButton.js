import {SafeAreaView, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchButton.style';

const SearchButton = () => {

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </SafeAreaView>
  );
};

export default SearchButton;
