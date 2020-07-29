<template>
	<div>
		<nav>
			<div class="container d-flex">
				<ul class="nav">
					<li><router-link name="forum" to="/forum">Forum</router-link></li>
					<li><router-link to="#">Desserts</router-link></li>
					<li><router-link to="#">Books</router-link></li>
					<li><router-link to="#">All Recipes</router-link></li>
					<li><router-link to="#">Popular</router-link></li>
				</ul>
				<ul class="login">
					<li @click="$emit('showModalChange', true)"><a>Sign up</a></li>
					<li>
						<a href="#"> Login</a>
						>
					</li>
				</ul>
			</div>
		</nav>
		<div class="container">
			<div class="d-flex space">
				<div>
					<h1>
						<img src="../assets/logo.png" />
					</h1>
				</div>
				<div class="d-flex item">
					<div class="d-flex">
						<input type="text" placeholder="Search" />
						<button type="submit"><i class="fas fa-search"></i></button>
					</div>
					<div class="d-flex">
						<i class="far fa-bookmark"></i>
						<p>Favourites</p>
					</div>
					<div class="d-flex">
						<i class="fas fa-shopping-basket"></i>
						<p>cart({{ cards }})</p>
					</div>
				</div>
			</div>
			<main-nav></main-nav>
		</div>
	</div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
export default {
	components: {
		MainNav: HeaderNav,
	},
	data() {
		return {
			cards: '$0.00',
			login: false,
		};
	},
	methods: {
		showLoginModal() {
			this.login = true;
			console.log('test connexion');
		},
	},
	props: ['showRegisterModal'],
};
</script>

<style scoped>
.nav li {
	margin-right: 24px;
}
nav a {
	color: #fff;
	font-family: 'catamaran', sans-serif;
	font-size: 14px;
}
nav {
	background-color: #000000;
	padding: 11px 0;
}
.login a {
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	margin-left: 24px;
}
.item {
	align-items: center;
	width: 721px;
}
button {
	width: 55px;
	height: 55px;
	padding: 0;
}
.space {
	padding: 46px 0 30px 0;
}
input {
	width: 290px;
	border: none;
	border-left: 1px solid #edebeb;
	padding-left: 24px;
}
i {
	margin-right: 6px;
	margin-top: 0px;
}
.fa-search {
	margin-right: 0;
	font-size: 15px;
}
</style>
