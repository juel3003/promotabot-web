import React, { useState } from 'react';

export default function App() {
  const [contadorLeads, setContadorLeads] = useState(128);
  const [bateria, setBateria] = useState(94);

  const simularEscaneo = () => {
    setContadorLeads(prev => prev + 1);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#090d16', color: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>
      {/* Encabezado */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#818cf8' }}>PROMOTABOT <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MX - Panel</span></h1>
        <span style={{ background: '#1e1b4b', color: '#c7d2fe', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem' }}>Estado: En Vivo</span>
      </header>

      {/* Contenido Principal */}
      <main style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
        <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#e2e8f0' }}>Atlas M4 - Expo CDMX</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Robot humanoide activo en recepción principal.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Leads Capturados Hoy</span>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#34d399' }}>{contadorLeads}</p>
            </div>
            <div style={{ background: '#1e1b4b', padding: '1rem', borderRadius: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Nivel de Batería</span>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#818cf8' }}>{bateria}%</p>
            </div>
          </div>

          <button 
            onClick={simularEscaneo}
            style={{ marginTop: '1.5rem', width: '100%', background: '#4f46e5', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Simular Escaneo de Gafete (Nuevo Lead)
          </button>
        </div>
      </main>
    </div>
  );
}