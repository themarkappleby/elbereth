function posToPix (x, y) {
  const centerX = window.map.width / 2
  const centerY = window.map.height / 2
  const cardWidth = 85
  const cardHeight = 118
  const gap = 5
  return {
    x: centerX + (x * (cardWidth + gap)),
    y: centerY + (y * (cardHeight + gap))
  }
}

export default posToPix
