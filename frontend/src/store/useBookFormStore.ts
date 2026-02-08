import { create } from 'zustand'

interface BookFormData {
    title: string,
    author: string, 
    genre: string
}

interface BookFormState {
    formData: BookFormData,
    setField: (field: keyof BookFormData, value: string) => void
    resetForm: () => void
}

const initialData: BookFormData = {
    title: '',
    author: '',
    genre: ''
}

export const useBookFormStore = create<BookFormState>((set) => ({
    formData: initialData,

    setField: (field, value) => 
        set((state) => ({
            formData: { ...state.formData, [field]: value }
        })),

    resetForm: () => set({ formData: initialData}),    
}))