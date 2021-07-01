/* eslint-disable no-param-reassign */
const sharedProperties = {
  activeLocationTextColor: '#fff',
  border: 'border-radius: 2rem;',
  inset: `box-shadow: 20px 20px 3rem 2rem var(--shadow) inset,
  -20px -20px 3rem 2rem var(--highlight) inset;`,
  outset: `box-shadow: 1rem 1rem 2rem -1rem var(--shadow),
  -1rem -1rem 2rem -1rem var(--highlight);`,
};

export default interface Theme {
  name: string;
  iconPath: string;
  backgroundColor: string;
  dimBackgroundColor: string;
  dimmerBackgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  navigationColor: string;
  activeLocationColor: string;
  highlightColor: string;
  shadowColor: string;
  hourDialColor: string;
  minuteDialColor: string;
  secondDialColor: string;
  inset: string;
  outset: string;
}

export const Themes : Theme[] = [{
  name: 'Light theme',
  iconPath: '/sun.svg',
  backgroundColor: '#eeeeee',
  dimBackgroundColor: '#cccccc',
  dimmerBackgroundColor: '#aaaaaa',
  primaryColor: '#222222',
  secondaryColor: '#aaaaaa',
  navigationColor: '#e2e2e2',
  activeLocationColor: '#f2c41d',
  highlightColor: '#ffffff',
  shadowColor: '#000000',
  hourDialColor: '#edc73b',
  minuteDialColor: '#ed883b',
  secondDialColor: '#ed4d3b',
  ...sharedProperties,
}, {
  name: 'Dark theme',
  iconPath: '/moon.svg',
  backgroundColor: '#333333',
  dimBackgroundColor: '#222222',
  dimmerBackgroundColor: '#111111',
  primaryColor: '#ffffff',
  secondaryColor: '#444444',
  navigationColor: '#222222',
  activeLocationColor: '#aa09db',
  highlightColor: '#444444',
  shadowColor: '#222222',
  hourDialColor: '#aa09db',
  minuteDialColor: '#5d09db',
  secondDialColor: '#db09b8',
  ...sharedProperties,
}, {
  name: 'Pear theme',
  iconPath: '/pear.svg',
  backgroundColor: '#325621',
  dimBackgroundColor: '#224611',
  dimmerBackgroundColor: '#123601',
  primaryColor: '#ffffff',
  secondaryColor: '#ede333',
  navigationColor: '#222222',
  activeLocationColor: '#28800f',
  highlightColor: '#28800f',
  shadowColor: '#443322',
  hourDialColor: '#38fa45',
  minuteDialColor: '#91ba38',
  secondDialColor: '#dbd93d',
  ...sharedProperties,
}];

Themes.forEach((theme) => {
  theme.outset = theme.outset.replace('--shadow', theme.shadowColor).replace('--highlight', theme.highlightColor);
  theme.inset = theme.inset.replace('--shadow', theme.shadowColor).replace('--highlight', theme.highlightColor);
});
