<template>
	<div class="signup">
		<h2>Register</h2>
		<p>Create your account now</p>
		<input type="text" placeholder="User Name" />
		<input type="text" placeholder="Email" />
		<input type="password" placeholder="Password" />
		<input type="password" placeholder="Repeat Password" />
		<button>Register</button>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
	display: block;
	margin-top: 18px;
	border: 1px solid #dddbdb;
	padding: 14.5px 26px;
	font-size: 16px;
	font-family: 'catamaran', sans-serif;
	width: 100%;
}
input:nth-child(3) {
	margin-top: 12px;
}
p {
	color: #6b6768;
	font-family: 'catamaran', sans-serif;
}
button {
	margin-top: 15px;
}
</style>
