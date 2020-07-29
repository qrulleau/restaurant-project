<template>
	<div class="d-flex footer container">
		<div>
			<p>© Copyright Qode Interactive</p>
		</div>
		<div>
			<ul>
				<li><router-link to="#">Home</router-link></li>
				<li><router-link to="#">Shop</router-link></li>
				<li><router-link to="#">About</router-link></li>
				<li><router-link to="#">Contact</router-link></li>
			</ul>
		</div>
		<div class="d-flex">
			<router-link to="#"><i class="fab fa-facebook-f"></i></router-link>
			<router-link to="#"><i class="fab fa-twitter"></i></router-link>
			<router-link to="https://www.instagram.com/"
				><i class="fab fa-instagram"></i
			></router-link>
			<router-link to="#"><i class="fab fa-youtube"></i></router-link>
			<router-link to="#"><i class="fas fa-rss"></i></router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
	font-family: 'catamaran', sans-serif;
	font-size: 12px;
}
li {
	margin-right: 44px;
}
.footer {
	margin: 118px auto 15px auto;
}
i {
	margin-top: 0;
}
a {
	font-family: 'catamaran', sans-serif;
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
}
</style>
