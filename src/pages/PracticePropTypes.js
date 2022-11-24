//  Dependencies
import React from 'react';

//  Custom modules
import { Person } from '../Components/Person';

export const PracticePropTypes = () => {

    return (
        <article className="mx-5 text-center">
            <Person
                name="Jessie"
                email="jessie.hu@airabbi.com"
                age={30}
                isMarried={false}
                friends={['A', 'B', 'C']}
            />
        </article>
    );
};