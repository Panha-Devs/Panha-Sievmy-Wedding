// Theme constants for consistent styling across the app

export const COLORS = {
  gold: {
    primary: '#f5c84c',
    secondary: '#d39e00', 
    light: '#ffe59e',
    accent: '#ffd700'
  },
  yellow: {
    300: '#fde047',
    400: '#facc15'
  },
  text: {
    shadow: '0 2px 6px rgba(0, 0, 0, 0.45)',
    glow: '0 0 16px 2px rgba(245, 200, 76, 0.35)'
  }
};

export const SPACING = {
  section: {
    mobile: 'mt-16',
    desktop: 'mt-32'
  },
  container: {
    padding: 'px-6 pt-24 pb-24'
  }
};

export const TYPOGRAPHY = {
  fonts: {
    khmer: '"Koulen", serif',
    khmerBody: '"Kantumruy Pro", sans-serif',
    decorative: '"Lavishly Yours", cursive'
  },
  sizes: {
    hero: 'clamp(1.75rem,6vw,3.5rem)',
    title: 'clamp(1.5rem,5.5vw,3rem)',
    subtitle: 'clamp(1rem,3.5vw,1.5rem)',
    body: 'clamp(0.95rem,3.2vw,1.2rem)',
    small: 'clamp(0.85rem,2.8vw,1rem)'
  }
};

export const ANIMATIONS = {
  transitions: {
    default: 'all 200ms ease',
    slow: 'all 300ms ease',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  durations: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms'
  }
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const SCROLL_THRESHOLD = 8; // px tolerance for scroll indicator

export const EVENT_DETAILS = {
  date: '2025-11-29T17:00:00+07:00',
  endTime: '2025-11-29T20:00:00+07:00',
  location: 'ខេត្តតាកែវ, កម្ពុជា',
  timezone: 'Asia/Phnom_Penh'
};