export default class Theme {
  readonly activeLocationTextColor: string = '#fff';

  readonly border: string = 'border-radius: 2rem;';

  readonly insetPattern: string = `box-shadow: 20px 20px 3rem 2rem var(--shadow) inset,
  -20px -20px 3rem 2rem var(--highlight) inset;`;

  readonly outsetPattern: string = `box-shadow: 1rem 1rem 2rem -1rem var(--shadow),
  -1rem -1rem 2rem -1rem var(--highlight);`;

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

  constructor(
    name: string,
    iconPath: string,
    backgroundColor: string,
    dimBackgroundColor: string,
    dimmerBackgroundColor: string,
    primaryColor: string,
    secondaryColor: string,
    navigationColor: string,
    activeLocationColor: string,
    highlightColor: string,
    shadowColor: string,
    hourDialColor: string,
    minuteDialColor: string,
    secondDialColor: string,
  ) {
    this.name = name;
    this.iconPath = iconPath;
    this.backgroundColor = backgroundColor;
    this.dimBackgroundColor = dimBackgroundColor;
    this.dimmerBackgroundColor = dimmerBackgroundColor;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.navigationColor = navigationColor;
    this.activeLocationColor = activeLocationColor;
    this.highlightColor = highlightColor;
    this.shadowColor = shadowColor;
    this.hourDialColor = hourDialColor;
    this.minuteDialColor = minuteDialColor;
    this.secondDialColor = secondDialColor;
    this.outset = this.outsetPattern.replace('--shadow', shadowColor).replace('--highlight', highlightColor);
    this.inset = this.insetPattern.replace('--shadow', shadowColor).replace('--highlight', highlightColor);
  }
}

export const Themes = [new Theme(
  'Light theme',
  '/sun.svg',
  '#eeeeee',
  '#cccccc',
  '#aaaaaa',
  '#222222',
  '#aaaaaa',
  '#e2e2e2',
  '#f2c41d',
  '#ffffff',
  '#000000',
  '#edc73b',
  '#ed883b',
  '#ed4d3b',
), new Theme(
  'Dark theme',
  '/moon.svg',
  '#333333',
  '#222222',
  '#111111',
  '#ffffff',
  '#444444',
  '#222222',
  '#aa09db',
  '#444444',
  '#222222',
  '#aa09db',
  '#5d09db',
  '#db09b8',
), new Theme(
  'Pear theme',
  '/pear.svg',
  '#325621',
  '#224611',
  '#123601',
  '#ffffff',
  '#ede333',
  '#222222',
  '#28800f',
  '#28800f',
  '#443322',
  '#38fa45',
  '#91ba38',
  '#dbd93d',
)];
