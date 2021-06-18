const sharedProperties = {
  activeLocationTextColor: "#fff",
  border: `
    border-radius: 2rem;
  `,
  inset: `
    box-shadow: 20px 20px 3rem 2rem var(--shadow) inset,
    -20px -20px 3rem 2rem var(--highlight) inset;
  `,
  outset: `
    box-shadow: 1rem 1rem 2rem -1rem var(--shadow),
    -1rem -1rem 2rem -1rem var(--highlight);
  `,
};
export const lightTheme = {
  iconPath: "/sun.svg",
  backgroundColor: "#eee",
  primaryColor: "#222222",
  secondaryColor: "#aaa",
  navigationColor: "#e2e2e2",
  activeLocationColor: "#f2c41d",
  highlightColor: "#fff",
  shadowColor: "#000",
  hourDialColor: "#edc73b",
  minuteDialColor: "#ed883b",
  secondDialColor: "#ed4d3b",
  ...sharedProperties,
};
export const darkTheme = {
  iconPath: "/moon.svg",
  backgroundColor: "#333",
  primaryColor: "#fff",
  secondaryColor: "#444",
  navigationColor: "#222",
  activeLocationColor: "#aa09db",
  highlightColor: "#444",
  shadowColor: "#222",
  hourDialColor: "#aa09db",
  minuteDialColor: "#5d09db",
  secondDialColor: "#db09b8",
  ...sharedProperties,
};
export const pearTheme = {
  iconPath: "/pear.svg",
  backgroundColor: "#325621",
  primaryColor: "#fff",
  secondaryColor: "#ede333",
  navigationColor: "#222",
  activeLocationColor: "#28800f",
  highlightColor: "#28800f",
  shadowColor: "#443322",
  hourDialColor: "#38fa45",
  minuteDialColor: "#91ba38",
  secondDialColor: "#dbd93d",
  ...sharedProperties,
};
