import Vue from 'vue'
import Vuex from 'vuex'
import explore from './utils/explore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    die: 1,
    forceHUD: false,
    requiredStrength: 0,
    engaged: null,
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
      { name: 'Sword', id: 'sword', safe: true, flipped: false, type: 'item' },
      { name: 'Staff', id: 'staff', safe: true, flipped: false, type: 'item' },
      { name: 'Bow', id: 'bow', safe: true, flipped: false, type: 'item' },
      { name: 'Helm', id: 'helm', safe: true, flipped: false, type: 'item' },
      { name: 'Gauntlets', id: 'gauntlets', safe: true, flipped: false, type: 'item' },
      { name: 'Armor', id: 'armor', safe: true, flipped: false, type: 'item' },
      { name: 'Coin', id: 'coin', safe: true, flipped: false, type: 'item' },
      { name: 'Stairs Down', id: 'stairs-down', safe: true, flipped: false }
    ],
    inv: {
      sword: {
        name: 'Sword',
        type: 'weapon',
        inv: true,
        flipped: false,
        discarded: false
      },
      staff: {
        name: 'Staff',
        type: 'weapon',
        inv: true,
        flipped: false,
        discarded: false
      },
      bow: {
        name: 'Bow',
        type: 'weapon',
        inv: true,
        flipped: false,
        discarded: false
      },
      armor: {
        name: 'Armor',
        type: 'armor',
        inv: true,
        flipped: false,
        discarded: false
      },
      gauntlets: {
        name: 'Gauntlets',
        type: 'armor',
        inv: true,
        flipped: true,
        discarded: false
      },
      helm: {
        name: 'Helm',
        type: 'armor',
        inv: true,
        flipped: true,
        discarded: false
      },
      coin: {
        name: 'Coin',
        inv: true,
        flipped: true
      },
      key: {
        name: 'Key',
        inv: true,
        flipped: true
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
    forceHUD (state) {
      state.forceHUD = true
    },
    setStrength (state, payload) {
      state.requiredStrength = payload.strength
    },
    releaseHUD (state) {
      state.forceHUD = false
    },
    engage (state, payload) {
      state.engaged = payload.card
    },
    flip (state, payload) {
      payload.card.flipped = !payload.card.flipped
    },
    roll (state) {
      state.die = Math.floor(Math.random() * 6) + 1
    },
    increaseDie (state) {
      state.die += 1
    },
    discard (state, payload) {
      payload.card.discarded = true
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
