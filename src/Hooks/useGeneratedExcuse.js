import { useState } from 'react';
import Axios from 'axios';

// NOTE: This is a custom hook.
// Custom hook'name needs to start with 「use」
// Reference 1: https://zh-hant.reactjs.org/docs/hooks-custom.html
// Reference 2: https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components
export const useGeneratedExcuse = () => {
    const [generatedExcuse, setGeneratedExcuse] = useState('');

    const fetchExcuse = async (excuse) => {
        const res = await Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`);
        setGeneratedExcuse(res.data[0].excuse);
    };

    return { generatedExcuse, fetchExcuse, };    //  Return 可以是array也可以是object, array在use時可重命名, object在use時需要跟return的名字一模一樣
};