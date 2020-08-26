import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar'


const SearchScreen = () => {
    const [searchTerm, setSearch] = useState('')

    return (
        <View>
            <SearchBar
                search={searchTerm}
                onSearchChange={newSearch => setSearch(newSearch)}
                onSearchSubmit={() => { }}
            />
            <Text>{searchTerm}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})



export default SearchScreen