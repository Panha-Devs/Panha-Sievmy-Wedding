<script setup>
import { onUnmounted } from 'vue'

let overlay = null

function createOverlay() {
  overlay = document.createElement('div')
  overlay.className = 'magic-overlay'
  document.body.appendChild(overlay)
  return overlay
}

function removeOverlay() {
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay)
  overlay = null
}

function spawnStarsAt(x, y, count = 20) {
  const container = overlay || document.body
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span')
    star.className = 'star magic-star'
    const angle = Math.random() * Math.PI * 2
    const dist = 70 + Math.random() * 120
    const dx = Math.cos(angle) * dist
    const dy = Math.sin(angle) * dist
    const size = 6 + Math.floor(Math.random() * 8)
    const duration = 500 + Math.floor(Math.random() * 350)
    star.style.setProperty('--x', `${x}px`)
    star.style.setProperty('--y', `${y}px`)
    star.style.setProperty('--dx', `${dx}px`)
    star.style.setProperty('--dy', `${dy}px`)
    star.style.setProperty('--size', `${size}px`)
    star.style.setProperty('--dur', `${duration}ms`)
    container.appendChild(star)
    setTimeout(() => star.remove(), duration + 60)
  }
}

function onEnter(_el, done) {
  const ov = createOverlay()
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  // brief delay to layer in animation
  requestAnimationFrame(() => {
    ov.classList.add('magic-overlay--show')
    spawnStarsAt(cx, cy, 24)
  })
  setTimeout(() => {
    removeOverlay()
    done()
  }, 700)
}

function onLeave(_el, done) {
  // proceed immediately; we animate on enter mainly
  done()
}

onUnmounted(removeOverlay)
</script>

<template>
  <Transition @enter="onEnter" @leave="onLeave">
    <slot />
  </Transition>
</template>

<style>
.magic-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background:
    radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.25), rgba(0,0,0,0) 35%),
    radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.22), rgba(0,0,0,0) 55%),
    rgba(0,0,0,0.25);
  backdrop-filter: blur(1px);
  z-index: 60;
  transform: scale(1);
  transition: opacity 280ms ease, transform 280ms ease;
}
.magic-overlay--show {
  opacity: 1;
  animation: magicPulse 650ms ease-out forwards;
}
@keyframes magicPulse {
  0% { opacity: 0; transform: scale(1.00); }
  40% { opacity: 1; transform: scale(1.03); }
  100% { opacity: 0; transform: scale(1.00); }
}

/* Stars for transition (self-contained, similar to Home) */
.magic-star {
  position: absolute;
  left: calc(var(--x) - var(--size) / 2);
  top: calc(var(--y) - var(--size) / 2);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle, #fde047 0%, #facc15 60%, rgba(250, 204, 21, 0) 70%);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.9));
  animation: magic-fly var(--dur) ease-out forwards, magic-fade var(--dur) ease-out forwards;
}
@keyframes magic-fly {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(var(--dx), var(--dy)) scale(0.6); }
}
@keyframes magic-fade {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
