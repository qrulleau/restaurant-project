<template>
	<modal-login></modal-login>
</template>

<script>
import ModalLogin from './formModal/ModalLogin.vue';
export default {
	components: {
		ModalLogin,
	},
};
</script>

<style scoped>
h2 {
	font-size: 23px;
}
input[type='text'],
input[type='password'] {
	border: none;
	border: 1px solid #edebeb;
	display: block;
	width: 100%;
	margin-bottom: 10px;
	height: 58px;
}
.fa-arrow-right {
	margin: 0 0 0 9px;
}
.modal {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 50;
}
.modal-container {
	background-color: #fff;
	width: 420px;
	height: 440px;
	padding: 30px;
}
p {
	color: #6b6768;
	font-family: 'catamaran', sans-serif;
}
.item-baseline {
	align-items: baseline;
	margin: 9px 0px;
}
.container-social {
	width: 70px;
}
.social p {
	margin-top: 18px;
	margin-bottom: 9px;
}
span {
	border: none;
}
.cancel {
	width: 22px;
	height: 22px;
	background-color: #fee86d;
	display: block;
	border-radius: 50%;
}
.absolute-position {
	position: absolute;
	left: 28%;
	top: 16%;
}
.relative-position {
	position: relative;
}
.placement-cancel {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
}
</style>
