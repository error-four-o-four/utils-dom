const animateTo = (elt, keyframes, options) => {
  const animation = elt.animate(
    keyframes, {
      ...options,
      fill: 'forwards'
    },
  );
  animation.addEventListener('finish', () => {
    animation.commitStyles();
    animation.cancel();
  })
  return animation;
}

const fadeIn = (elt, duration = 1000, options = {}) => {
  return animateTo(elt, {
    opacity: 1
  }, Object.assign(options, {
    duration
  }))
}

const fadeOut = (elt, duration = 1000, options = {}) => {
  return animateTo(elt, {
    opacity: 0
  }, Object.assign(options, {
    duration
  }))
}