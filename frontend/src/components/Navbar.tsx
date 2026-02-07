import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
       <nav className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
            Biblioteca
          </span>
        </Link>
        
        <div className="flex gap-8 items-center font-medium">
          <Link to="/" className="text-stone-600 hover:text-stone-900 transition-colors">Acervo</Link>
          <Link 
            to="/novo" 
            className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white px-5 py-2 rounded-full text-sm transition-all shadow-sm"
          >
            + Adicionar Livro
          </Link>
        </div>
      </div>
    </nav>
    );
};