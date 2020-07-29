<template>
	<div class="third-grid">
		<img src="../assets/S.jpg" alt="" />
		<div class="description">
			<div class="d-flex width">
				<div class="d-flex item-center">
					<i class="far fa-clock"></i>
					<h3>30 minutes</h3>
				</div>
				<div class="d-flex item-center">
					<i class="far fa-thumbs-up"></i>
					<h3>Super Easy</h3>
				</div>
			</div>
			<h4>Lorem ipsum dolor sit amet consectetur adipis.</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lobortis
				venenatis sed molestie ut
			</p>
			<div class="d-flex author">
				<div class="d-flex item-center">
					<div>
						<img src="../assets/profil-picture.jpg" alt="" />
					</div>
					<div class="detail">
						<h3>TAYLOR KINNY</h3>
						<h4>May 7, 2020</h4>
					</div>
				</div>
				<div class="share">
					<div class="dropdown">
						<i class="fas fa-share-alt"></i>
						<div class="dropdown-content">
							<ul>
								<router-link tag="li" to="#"
									><i class="fab fa-facebook-f"></i
								></router-link>
								<router-link tag="li" to="#"
									><i class="fab fa-twitter"></i
								></router-link>
								<router-link tag="li" to="#"
									><i class="fab fa-pinterest"></i
								></router-link>
								<router-link tag="li" to="#"
									><i class="fab fa-linkedin"></i
								></router-link>
							</ul>
						</div>
					</div>
					<i class="far fa-bookmark"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.author {
	margin-top: 20px;
}
.third-grid .description .detail h4 {
	font-family: 'catamaran', sans-serif;
	font-size: 13px;
	color: #7b7b7b;
	margin-bottom: 0;
}
.detail {
	margin-left: 12px;
}
.fas,
.far {
	margin-top: 10px;
}
.dropdown {
	position: relative;
	display: inline-block;
}
.dropdown-content {
	display: none;
	position: absolute;
	padding: 20px;
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>
