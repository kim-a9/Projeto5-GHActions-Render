import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useBooks() {
    return useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000');
            return data;
        }
    });
}