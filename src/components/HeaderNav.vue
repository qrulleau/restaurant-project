<template>
	<div class="d-flex">
		<ul>
			<li><router-link name="home" to="/">Home</router-link></li>
			<li><router-link name="shop" to="/shop">Shop</router-link></li>
			<li><router-link name="about" to="/about">About</router-link></li>
			<li><router-link name="contact" to="/Contact">Contact</router-link></li>
		</ul>
		<div class="d-flex">
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
			<a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-youtube"></i></a>
			<a href="#"><i class="fas fa-rss"></i></a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
	font-family: 'catamaran', sans-serif;
	margin-right: 44px;
}
i {
	margin-left: 12px;
	margin-top: 0;
}
a {
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
}
</style>
