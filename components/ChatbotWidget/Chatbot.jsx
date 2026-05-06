import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { generarPrompt } from './promptVentas';

const Chatbot = ({ config = {} }) => {
    // 1. Estados
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // 2. Configuración por defecto (Personalizable vía Props)
    const defaultConfig = {
        empresa: "Mi Empresa",
        producto: "Servicios Digitales",
        diferenciador: "Atención personalizada 24/7",
        linkWsap: "https://wa.me/tu_numero",
        linkCita: "https://calendly.com/tu_usuario",
        linkForm: "/contacto",
        apiKey: process.env.REACT_APP_AI_API_KEY || "TU_API_KEY_AQUI", // O import.meta.env.VITE_AI_API_KEY
        apiEndpoint: "https://api.groq.com/openai/v1/chat/completions",
        model: "llama3-8b-8192", // Groq Free Tier
        ...config
    };

    // 3. Persistencia (LocalStorage)
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatbot_history');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        } else {
            setMessages([{ role: 'assistant', content: `¡Hola! Soy el asesor de ${defaultConfig.empresa}. ¿En qué puedo ayudarte hoy?` }]);
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('chatbot_history', JSON.stringify(messages));
        }
        // Auto-scroll
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // 4. Lógica de Envío
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMsg = { role: 'user', content: inputText };
        const updatedMessages = [...messages, userMsg];
        
        setMessages(updatedMessages);
        setInputText('');
        setIsLoading(true);

        try {
            const systemPrompt = {
                role: 'system',
                content: generarPrompt(defaultConfig)
            };

            const response = await fetch(defaultConfig.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${defaultConfig.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: defaultConfig.model,
                    messages: [systemPrompt, ...updatedMessages],
                    temperature: 0.7,
                    max_tokens: 500
                })
            });

            if (!response.ok) throw new Error('Error en la API');

            const data = await response.json();
            const botReply = { role: 'assistant', content: data.choices[0].message.content };

            setMessages([...updatedMessages, botReply]);
        } catch (error) {
            console.error("Chatbot Error:", error);
            setMessages([...updatedMessages, { 
                role: 'assistant', 
                content: "Lo siento, tuve un problema técnico. ¿Podrías intentar de nuevo o contactarnos por WhatsApp?" 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {/* Botón Flotante */}
            {!isOpen && (
                <button className="chatbot-avatar-btn" onClick={() => setIsOpen(true)}>
                    <img 
                        src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Vendedor&backgroundColor=ffffff" 
                        alt="Avatar" 
                        className="chatbot-avatar-img" 
                    />
                    <span className="chatbot-avatar-text">¿Puedo ayudarte?</span>
                </button>
            )}

            {/* Ventana de Chat */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-info">
                            <div className="chatbot-header-dot"></div>
                            <strong>Asesor VIP - {defaultConfig.empresa}</strong>
                        </div>
                        <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chatbot-msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && <div className="typing-indicator">Escribiendo...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                        <input 
                            className="chatbot-input"
                            type="text" 
                            placeholder="Escribe tu duda aquí..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            disabled={isLoading}
                        />
                        <button className="chatbot-send-btn" type="submit" disabled={isLoading}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
