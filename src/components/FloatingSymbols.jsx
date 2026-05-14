export default function FloatingSymbols() {
  const symbols = [
    { sym: '♈', x: '8%', y: '15%', delay: 0, dur: 7 },
    { sym: '♉', x: '85%', y: '25%', delay: 1, dur: 9 },
    { sym: '♊', x: '15%', y: '60%', delay: 2, dur: 8 },
    { sym: '♋', x: '90%', y: '55%', delay: 0.5, dur: 11 },
    { sym: '♌', x: '50%', y: '10%', delay: 3, dur: 8 },
    { sym: '♍', x: '3%', y: '80%', delay: 1.5, dur: 10 },
    { sym: '♎', x: '75%', y: '80%', delay: 2.5, dur: 7 },
    { sym: '♏', x: '40%', y: '90%', delay: 0.8, dur: 12 },
    { sym: '☽', x: '92%', y: '10%', delay: 1.2, dur: 9 },
    { sym: '✦', x: '25%', y: '40%', delay: 3.5, dur: 6 },
    { sym: '✧', x: '65%', y: '35%', delay: 2, dur: 8 },
    { sym: '⋆', x: '55%', y: '70%', delay: 1, dur: 7 },
  ]

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {symbols.map((s, i) => (
        <span key={i} style={{
          position: 'absolute',
          left: s.x,
          top: s.y,
          fontSize: '2.5rem',
          opacity: 0.05,
          animation: `float ${s.dur}s ease-in-out ${s.delay}s infinite`,
          userSelect: 'none',
          color: i % 3 === 0 ? '#f5c842' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
        }}>
          {s.sym}
        </span>
      ))}
    </div>
  )
}
