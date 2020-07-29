<template>
	<div class="modal">
		<div class="modal-container">
			<a class="cancel relative-position">
				<span class="absolute-position"
					><i class="fa fa-times" aria-hidden="true"></i
				></span>
			</a>
			<h2>Login</h2>
			<input type="text" />
			<input type="password" />
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
export default {};
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
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal-container {
	background-color: #fff;
	width: 420px;
	height: 440px;
	padding: 30px;
}
p {
	color: #6b6768;
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
</style>
