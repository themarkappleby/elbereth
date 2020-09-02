function posToPix (x, y) {
  const centerX = window.map.width / 2
  const centerY = window.map.height / 2
  const cardWidth = 70
  const cardHeight = 94
  const gap = 5
  return {
    x: centerX + (x * (cardWidth + gap)),
    y: centerY + (y * (cardHeight + gap))
  }
}

export default posToPix
