import React from 'react';
import { Button } from 'react-bootstrap';
import { useGetCatFact } from '../Hooks/useGetCatFact';
export const ReactQuery = () => {

    const { catData, isLoading, refetch, } = useGetCatFact();

    return (
        <article className="mx-5">
            <Button className="mx-auto" variant="primary" type="submit" onClick={refetch}> Update Data </Button>
            {isLoading ? <h1> Loading .. </h1> : <h1> {catData?.fact} </h1>}
        </article>
    );
};