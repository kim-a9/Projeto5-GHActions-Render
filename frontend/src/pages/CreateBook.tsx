import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useBookFormStore } from "../store/useBookFormStore"
import axios from "axios"


export const CreateBook = () => {
    const { formData, setField, resetForm } = useBookFormStore()
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: (newBook: typeof formData) => {
            return axios.post('http://localhost:3005/books', newBook)
        },
        onSuccess: () => {
            alert('Livro cadastrado com sucesso!')
            resetForm()
            queryClient.invalidateQueries({ queryKey: ['books'] })
        },
        onError: () => alert('Erro ao cadastrar livro')
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate(formData)
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cadastrar Novo Livro</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Título</label>
                        <input 
                        type="text"
                        className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.title}
                        onChange={(e) => setField('title', e.target.value)}
                        required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Autor</label>
                        <input 
                        type="text"
                        className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.author}
                        onChange={(e) => setField('author', e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">Gênero</label>
                    <input
                    type="text"
                    className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.author}
                    onChange={(e) => setField('genre', e.target.value)}
                    required
                    />
                </div>
                <button 
                    type="submit"
                    disabled={mutation.isPending}
                    className={`w-full py-3 rounded-md text-white font-bold transition-colors ${
                    mutation.isPending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                        }`} 
                    >
                    {mutation.isPending ? 'Salvando...' : 'Salvar Livro'}
                </button>
            </form>
        </div>
    )
}