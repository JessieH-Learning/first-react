import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const useGetCatFact = () => {
    const { data: catData, isLoading, refetch, error, } = useQuery(['cat'], async () => {
        const { data, } = await Axios.get('https://catfact.ninja/fact');
        return data;
    });

    if (error) alert(error);
    return { catData, isLoading, refetch, };
};