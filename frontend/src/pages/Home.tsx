import { useBooks } from "../hooks/useBooks";
import type { Book } from "../types/Book";

export const Home = () => {
    <h1>TELA HOME FUNCIONANDO</h1>
    const { data: books, isLoading, isError } = useBooks();

    if (isLoading) return <div className="p-20 text-center text-stone-500 animate-pulse">Consultando o acervo...</div>;

    if (isError) return <div className="p-10 text-red-800">Erro ao consultar a biblioteca!</div>;

   return (
   <div className="max-w-6xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-2">Minha Biblioteca</h1>
        <p className="text-stone-500 italic">"Livros são sonhos que seguramos com as mãos."</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books && books.length > 0 ? (
          books.map((book: Book) => (
            <div 
              key={book.id} 
              className="group bg-white p-8 rounded-sm border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              style={{ borderLeftWidth: '6px', borderLeftColor: '#D1C7B7' }}
            >
               <div className="aspect-video w-full"> 
                <img src="https://placehold.co/300x400" 
                alt= {"Capa do livro " + book.title}  
                />
                </div>
              <h2 className="text-xl font-serif font-bold text-stone-800 mt-2 mb-3 leading-tight group-hover:text-[#4A5D4E]">{book.title}</h2>
              <p className="text-stone-600 font-medium italic">por {book.author}</p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded">
                  ID: {book.id.substring(0, 8)}...
                </span>
                
                <div className="mt-8 pt-4 border-t border-stone-100 flex justify-between items-center">
                    {/* <span className="text-xs text-stone-400 font-mono"></span> */}
                    <button className="text-[#4A5D4E] text-sm font-bold hover:underline">
                    Ver detalhes →
                    </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-stone-400">Nenhum livro encontrado no acervo.</p>
        )}
      </div>
    </div>
  );
};