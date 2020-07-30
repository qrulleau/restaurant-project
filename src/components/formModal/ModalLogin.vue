<template>
	<div class="modal">
		<div class="modal-container">
			<div class="placement-cancel">
				<a class="cancel" @click="hideModal">
					<i class="fa fa-times" aria-hidden="true"></i>
				</a>
			</div>
			<h2>Login</h2>
			<input type="text" placeholder="User Name" required />
			<input type="password" placeholder="User Password" required />
			<div class="d-flex item-baseline">
				<div class="d-flex item-center">
					<input type="checkbox" name="" id="" />
					<p>Remember me</p>
				</div>
				<div class="d-flex item-center">
					<h3>Forgot Password ?</h3>
					<i class="fa fa-arrow-right" aria-hidden="true"></i>
				</div>
			</div>
			<router-link tag="button" to="/">Login</router-link>
			<div class="social">
				<p>Or Login with:</p>
				<div class="d-flex container-social">
					<i class="fab fa-facebook-f" aria-hidden="true"></i>
					<i class="fab fa-google" aria-hidden="true"></i>
					<i class="fab fa-twitter" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { EventBus } from '../../main';
export default {
	methods: {
		hideModal() {
			EventBus.$emit('noDisplayModal', false);
		},
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
	padding-left: 18px;
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
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: 500ms;
}
.cancel:hover {
	width: 30px;
	height: 30px;
}
.placement-cancel {
	margin-bottom: 10px;
	display: flex;
	justify-content: flex-end;
}
i {
	margin-right: 0;
}
</style>
