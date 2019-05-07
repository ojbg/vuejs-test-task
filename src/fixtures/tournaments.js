import sports from './sports'

export default [
  // Tennis
  { id: 1, name: 'WTA Finals', sport: sports[0], position: 0 },
  { id: 2, name: 'Hopman Cup', sport: sports[0], position: 2 },
  { id: 3, name: 'World Team Cup', sport: sports[0], position: 1 },

  // Soccer
  { id: 4, name: 'European Championship', sport: sports[1], position: 1 },
  { id: 5, name: 'UEFA Champions League', sport: sports[1], position: 0 },
  { id: 6, name: 'LaLiga', sport: sports[1], position: 2 },

  // Basketball
  { id: 7, name: 'NBA', sport: sports[2], position: 2 },
  { id: 8, name: 'Euroleague', sport: sports[2], position: 1 },
  { id: 9, name: 'Eurocup', sport: sports[2], position: 0 },

  // Ice Hockey
  { id: 10, name: 'World Championship', sport: sports[3], position: 0 },
  { id: 11, name: 'National League', sport: sports[3], position: 1 },
  { id: 12, name: 'Swiss League', sport: sports[3], position: 2 },
]
