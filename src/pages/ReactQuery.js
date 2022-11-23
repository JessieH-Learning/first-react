import React from 'react';
import { Button, Stack } from 'react-bootstrap';
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
        <article className="mx-5">
            <Button className="mx-auto" variant="primary" type="submit" onClick={refetch}> Update Data </Button>
            {isLoading ? <h1> Loading .. </h1> : <h1> {catData?.fact} </h1>}
        </article>
    );
};