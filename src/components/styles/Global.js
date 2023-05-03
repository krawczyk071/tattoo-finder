import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}

ol,
ul {
  list-style: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* reset end */

:root {
  --bg-light: rgb(238, 225, 225);
  --bg-dark: #0d0118;
  --primary: rgb(255, 0, 119);
  --secondary: #fffafa;
  --accent: #2d1cc5;
  --text1: #301f40;
  --text2: wheat;
  --radius1: 7px;

  --success: #388e3c;
  --info: gray;
  --warning: gray;
  --danger: #c9182b;

  --dark0: black;
  --radius1: 0.375rem;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--text1);
  background-color: #ececec;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='477' height='477' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23E3E3E3' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23E3E3E3'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh;

}
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
img {
  width: 100%;
  display: block;
}


.trans-group {
  position: relative;
  height: 100%;
}

.slide-enter {
  transition: all 300ms;
  opacity: 0;

  transform: translate(-100%) rotateZ(-15deg);
}
.slide-enter-active {
  opacity: 1;
  transform: translate(0);
}
.slide-exit {
  opacity: 1;
  transform: translate(0);

  position: absolute;
  top: 0;
  left: 0;
}
.slide-exit-active {
  opacity: 0;
  transition: all 300ms;

  transform: translate(100%) rotateZ(15deg);
}

`;
