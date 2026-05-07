import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import FormLayouts from './components/demos/FormLayouts';
import Calculator from './components/projects/Calculator';
import ImageSlider from './components/projects/ImageSlider';
import TicTacToe from './components/projects/TicTacToe';
import TodoList from './components/projects/TodoList';
import FollowSpot from './components/projects/FollowSpot';
import ImageMagnifier from './components/projects/ImageMagnifier';
import ImageGallery from './components/projects/ImageGallery';
import SimpleMap from './components/projects/SimpleMap';
import Login from './components/admin/Login';
import ContactsList from './components/admin/ContactsList';
import './App.css';

import ProjectDetails from './components/projects/ProjectDetails';


function App() {
  useEffect(() => {
    // Initialize Bootstrap tooltips globally
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new window.bootstrap.Tooltip(el));
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Header />
          <main className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/forms" element={<FormLayouts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/calculator" element={<Calculator />} />
                          
              <Route path="/projects/slider" element={<ImageSlider />} />
              <Route path="/projects/tictactoe" element={<TicTacToe />} />
              <Route path="/projects/todo" element={<TodoList />} />
              <Route path="/projects/followspot" element={<FollowSpot />} />
              <Route path="/projects/magnifier" element={<ImageMagnifier />} />
              <Route path="/projects/gallery" element={<ImageGallery />} />
              <Route path="/projects/map" element={<SimpleMap />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/contacts" element={<ContactsList />} />
              
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;