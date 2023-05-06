import mojs from '@mojs/core';

const bouceBall = new mojs.Shape({
  parent: '#bouceBall',
  shape: 'circle',
  scale: { 0.2: 0.4 },
  fill: { '#C4D9C1': '#378C6D' },
  bottom: 25,
  y: { 'rand(100%, 300%)': 0 },
  radius: 25,
  duration: 3000,
  repeat: 999,
  isYoyo: true,
}).play();
