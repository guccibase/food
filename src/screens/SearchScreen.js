import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import searchResult from '../hooks/useSearchResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [searchTerm, setSearch] = useState('')
    const [fetchResult, err, result] = searchResult()

    const filterResultsByPrice = (price) => {
        return result.filter(results => {
            return results.price === price
        })
    }

    return (
        <>
            <SearchBar
                search={searchTerm}
                onSearchChange={setSearch}
                onSearchSubmit={() => fetchResult(searchTerm)}
            />
            <Text>{searchTerm}</Text>
            {err !== "" ? <Text>{err}</Text> :
                <Text style={{ margin: 10 }}>We have {result.length} restaurants in Silver Spring</Text>}
            <ScrollView style={{ marginBottom: 10 }}>
                <ResultsList title="cheap" results={filterResultsByPrice("$")} />
                <ResultsList title="med expensive" results={filterResultsByPrice("$$")} />
                <ResultsList title="expensive" results={filterResultsByPrice("$$$")} />
                <ResultsList title="very expensive" results={filterResultsByPrice("$$$$")} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})



export default SearchScreen
