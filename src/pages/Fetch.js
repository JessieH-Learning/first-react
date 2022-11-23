import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { AppContext } from '../App';
import { useGeneratedExcuse } from '../Hooks/useGeneratedExcuse';

export const Fetch = () => {
    const { userName, } = useContext(AppContext);
    const { generatedExcuse, fetchExcuse, } = useGeneratedExcuse();

    return (
        <article className="mx-5">
            <h1>Hi {userName}! Generate An Excuse </h1>
            <Stack className="mx-auto" direction="horizontal" gap={3}>
                <Button className="mr-2" variant="primary" type="submit" onClick={() => fetchExcuse('party')}> Party</Button>
                <Button variant="primary" type="submit" onClick={() => fetchExcuse('family')}> Family</Button>
                <Button variant="primary" type="submit" onClick={() => fetchExcuse('office')}> Office </Button>
            </Stack>
            <p className="mt-5">{generatedExcuse}</p>
        </article>
    );
};