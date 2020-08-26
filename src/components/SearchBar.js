import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {


    return (
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.icon} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.text}
                placeholder="Search"
                value={searchTerm}
                onChangeText={onSearchChange}
                onEndEditing={onSearchSubmit}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        margin: 30,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        // alignContent: "center"


    },

    text: {

        fontSize: 30,
        color: 'black',
        borderWidth: 1,
        flex: 1

    },
    icon: {
        alignSelf: 'center'
    }
})



export default SearchBar