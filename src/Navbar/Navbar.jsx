
import { useState, useEffect } from "react";
import './Navbar.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Atualiza o estado para verificar se a tela é pequena
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(!menuOpen); 
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.9 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav className="navbar container-fluid">
            {/* Mostra o menu hamburguer apenas no mobile */}
            {isMobile && (
                <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                    <FiMenu size={40} />
                </div>
            )}

            {/* Fundo escuro quando o menu está aberto no mobile */}
            {isMobile && menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

            <ul className={`nav-links ${isMobile ? (menuOpen ? "open" : "closed") : ""}`}>
                {/* Ícone de fechar dentro do menu, só aparece no mobile */}
                {isMobile && (
                    <li className="close-menu" onClick={() => setMenuOpen(false)}>
                        <FiX size={40} />
                    </li>
                )}

                <li className={`p-1 ${activeSection === "Home" ? "active-link" : ""}`}>
                    <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>

                <li className={`p-1 ${activeSection === "Polaroid" ? "active-link" : ""}`}>
                    <a href="#Polaroid" onClick={() => setMenuOpen(false)}>Polaroid</a>
                </li>
                <li className={`p-1 ${activeSection === "Book" ? "active-link" : ""}`}>
                    <a href="#Book" onClick={() => setMenuOpen(false)}>Book</a>
                </li>
                <li className={`p-1 ${activeSection === "Composit" ? "active-link" : ""}`}>
                    <a href="#Composit" onClick={() => setMenuOpen(false)}>Composit</a>
                </li>
                <li className={`p-1 ${activeSection === "Contact" ? "active-link" : ""}`}>
                    <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

