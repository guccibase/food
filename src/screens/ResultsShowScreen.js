import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log(result)

    const getResult = async id => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)

        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) return null

    return <View>
        <Text>
            {result.name}
        </Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ url: item }} />
            }}
        />

    </View>
}


const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 150
    }
})


export default ResultsShowScreen