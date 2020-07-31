<template>
	<div>
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
				<a href="https://www.facebook.com/"
					><i class="fab fa-facebook-f" aria-hidden="true"></i
				></a>
				<a href="https://www.google.com/"
					><i class="fab fa-google" aria-hidden="true"></i
				></a>
				<a href="https://twitter.com"
					><i class="fab fa-twitter" aria-hidden="true"></i
				></a>
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
	padding-left: 18px;
}
.fa-arrow-right {
	margin: 0 0 0 9px;
}
p {
	color: #6b6768;
	font-family: 'catamaran', sans-serif;
}
.item-baseline {
	margin: 15px 0px;
}
.container-social {
	width: 70px;
}
.social p {
	margin-top: 18px;
	margin-bottom: 9px;
}
.social {
	margin-bottom: 20px;
}
span {
	border: none;
}
i {
	margin-right: 0;
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
input[type='checkbox'] {
	margin: 0 9px 0 0;
}
.fa-arrow-right {
	margin: 0 0 0 9px;
}
</style>
