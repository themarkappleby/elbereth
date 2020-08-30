export default function cards () {
  return {
    map: [
      {
        name: 'Stairs',
        id: 'staris',
        safe: true,
        x: 0,
        y: 0
      }
    ],
    deck: [
      ...addCards('Rat', 5, { safe: false, strength: 3 }),
      ...addCards('Spider', 5, { safe: false, strength: 4 }),
      ...addCards('Snake', 5, { safe: false, strength: 5 }),
      ...addCards('Dragon', 1, { safe: false, strength: 6 }),
      ...addCards('Shop', 2, { safe: true }),
      ...addCards('Wall', 10, { safe: false }),
      { name: 'Sword', id: 'Sword', safe: true },
      { name: 'Staff', id: 'Staff', safe: true },
      { name: 'Bow', id: 'Bow', safe: true },
      { name: 'Helm', id: 'Helm', safe: true },
      { name: 'Gauntlets', id: 'Gauntlets', safe: true },
      { name: 'Armor', id: 'Armor', safe: true },
      { name: 'Stairs Down', id: 'Stairs-Down', safe: true }
    ],
    inventory: {
      sword: {
        equipped: false
      },
      staff: {
        equipped: false
      },
      bow: {
        equipped: false
      },
      armor: {
        equipped: false
      },
      gauntlets: {
        equipped: false
      },
      helm: {
        equipped: false
      },
      coin: {
        equipped: false
      }
    }
  }
}

function addCards (name, cnt, options) {
  const coll = []
  for (let i = 1; i <= cnt; i++) {
    coll.push({
      name,
      id: `${name}-${i}`,
      safe: false,
      x: 0,
      y: 0,
      ...options
    })
  }
  return coll
}
