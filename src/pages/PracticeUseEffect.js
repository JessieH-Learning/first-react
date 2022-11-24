//  Dependencies
import React, { useState, useEffect } from 'react';

// NOTE: 如果要試這個要先把 index.js 內的 <React.StrictMode> 註解掉, 不然會render兩次

export const PracticeUseEffect = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        console.log('COMPONENT MOUNTED');   //  載入時安裝

        return () => {
            console.log('COMPONENT UNMOUNTED'); //  離開頁面時解除安裝
        };
    }, []);

    return (
        <article className="mx-5 text-center">
            <input onChange={(event) => { setText(event.target.value); }} />
            <h1> {text}</h1>
            <h2>{'如果要試這個要先把 index.js 內的 <React.StrictMode> 註解掉, 不然會render兩次'}</h2>
        </article>
    );
};