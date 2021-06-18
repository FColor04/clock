import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		--highlight: ${({ theme }) => theme.highlightColor};
		--shadow: ${({ theme }) => theme.shadowColor};
	}
	:root {
		font-size: 16px;
		@media screen and (max-width: 1400px), screen and (max-height: 800px) {
			font-size: 12px;
		}
		@media screen and (max-width: 600px), screen and (max-height: 500px) {
			font-size: 10px;
		}
		@media screen and (max-width: 400px), screen and (max-height: 400px) {
			font-size: 8px;
		}
		@media screen and (max-width: 200px), screen and (max-height: 300px) {
			font-size: 6px;
		}
	}
	body {
		padding: 0;
		margin: 0;
		background-color: ${({ theme }) => theme.backgroundColor};
		font-family: 'Cabin', sans-serif;
		color: ${({ theme }) => theme.primaryColor};
		perspective: 1000px;
		height: 100vh;
		width: 100vw;
	}
`;

export default GlobalStyles;
