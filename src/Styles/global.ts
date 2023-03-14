import { Input } from "./../pages/Login/inputLogin/index";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  font-family: 'Inter', sans-serif;
  list-style: none;
  line-height: 150%;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
}

input {
	border: none;
}

Link {
  cursor: pointer;
}

:root{
	--primary:#FF577F;
	--primary-Focus:#FF427F;
	--primary-Negative:#59323F; 
	--grey-4:#000;
	--grey-3:#626262;
	--grey-2:#D9D9D9;
	--grey-1:#afafaf;
	--grey-0:#FFF;
    --button-2:#FF0000;
    --button-1:#1551EC;
	--title1:16px;
	--title2:12px;
}
`;
