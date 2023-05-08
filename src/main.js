import mojs from '@mojs/core';

var textWrapper = document.querySelector('.title');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: '.title .letter',
  opacity: [0, 1],
  easing: 'easeInOutQuad',
  duration: 2250,
  delay: (el, i) => 150 * (i + 1),
  complete: function (anim) {
    new mojs.Shape({
      parent: '#bounceBall',
      shape: 'circle',
      scale: { 0.2: 0.4 },
      fill: { '#C4D9C1': '#378C6D' },
      bottom: 0,
      y: { 'rand(200%, 300%)': 0 },
      radius: 25,
      duration: 3000,
      repeat: 999,
      isYoyo: true,
    }).play();
  },
});

// leaf animation
anime({
  targets: '.leaf_1',
  rotate: [
    { value: '10deg', duration: 2000 },
    { value: '5deg', duration: 1000 },
    { value: '0deg', duration: 1000 },
  ],
  easing: 'easeInOutSine',
  loop: true,
});
anime({
  targets: '.leaf_2',
  rotate: [
    { value: '5deg', duration: 1000 },
    { value: '0deg', duration: 1000 },
  ],
  easing: 'easeInOutSine',
  loop: true,
});
anime({
  targets: '.leaf_3',
  rotate: [
    { value: '-10deg', duration: 2000 },
    { value: '0deg', duration: 2000 },
  ],
  easing: 'easeInOutSine',
  loop: true,
});
