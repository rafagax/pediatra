'use client';
import { useState, useRef, useEffect } from 'react';

import './Chatbot.css';

// =============================================
// BASE DE CONOCIMIENTO - Edita aquí las respuestas
// =============================================
const knowledgeBase = [
    {
        keywords: ['hola', 'buenos', 'buenas', 'ayuda', 'información', 'informacion', 'inicio'],
        response: '¡Hola! Bienvenido/a al consultorio virtual de la Dra. Katherine Ainslie. ¿En qué te puedo ayudar hoy? 🩺\n(Puedes preguntarme por citas, especialidades, ubicación o urgencias).'
    },
    {
        keywords: ['especialidades', 'servicios', 'atiende', 'gastroenterología', 'gastroenterologia', 'nutrición', 'nutricion', 'puericultura', 'estómago', 'estomago', 'digestivo', 'reflujo', 'estreñimiento', 'alergia'],
        response: 'La Dra. Katherine Ainslie es Pediatra Puericultor, con especialidad en Gastroenterología y Nutrición Pediátrica 🏥\n\nAtendemos:\n• Control de niño sano\n• Evaluación nutricional\n• Alergias alimentarias\n• Reflujo gastroesofágico\n• Estreñimiento\n• Dolor abdominal crónico\n• Patologías gastrointestinales'
    },
    {
        keywords: ['ubicación', 'ubicacion', 'dónde', 'donde', 'dirección', 'direccion', 'maracay', 'consultorio', 'sede', 'sedes'],
        response: '📍 Atendemos en varias sedes:\n\n• Maracay → Centro Médico Santa Marta\n• Turmero → Instituto Policlínico Turmero\n• Cagua → Policlínica Centro\n• Villa de Cura → Laboratorio Bearne\n\nEscríbenos por WhatsApp y te confirmamos la dirección exacta según tu zona 😊'
    },
    {
        keywords: ['whatsapp', 'contacto', 'teléfono', 'telefono', 'llamar', 'número', 'numero', 'mensaje'],
        response: '📱 Puedes contactarnos directamente por WhatsApp:\n\n👉 +58 424-304-9579\n\n¡Te respondemos a la brevedad!'
    },
    {
        keywords: ['cita', 'citas', 'agendar', 'reservar', 'turno', 'horario', 'disponibilidad', 'consulta', 'precio', 'precios', 'costo', 'honorarios', 'cuánto', 'cuanto'],
        response: '📅 Para agendar tu cita o consultar horarios disponibles, escríbenos directamente por WhatsApp:\n\n👉 +58 424-304-9579\n\nIndícanos tu zona (Maracay, Turmero, Cagua o Villa de Cura) y te confirmamos disponibilidad. ¡Es rápido y sencillo!'
    },
    {
        keywords: ['urgencia', 'emergencia', 'fiebre', 'fiebre alta', 'convulsión', 'convulsion', 'desmayo', 'respira', 'deshidratación', 'deshidratacion', 'sangre', 'vomita mucho'],
        response: '⚠️ IMPORTANTE: Este chat no es para emergencias médicas.\n\nSi tu niño/a presenta:\n• Dificultad para respirar\n• Fiebre muy alta que no cede\n• Convulsiones\n• Deshidratación severa\n\nDirígete de INMEDIATO a la emergencia pediátrica más cercana o llama al 171. 🚑'
    },
    {
        keywords: ['niño', 'niña', 'bebe', 'bebé', 'hijo', 'hija', 'edad', 'años', 'meses'],
        response: 'La Dra. Katherine Ainslie atiende pacientes desde recién nacidos hasta adolescentes 👶👧👦\n\nSi quieres saber si tu caso es el indicado para su especialidad, escríbenos y con gusto te orientamos 😊'
    },
    {
        keywords: ['gracias', 'ok', 'okay', 'listo', 'perfecto', 'genial', 'excelente', 'bueno'],
        response: '¡Con mucho gusto! 😊 Si tienes alguna otra duda, aquí estaré. ¡Que tengas un excelente día!'
    },
];

const fallbackResponse = 'Disculpa, no estoy seguro de cómo ayudarte con eso. ¿Podrías reformular tu consulta?\n\nO si prefieres, puedes escribirnos directamente por WhatsApp al +58 424-304-9579 para una atención personalizada 📱';

// Motor de coincidencia
const getBotResponse = (userText) => {
    const textLower = userText.toLowerCase().trim();
    for (const intent of knowledgeBase) {
        if (intent.keywords.some(keyword => textLower.includes(keyword))) {
            return intent.response;
        }
    }
    return fallbackResponse;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const [showCta, setShowCta] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Control del CTA bubble: aparece 1s después de que el chat se cierre (o cargue)
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setShowCta(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setShowCta(false);
        }
    }, [isOpen]);

    const handleToggle = () => {
        const nextState = !isOpen;
        setIsOpen(nextState);

        if (!hasOpened && nextState) {
            setHasOpened(true);
            // Mensaje de bienvenida al abrir por primera vez
            setTimeout(() => {
                setMessages([{
                    role: 'bot',
                    content: '¡Hola! 👋 Soy el asistente virtual de la Dra. Katherine Ainslie.\n¿En qué puedo ayudarte hoy? Puedes preguntarme por citas, especialidades, ubicación o urgencias.'
                }]);
            }, 300);
        }
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim() || isTyping) return;

        const userMsg = { role: 'user', content: inputText };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simular delay natural de escritura
        setTimeout(() => {
            const reply = getBotResponse(inputText);
            setMessages(prev => [...prev, { role: 'bot', content: reply }]);
            setIsTyping(false);
        }, 700);
    };

    return (
        <div className="pm-chatbot-container">
            {/* VENTANA DE CHAT */}
            {isOpen && (
                <div className="pm-window" role="dialog" aria-label="Chat con asistente virtual">
                    {/* Header */}
                    <div className="pm-header">
                        <div className="pm-header-info">
                            <strong>Asistente Virtual</strong>
                            <span>Dra. Katherine Ainslie</span>
                        </div>
                        <button className="pm-close-btn" onClick={handleToggle} aria-label="Cerrar chat">✕</button>
                    </div>

                    {/* Mensajes */}
                    <div className="pm-messages">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`pm-msg ${msg.role === 'user' ? 'pm-msg-user' : 'pm-msg-bot'}`}
                            >
                                {msg.content.split('\n').map((line, i) => (
                                    <span key={i}>{line}{i < msg.content.split('\n').length - 1 && <br />}</span>
                                ))}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="pm-msg pm-msg-bot pm-typing">
                                <span /><span /><span />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form className="pm-form" onSubmit={handleSend}>
                        <input
                            id="pm-chatbot-input"
                            className="pm-input"
                            type="text"
                            placeholder="Escribe tu consulta aquí..."
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            autoComplete="off"
                            disabled={isTyping}
                        />
                        <button className="pm-send-btn" type="submit" disabled={isTyping} aria-label="Enviar mensaje">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            {/* TRIGGER: CTA Arriba + Imagen Abajo */}
            <div className="pm-trigger-wrapper">
                {/* CTA Bubble centrado ARRIBA de la imagen */}
                <div className={`pm-cta-bubble ${showCta ? 'pm-cta-visible' : 'pm-cta-hidden'}`}>
                    <span>¿Dudas? ¡Chatea conmigo! ✨</span>
                </div>

                <button
                    id="pm-chatbot-toggle"
                    className="pm-toggle"
                    onClick={handleToggle}
                    aria-label="Abrir asistente virtual"
                >
                    {isOpen ? (
                        <div className="pm-toggle-close-circle">✕</div>
                    ) : (
                        <img
                            src="/images/avatarchat.png"
                            alt="botgina - Asistente Virtual"
                            className="pm-avatar-img"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
