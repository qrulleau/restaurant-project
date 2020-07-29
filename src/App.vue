<template>
	<div class="transition">
		<app-header
			showRegisterModal="false"
			@showModalChange="(v) => (showRegisterModal = v)"
		></app-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<app-footer></app-footer>
		<modal v-show="showRegisterModal"></modal>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
		modal: Modal,
	},
	data() {
		return {
			showRegisterModal: false,
		};
	},
};
</script>

<style>
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
b,
u,
i,
center,
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
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Merriweather', serif;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	scroll-behavior: smooth;
	box-sizing: border-box;
}
a {
	text-decoration: none;
	color: black;
}
ul li {
	display: inline;
}
.d-flex {
	display: flex;
	justify-content: space-between;
}
.t-center {
	text-align: center;
}
.container {
	width: 1300px;
	margin: 0 auto;
}
h3,
button {
	font-family: 'catamaran', sans-serif;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.1em;
}
h2 {
	font-size: 20px;
	margin-bottom: 18px;
}
.third-grid {
	width: 423px;
}
.description h4 {
	font-size: 23px;
	line-height: 150%;
	margin-bottom: 12px;
}
.description p {
	color: #6b6768;
	line-height: 150%;
}
.item-center {
	align-items: center;
}
i {
	margin-right: 9px;
}
.width {
	width: 236px;
	margin: 15px 0;
}
.flex-start {
	justify-content: flex-start;
	margin-bottom: 15px;
}
.article {
	margin-bottom: 23px;
	align-items: center;
}
button {
	background-color: #fee86d;
	border: none;
	padding: 19px 42px;
	transition: 400ms;
}
.instagram h2,
#sponsors h2 {
	font-size: 35px;
}
#sponsors button {
	color: #fff;
	background-color: #000000;
	transition: 400ms;
	border: 1px solid #000000;
}
#sponsors button:hover {
	color: #000000;
	background-color: #fff;
	border: 1px solid #000000;
}
#sponsors p {
	margin: 36px 0;
}
.adjust {
	margin-left: 18px;
}
#instagram {
	margin: 47px 0 90px 0;
}
#instagram .item-center h2 {
	margin: 0;
}
.space-instagram {
	margin: 18px 0 60px 0;
}
.margin-adjust {
	margin-top: 28px;
}
span {
	width: 74%;
	border-top: 1px solid #eae9e7;
	border-bottom: 1px solid #eae9e7;
	height: 7px;
}
#sponsors span,
#instagram .instagram span {
	border: none;
	position: absolute;
	border-bottom: 3px solid #fee86d;
	top: 75%;
	width: 202px;
	z-index: -5;
}
#instagram .instagram span {
	width: 117px;
}
#sponsors h2,
#instagram .instagram h2 {
	position: relative;
	z-index: 10;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
button:hover {
	background-color: #000000;
	color: #fee86d;
}
</style>
