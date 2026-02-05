import { useBooks } from "../hooks/useBooks";
import type { Book } from "../types/Book";

export const Home = () => {
    const { data: books, isLoading } = useBooks();

    if (isLoading) return <p>Carregando livros...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books?.map((book: Book) => (
                <div key={book._id} className="p-4 bg-white rounded shadow border-l-4 border-blue-500">
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                </div>
            ))}
        </div>
    );
};