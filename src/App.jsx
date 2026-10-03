import React, { useState } from 'react';

export default function App() {
  const [planSeleccionado, setPlanSeleccionado] = useState('empresas');
  const [horas, setHoras] = useState(20);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  // Cálculo dinámico de precio simulado
  const costoPorHora = planSeleccionado === 'empresas' ? 450 : 300;
  const costoTotal = horas * costoPorHora;

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    setTimeout(() => {
      setModalAbierto(false);
      setMensajeEnviado(false);
    }, 3000);
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#030712', color: '#f3f4f6', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* 1. HEADER / NAVEGACIÓN */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', borderBottom: '1px solid #1f2937', background: '#030712', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '0.05em', color: '#6366f1' }}>
          LINGUA<span style={{ color: '#ffffff' }}>BOT</span> <span style={{ fontSize: '0.7rem', background: '#312e81', color: '#c7d2fe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>MX</span>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#beneficios" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Beneficios</a>
          <a href="#calculadora" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>Planes</a>
          <button 
            onClick={() => setModalAbierto(true)}
            style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer', fontSize: '0.9rem' }}
          >
            Agendar Demo
          </button>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{ textAlign: 'center', padding: '5rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ background: '#1e1b4b', color: '#a5b4fc', border: '1px solid #312e81', padding: '0.35rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Revolución en el Aprendizaje de Idiomas
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, margin: '1.5rem 0' }}>
          Domina el Inglés Hablando con tu <span style={{ color: '#6366f1' }}>Tutor Robótico</span>
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 2rem auto' }}>
          Práctica conversacional 100% inmersiva, corrección de pronunciación en tiempo real y sin juicios. Renta un robot inteligente para tu empresa, escuela o hogar en México.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#calculadora" style={{ background: '#6366f1', color: '#fff', padding: '0.8rem 2rem', borderRadius: '0.75rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}>
            Calcular Renta
          </a>
          <button 
            onClick={() => setModalAbierto(true)}
            style={{ background: '#1f2937', color: '#fff', border: '1px solid #374151', padding: '0.8rem 2rem', borderRadius: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Solicitar Información
          </button>
        </div>
      </section>

      {/* 3. SECCIÓN DE BENEFICIOS */}
      <section id="beneficios" style={{ padding: '4rem 2rem', background: '#0b0f19', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>¿Por qué aprender con LinguaBot?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#030712', padding: '2rem', borderRadius: '1rem', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f3f4f6' }}>Cero Pena al Hablar</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.5 }}>Interactúa con una inteligencia artificial paciente que repite las veces que necesites sin juzgar tus errores de acento.</p>
            </div>
            <div style={{ background: '#030712', padding: '2rem', borderRadius: '1rem', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f3f4f6' }}>Métrica de Progreso</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.5 }}>Reportes automáticos de fluidez, vocabulario adquirido y tiempos de práctica sincronizados con tu panel personal.</p>
            </div>
            <div style={{ background: '#030712', padding: '2rem', borderRadius: '1rem', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f3f4f6' }}>Business & Conversational</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.5 }}>Módulos especializados en inglés corporativo, entrevistas de trabajo, terminología técnica y atención al cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALCULADORA DE PLANES / RENTA */}
      <section id="calculadora" style={{ padding: '5rem 2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Cotizador de Renta</h2>
        <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '3rem' }}>Personaliza el plan de tutoría robótica según tus necesidades.</p>
        
        <div style={{ background: '#0b0f19', border: '1px solid #1f2937', padding: '2.5rem', borderRadius: '1.25rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
          <label style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Selecciona el Tipo de Plan</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <button 
              onClick={() => setPlanSeleccionado('empresas')}
              style={{ padding: '0.75rem', borderRadius: '0.5rem', border: planSeleccionado === 'empresas' ? '2px solid #6366f1' : '1px solid #374151', background: planSeleccionado === 'empresas' ? '#1e1b4b' : '#030712', color: '#fff', fontWeight: '600', cursor: 'pointer' }}
            >
              Corporativo / Escuelas
            </button>
            <button 
              onClick={() => setPlanSeleccionado('hogar')}
              style={{ padding: '0.75rem', borderRadius: '0.5rem', border: planSeleccionado === 'hogar' ? '2px solid #6366f1' : '1px solid #374151', background: planSeleccionado === 'hogar' ? '#1e1b4b' : '#030712', color: '#fff', fontWeight: '600', cursor: 'pointer' }}
            >
              Uso Personal / Hogar
            </button>
          </div>

          <label style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Horas de práctica mensuales estimadas: <span style={{ color: '#fff', fontWeight: 'bold' }}>{horas} hrs</span></label>
          <input 
            type="range" 
            min="5" 
            max="60" 
            step="5"
            value={horas} 
            onChange={(e) => setHoras(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#6366f1', marginBottom: '2rem' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f2937', paddingTop: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>Inversión Estimada Mensual</span>
              <span style={{ fontSize: '2rem', fontWeight: '900', color: '#6366f1' }}>${costoTotal.toLocaleString()} MXN</span>
            </div>
            <button 
              onClick={() => setModalAbierto(true)}
              style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Contratar Plan
            </button>
          </div>
        </div>
      </section>

      {/* 5. MODAL DE CONTACTO */}
      {modalAbierto && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem' }}>
          <div style={{ background: '#0b0f19', border: '1px solid #374151', padding: '2rem', borderRadius: '1rem', width: '100%', maxWidth: '450px', position: 'relative' }}>
            <button 
              onClick={() => setModalAbierto(false)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: '#9ca3af', fontSize: '1.25rem', cursor: 'pointer' }}
            >
              ✕
            </button>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Agenda tu Demo de LinguaBot</h3>
            
            {mensajeEnviado ? (
              <div style={{ background: '#065f46', color: '#d1fae5', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>
                ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Nombre / Empresa</label>
                  <input type="text" required placeholder="Ej. Instituto Anglo / Juan Pérez" style={{ width: '100%', background: '#030712', border: '1px solid #374151', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Correo Electrónico</label>
                  <input type="email" required placeholder="correo@ejemplo.com" style={{ width: '100%', background: '#030712', border: '1px solid #374151', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Teléfono de Contacto</label>
                  <input type="tel" required placeholder="+52 55 0000 0000" style={{ width: '100%', background: '#030712', border: '1px solid #374151', padding: '0.75rem', borderRadius: '0.5rem', color: '#fff' }} />
                </div>
                <button type="submit" style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
                  Confirmar Cita de Demostración
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 6. FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #1f2937', color: '#6b7280', fontSize: '0.85rem' }}>
        &copy; 2026 LinguaBot MX. Transformando la educación mediante robótica interactiva.
      </footer>

    </div>
  );
}