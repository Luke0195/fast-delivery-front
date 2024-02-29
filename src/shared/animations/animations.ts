const moveLeft = {
  initial: { x: 180, opacity: 0.1 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 2 },
}

export const moveRight = {
  initial: { x: -180, opacity: 0.1 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 2 },
}

const showOpacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 5 },
}
export const moveTop = {
  initial: { y: 90, opacity: 0.1 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 2 },
}

export const animations = {
  moveLeft,
  moveRight,
  showOpacity,
  moveTop,
}
