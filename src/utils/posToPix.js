function posToPix (x, y, width, height) {
  const centerX = window.map.width / 2
  const centerY = window.map.height / 2
  const gap = 8
  return {
    x: centerX + (x * (width + gap)),
    y: centerY + (y * (height + gap))
  }
}

export default posToPix
