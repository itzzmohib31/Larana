import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useProductsBySearch } from '../services/getProducts.service';
import useDebounce from '../hooks/useDebounce';
import { useNavigation } from '@react-navigation/native';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const {data,isLoading}=useProductsBySearch(searchTerm);
  const navigation=useNavigation();
  const debouncedSearch = useDebounce((text) => {
    // Perform search operation with the debounced text
    navigation.navigate("SearchResults",data)
    console.log(data);

  }, 500); // Delay of 500 milliseconds

  function handleSearch(text) {
      setSearchTerm(text);

    debouncedSearch(text);
    // console.log(data)
  }

  return (
    <TextInput
      value={searchTerm}
      onChangeText={handleSearch}
      placeholder="Search..."
      style={{backgroundColor:'white',width:'70%',borderRadius:30,padding:7,height:30}}
    />
  );
}

export default Search;
