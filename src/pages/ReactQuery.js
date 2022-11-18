import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const ReactQuery = () => {

    const {
        data: catData,
        isLoading, refetch,
    } = useQuery(['cat'], async () => {
        const { data, } = await Axios.get('https://catfact.ninja/fact');
        return data;
    });

    return (
        <div>
            {isLoading ? <h1> Loading .. </h1> : <h1> {catData?.fact} </h1>}
            <button onClick={refetch}> Update Data </button>
        </div>
    );
};