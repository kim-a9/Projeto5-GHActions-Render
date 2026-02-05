import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Biblioteca</h1>
                <div className="space-x-4">
                    <Link title="Home" to="/" className="hover:underline">Home</Link>
                    <Link title="Novo Livro" to="/books" className="bg-white text-blue-600 px-3 py-1 rounded-md font-medium">
                    + Adicionar Livro
                    </Link>
                </div>
            </div>
        </nav>
    );
};