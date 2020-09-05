import Vue from 'vue'
import Vuex from 'vuex'
import explore from './utils/explore'

Vue.use(Vuex)

const ENTRANCE = {
  name: 'Entrance',
  id: 'entrance',
  safe: true,
  x: 0,
  y: 0,
  flipped: false
}

const DESCEND = {
  name: 'Descend',
  id: 'descend',
  safe: true,
  flipped: false,
  x: 1,
  y: 0
}

const BOSS = {
  name: 'Dragon',
  id: 'dragon',
  strength: 6,
  type: 'boss',
  flipped: false,
  safe: false,
  x: 0,
  y: 0
}

export default new Vuex.Store({
  state: {
    die: 0,
    floor: 1,
    discardPerFloor: 7,
    forceHUD: false,
    requiredStrength: 0,
    engaged: null,
    shopping: false,
    map: [ENTRANCE],
    deck: [
      DESCEND,
      BOSS,
      ...addCards('Rat', 12, { safe: false, strength: 3 }),
      ...addCards('Spider', 12, { safe: false, strength: 4 }),
      ...addCards('Snake', 12, { safe: false, strength: 5 }),
      ...addCards('Wall', 15, { safe: false }),
      ...addCards('Shop', 3, { safe: true }),
      ...addCards('Coin', 3, { safe: true, flipped: false, type: 'item', x: 0, y: 0 }),
      { name: 'Sword', id: 'sword', safe: true, flipped: false, type: 'item', x: 0, y: 0 },
      { name: 'Staff', id: 'staff', safe: true, flipped: false, type: 'item', x: 0, y: 0 },
      { name: 'Bow', id: 'bow', safe: true, flipped: false, type: 'item', x: 0, y: 0 },
      { name: 'Helm', id: 'helm', safe: true, flipped: false, type: 'item', x: 0, y: 0 },
      { name: 'Gauntlets', id: 'gauntlets', safe: true, flipped: false, type: 'item', x: 0, y: 0 },
      { name: 'Armor', id: 'armor', safe: true, flipped: false, type: 'item', x: 0, y: 0 }
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
        flipped: true,
        discarded: false
      },
      bow: {
        name: 'Bow',
        type: 'weapon',
        inv: true,
        flipped: true,
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
    setStrength (state, payload) {
      state.requiredStrength = payload.strength
    },
    forceHUD (state) {
      state.forceHUD = true
    },
    releaseHUD (state) {
      state.forceHUD = false
    },
    startShopping (state) {
      state.shopping = true
    },
    stopShopping (state) {
      state.shopping = false
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
      payload.card.type = 'damage'
      payload.card.flipped = false
    }
  },
  actions: {
    descend ({ commit, state }) {
      state.inv.key.flipped = true
      state.map = state.map.filter(card => {
        return card.name !== 'Entrance' && card.name !== 'Descend' && card.type !== 'boss'
      })
      state.deck = state.deck.filter(card => {
        return card.name !== 'Entrance' && card.name !== 'Descend' && card.type !== 'boss'
      })
      state.deck = [...state.deck, ...state.map]
      commit('shuffle')
      state.deck = [...state.deck.splice(state.discardPerFloor), BOSS, DESCEND]
      commit('shuffle')
      state.deck.forEach(card => {
        card.x = 0
        card.y = 0
        card.flipped = false
      })
      state.map = [ENTRANCE]
      state.floor += 1
      window.recenter()
      commit('explore')
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
