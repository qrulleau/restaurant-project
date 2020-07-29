<template>
	<div>
		<div class="container">
			<div class="main-carousel">
				<carousel
					:perPage="3"
					:scrollPerPage="true"
					:paginationEnabled="false"
					:navigationEnabled="true"
					:autoplayHoverPause="true"
					:navigationNextLabel="arrowRight"
					:navigationPrevLabel="arrowLeft"
				>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
					<slide>
						<app-slide></app-slide>
					</slide>
				</carousel>
			</div>
			<div class="d-flex">
				<div class="third-grid">
					<h2>Featured</h2>
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
							lobortis venenatis sed molestie ut
						</p>
					</div>
				</div>
				<div class="third-grid">
					<h2>Popular Recipes</h2>
					<div class="article d-flex">
						<div>
							<img src="../assets/recipe.jpg" alt="" />
						</div>
						<div class="adjust">
							<div class="d-flex flex-start item-center">
								<i class="far fa-calendar-check"></i>
								<h3>DAILY RECIPES</h3>
							</div>
							<h2>Lorem ipsum dolor sit consectetur adipis.</h2>
						</div>
					</div>
					<div class="article d-flex">
						<div>
							<img src="../assets/recipe.jpg" alt="" />
						</div>
						<div class="adjust">
							<div class="d-flex flex-start item-center">
								<i class="far fa-calendar-check"></i>
								<h3>DAILY RECIPES</h3>
							</div>
							<h2>Lorem ipsum dolor sit consectetur adipis.</h2>
						</div>
					</div>
					<div class="article d-flex">
						<div>
							<img src="../assets/recipe.jpg" alt="" />
						</div>
						<div class="adjust">
							<div class="d-flex flex-start item-center">
								<i class="far fa-calendar-check"></i>
								<h3>DAILY RECIPES</h3>
							</div>
							<h2>Lorem ipsum dolor sit consectetur adipis.</h2>
						</div>
					</div>
					<div class="article d-flex">
						<div>
							<img src="../assets/recipe.jpg" alt="" />
						</div>
						<div class="adjust">
							<div class="d-flex flex-start item-center">
								<i class="far fa-calendar-check"></i>
								<h3>DAILY RECIPES</h3>
							</div>
							<h2>Lorem ipsum dolor sit consectetur adipis.</h2>
						</div>
					</div>
				</div>

				<div class="third-grid">
					<h2>New CookBook</h2>
					<img src="../assets/book.jpg" alt="" />
				</div>
			</div>
			<section id="instagram">
				<div class="d-flex item-center">
					<h2>@fake_restaurant on instagram</h2>
					<span></span>
				</div>
				<div class="d-flex space-instagram">
					<div><img src="../assets/insta-1.jpg" alt="" /></div>
					<div><img src="../assets/insta-2.jpg" alt="" /></div>
					<div><img src="../assets/insta-3.jpg" alt="" /></div>
					<div><img src="../assets/insta-4.jpg" alt="" /></div>
					<div><img src="../assets/insta-5.jpg" alt="" /></div>
					<div><img src="../assets/insta.jpg" alt="" /></div>
				</div>
				<div class="t-center instagram">
					<h2>Fake Rest <span></span>Forum</h2>
					<p>186.545users, 155,478 recipes,1.432.915</p>
					<router-link class="margin-adjust" tag="button" to=""
						>join now</router-link
					>
				</div>
			</section>
			<section id="article">
				<div class="d-flex">
					<app-article></app-article>
					<app-article></app-article>
					<app-article></app-article>
				</div>
			</section>
			<div class="brand">
				<carousel
					:autoplay="true"
					:perPage="6"
					:paginationEnabled="false"
					:loop="true"
					:mouseDrag="false"
					:touchDrag="false"
					:speed="2000"
				>
					<slide>
						<img src="../assets/Brand.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-1.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-2.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-3.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-4.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-5.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-1.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-2.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-3.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-4.png" alt="" />
					</slide>
					<slide>
						<img src="../assets/Brand-5.png" alt="" />
					</slide>
				</carousel>
			</div>
			<section id="sponsors" class="t-center">
				<h2>We offer You <span></span>Partnership</h2>
				<p>
					We love to partner with brands and products that we believe in. If you
					feel that your company
					<br />shares values and would benefit our readers, we would love to
					talk about working together.
				</p>
				<button>Learn more</button>
			</section>
		</div>
	</div>
</template>

<script>
import Article from '../components/Article.vue';
import Slide from '../components/Slider.vue';

export default {
	components: {
		appArticle: Article,
		appSlide: Slide,
	},
	data() {
		return {
			arrowRight: '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
			arrowLeft: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
		};
	},
};
</script>

<style>
.brand {
	width: 870px;
	margin: 60px auto 90px auto;
}
.main-carousel {
	margin: 38px 0;
}
</style>
