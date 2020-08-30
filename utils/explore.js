export default function explore (state) {
  const newCards = []
  state.map.forEach(card => {
    if (card.safe) {
      [
        [card.x, card.y - 1],
        [card.x, card.y + 1],
        [card.x - 1, card.y],
        [card.x + 1, card.y]
      ].forEach((pos, i) => {
        if (!getCardAt(pos[0], pos[1], state.map)) {
          if (addCard(pos[0], pos[1], i, state)) {
            newCards.push(pos)
          }
        }
      })
    }
  })
  if (newCards.length) {
    explore(state)
  }
}

function addCard (x, y, i, state) {
  if (state.deck.length) {
    const card = state.deck.pop()
    if (card) {
      card.x = x
      card.y = y
      state.map.push(card)
      return true
    }
  }
  return false
}

function getCardAt (x, y, map) {
  let found = null
  map.forEach(card => {
    if (x === card.x && y === card.y) {
      found = card
    }
  })
  return found
}
