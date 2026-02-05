import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Book } from '../types/Book';

const api = axios.create({ baseURL: 'http://localhost:3005' });

export function useBooks() {
    return useQuery<Book[]>({
        queryKey: ['books'],
        queryFn: async () => {
            const response = await api.get('/books');
            return response.data;
        }
    });
}