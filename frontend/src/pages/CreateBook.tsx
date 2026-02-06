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

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        mutation.mutate(formData)
    }

    return (
        <div className="max-w-6xl mx-auto p-8">
            <header className="mb-12">
                <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">Cadastrar Novo Livro</h1>
            </header>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-stone-600 font-medium italic">Título</label>
                        <input 
                        type="text"
                        className="mt-1 p-2 border rounded-md focus:ring-2  focus:ring-stone-500 outline-none"
                        value={formData.title}
                        onChange={(e) => setField('title', e.target.value)}
                        required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-stone-600 font-medium italic">Autor</label>
                        <input 
                        type="text"
                        className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-stone-500 outline-none"
                        value={formData.author}
                        onChange={(e) => setField('author', e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-stone-600 font-medium italic">Gênero</label>
                    <input
                    type="text"
                    className="mt-1 p-2 border rounded-md focus:ring-2 focus:ring-stone-500 outline-none"
                    value={formData.genre}
                    onChange={(e) => setField('genre', e.target.value)}
                    required
                    />
                </div>
                <button 
                    type="submit"
                    disabled={mutation.isPending}
                    className={`w-full py-3 rounded-full text-white font-bold transition-colors ${
                    mutation.isPending ? 'bg-gray-400' : 'bg-[#4A5D4E] hover:bg-[#3d4d41]'
                        }`} 
                    >
                    {mutation.isPending ? 'Salvando...' : 'Salvar Livro'}
                </button>
            </form>
        </div>
    )
}