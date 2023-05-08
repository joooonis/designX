var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: '.title .letter',
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 1000,
  delay: (el, i) => 50 * (i + 1),
});

// leaf animation
anime({
  targets: '.leaf-1',
  rotate: [
    { value: '10deg', duration: 2000 },
    { value: '5deg', duration: 2000 },
    { value: '0deg', duration: 2000 },
  ],
  loop: true,
  easing: 'easeInOutSine',
});
anime({
  targets: '.leaf-2',
  rotate: [
    { value: '5deg', duration: 1000 },
    { value: '0deg', duration: 1000 },
  ],
  loop: true,
  easing: 'easeInOutSine',
});
anime({
  targets: '.leaf-3',
  rotate: [
    { value: '-10deg', duration: 2000 },
    { value: '0deg', duration: 2000 },
  ],
  loop: true,
  easing: 'easeInOutSine',
});

anime({
  targets: '.loop-infinity',
  translateX: 270,
  loop: true,
  easing: 'easeInOutSine',
});
