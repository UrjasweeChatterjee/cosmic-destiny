import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''

    const count = 220
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div')
      star.classList.add('star')
      const size = Math.random() * 2.5 + 0.5
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 5 + 2
      const delay = Math.random() * 5

      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        --duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.7 + 0.1};
      `
      container.appendChild(star)
    }

    // Shooting stars
    const shootInterval = setInterval(() => {
      const shoot = document.createElement('div')
      shoot.style.cssText = `
        position: absolute;
        width: ${Math.random() * 100 + 60}px;
        height: 1px;
        background: linear-gradient(90deg, white, transparent);
        top: ${Math.random() * 60}%;
        left: ${Math.random() * 60}%;
        transform: rotate(-30deg);
        opacity: 0;
        animation: shootingstar 1s ease-out forwards;
      `
      container.appendChild(shoot)
      setTimeout(() => shoot.remove(), 1100)
    }, 3500)

    return () => clearInterval(shootInterval)
  }, [])

  return (
    <>
      <style>{`
        @keyframes shootingstar {
          0% { opacity: 0; transform: translateX(0) rotate(-30deg); }
          10% { opacity: 1; }
          100% { opacity: 0; transform: translateX(300px) rotate(-30deg); }
        }
      `}</style>
      <div ref={containerRef} className="stars-container" />
      {/* Nebula gradients */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(91,33,182,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(29,78,216,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(45,27,105,0.08) 0%, transparent 60%)'
      }} />
    </>
  )
}
