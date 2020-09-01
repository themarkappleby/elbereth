import Vue from 'vue'
import Vuex from 'vuex'
import explore from './utils/explore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    die: 1,
    forceGUI: false,
    requiredStrength: 0,
    map: [
      {
        name: 'Stairs',
        id: 'stairs',
        safe: true,
        x: 0,
        y: 0,
        flipped: false
      }
    ],
    deck: [
      ...addCards('Rat', 5, { safe: false, strength: 3 }),
      ...addCards('Spider', 5, { safe: false, strength: 4 }),
      ...addCards('Snake', 5, { safe: false, strength: 5 }),
      ...addCards('Dragon', 1, { safe: false, strength: 6 }),
      ...addCards('Shop', 2, { safe: true }),
      ...addCards('Wall', 10, { safe: false }),
      { name: 'Sword', id: 'Sword', safe: true, flipped: false },
      { name: 'Staff', id: 'Staff', safe: true, flipped: false },
      { name: 'Bow', id: 'Bow', safe: true, flipped: false },
      { name: 'Helm', id: 'Helm', safe: true, flipped: false },
      { name: 'Gauntlets', id: 'Gauntlets', safe: true, flipped: false },
      { name: 'Armor', id: 'Armor', safe: true, flipped: false },
      { name: 'Coin', id: 'Coin', safe: true, flipped: false },
      { name: 'Stairs Down', id: 'Stairs-Down', safe: true, flipped: false }
    ],
    inventory: {
      sword: {
        equipped: true
      },
      staff: {
        equipped: false
      },
      bow: {
        equipped: false
      },
      armor: {
        equipped: true
      },
      gauntlets: {
        equipped: false
      },
      helm: {
        equipped: false
      },
      coin: {
        equipped: false
      },
      key: {
        equipped: false
      }
    }
  },
  mutations: {
    shuffle (state) {
      for (let i = state.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]]
      }
    },
    explore (state) {
      explore(state)
    },
    forceGUI (state) {
      state.forceGUI = true
    },
    setStrength (state, payload) {
      state.requiredStrength = payload.strength
    },
    releaseGUI (state) {
      state.forceGUI = false
    },
    fight (state, payload) {
      payload.card.safe = true
      payload.card.name = ''
      payload.card.strength = null
      explore(state)
    },
    flip (state, payload) {
      payload.card.flipped = true
    },
    roll (state) {
      state.die = Math.floor(Math.random() * 6) + 1
    }
  }
})

function addCards (name, cnt, options) {
  const coll = []
  for (let i = 1; i <= cnt; i++) {
    coll.push({
      name,
      flipped: false,
      id: `${name}-${i}`,
      safe: false,
      x: 0,
      y: 0,
      ...options
    })
  }
  return coll
}
