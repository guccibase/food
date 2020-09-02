import { useState, useEffect } from 'react';
import yelp from '../api/yelp'


export default () => {
    const [result, setResult] = useState([])
    const [err, setErrMsg] = useState('')

    const fetchResult = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 40,
                    term: searchTerm,
                    location: 'DC'
                }
            })
            setErrMsg("")

            setResult(response.data.businesses);
        } catch (err) {
            setErrMsg("Something Went Wrong")
        }

    }

    useEffect(() => {

        fetchResult('')
    }, [])

    return [fetchResult, err, result]
};