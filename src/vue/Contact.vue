<template>
	<div class="container">
		<div class="d-flex space-header">
			<div class="tier-grid">
				<h2>Say Hello !</h2>
				<p class="space-element">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat n
				</p>
				<p>
					<strong>Mattis molestie a iaculis!</strong>Mauris cursus mattis
					molestie a. A pellentesque sit amet porttitor eget dolor morbi non.
					Gravida neque convallis a crassemper auctor.
				</p>
			</div>
			<div><img src="../assets/app-presentation.jpg" /></div>
		</div>
		<div class="d-flex space-content">
			<div class="tier-grid">
				<p>Email: maggy@easymeals.com (ullamcorper morbi tincidunt!)</p>

				<form>
					<div class="d-flex">
						<div class="relative-position">
							<input
								type="text"
								class="absolute-position input-hover "
								id="name"
								name="name"
								required
							/>
							<label for="name" class="absolute-position label-focus"
								>Your Name</label
							>
						</div>
						<div class="relative-position">
							<input
								type="email"
								class="absolute-position input-hover "
								id="email"
								name="email"
								required
							/>
							<label for="email" class="absolute-position label-focus"
								>Your Email</label
							>
						</div>
					</div>
					<div class="relative-position message">
						<textarea
							name=""
							id=""
							class="absolute-position input-hover"
							required
						></textarea>
						<label for="" class="absolute-position label-focus"
							>Your message</label
						>
					</div>
					<router-link tag="button" to="#">Submit</router-link>
				</form>
			</div>
			<section class="recipe">
				<h3 class="t-center">Latest recipes</h3>
				<div class="d-flex case">
					<div>
						<img src="../assets/latest-recipe.jpg" alt="" />
					</div>
					<div class="description-recipe">
						<h4>Cupcakes with <br />coconut oil</h4>
						<p>June 10, 2020</p>
					</div>
				</div>
				<div class="d-flex case item-center">
					<div>
						<img src="../assets/latest-recipe-1.jpg" alt="" />
					</div>
					<div class="description-recipe">
						<h4>Cupcakes with <br />coconut oil</h4>
						<p>June 10, 2020</p>
					</div>
				</div>
				<div class="d-flex case item-center">
					<div>
						<img src="../assets/latest-recipe-2.jpg" alt="" />
					</div>
					<div class="description-recipe">
						<h4>Cupcakes with <br />coconut oil</h4>
						<p>June 10, 2020</p>
					</div>
				</div>
			</section>
		</div>
		<section id="faq">
			<div class="d-flex">
				<div class="faq">
					<div class="d-flex item-center space-faq">
						<h3 class="t-center">FAQ :</h3>
						<span></span>
					</div>
					<div class="question">
						<h5>Can I use your photos and/or recipe on my blog?</h5>
						<p>
							Faucibus a pellentesque sit amet porttitor. Varius duis at
							consectetur lorem donec massa sapien <br />faucibus et. Imperdiet
							massa tincidunt nunc pulvinar sapien et.
						</p>
					</div>
					<div class="question">
						<h5>Can I use your photos and/or recipe on my blog?</h5>
						<p>
							Faucibus a pellentesque sit amet porttitor. Varius duis at
							consectetur lorem donec massa sapien <br />faucibus et. Imperdiet
							massa tincidunt nunc pulvinar sapien et.
						</p>
					</div>
					<div class="question">
						<h5>Can I use your photos and/or recipe on my blog?</h5>
						<p>
							Faucibus a pellentesque sit amet porttitor. Varius duis at
							consectetur lorem donec massa sapien <br />faucibus et. Imperdiet
							massa tincidunt nunc pulvinar sapien et.
						</p>
					</div>
				</div>
				<section class="presentation t-center">
					<h3>About me</h3>
					<img class="space-profil" src="../assets/profil-lee.jpg" alt="" />
					<h4>hi i'm Lee</h4>
					<p>
						I create simple, delicious recipes that require 10
						<br />ingredients or less, <br />
						one bowl, or 30 minutes or less to prepare.
					</p>
					<img src="../assets/signature.jpg" alt="" />
				</section>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
	font-size: 50px;
}
.recipe,
.presentation {
	position: relative;
	border: 1px solid #eae9e7;
	height: 418px;
}
.recipe h3,
.presentation h3 {
	position: absolute;
	bottom: 97.5%;
	left: 34%;
	background-color: #fff;
	padding: 4px 9px;
}
.presentation h3 {
	left: 40%;
}
p {
	font-size: 18px;
	letter-spacing: 150%;
	color: #626262;
}
.tier-grid {
	width: 825px;
}
.space-element {
	margin: 30px 0;
}
.space-header {
	margin-top: 66px;
}
h4,
.description-recipe p {
	font-size: 15px;
	line-height: 150%;
	letter-spacing: 0.1em;
}
.description-recipe p {
	font-size: 13px;
}
.description-recipe {
	margin-left: 18px;
}
.case {
	padding: 0px 79px 18px 43px;
}
.case:nth-child(2) {
	padding-top: 34px;
}
.space-content {
	margin-top: 20px;
}
.fas {
	width: 825px;
}
.faq h3 {
	font-size: 20px;
	font-family: 'Merriweather', serif;
	font-weight: 400;
}
.faq p {
	line-height: 150%;
	margin: 12px 0 38px 0;
	font-family: 'catamaran', sans-serif;
}
.faq span {
	width: 90%;
}
.space-faq {
	margin-bottom: 53px;
}
.presentation p {
	font-size: 16px;
	font-family: 'catamaran', sans-serif;
	padding: 18px 52px 38px 54px;
	line-height: 150%;
}
.presentation p:nth-child(5) {
	margin-bottom: 38px;
}
.space-profil {
	margin: 28px 0 12px 0;
}
#faq {
	margin-top: 38px;
}
input {
	border: none;
	width: 380px;
	border-bottom: 1px solid #c4c4c4;
}
.relative-position {
	position: relative;
	margin: 84px 0 54px 0;
	width: 380px;
	height: 36px;
}
.message {
	height: 48px;
	margin-top: 10px;
	width: 100%;
}
.absolute-position {
	position: absolute;
	left: 0;
}
.input-hover,
textarea {
	z-index: 150;
	width: 380px;
	bottom: 47%;
	background: initial;
}
.message textarea {
	width: 100%;
	border: none;
	border-bottom: 1px solid #c4c4c4;
	height: 19px;
}
.message .absolute-position {
	top: 0%;
}
.input-hover:focus + .label-focus,
.input-hover:valid + .label-focus {
	font-size: 75%;
	transform: translate3d(0, -100%, 0);
	transition: all 200ms;
	padding-left: 0;
}
.label-focus {
	transition: all 200ms;
	z-index: 5;
}
</style>
