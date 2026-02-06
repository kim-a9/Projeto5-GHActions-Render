import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateBook } from './pages/CreateBook.tsx';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar /> 
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<CreateBook />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;