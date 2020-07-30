<template>
	<div class="container">
		<div class="d-flex">
			<div class="third-grid yellow-span">
				<h1>Welcome! I’m <span></span>Lee from the <br />Fake Restaurant</h1>
				<img src="../assets/presentation-lee.jpg" alt="" />
				<p>
					Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu
					augue ut lectus arcu. Neque vitae tempus quam pellentesque nec.
					Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor
					massa id neque aliquam vestibulum morbi blandit. Amet consectetur
					adipiscing elit duis.
					<strong>Eget sit amet tellus cras adipiscing honcus</strong>mat
					voluptatem accusantium doloremque laudantium, totam rem aperiam,
					eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae
					vitae dicta sunt explicabo.
				</p>
				<section id="ressource">
					<h4>Cooking Resources</h4>
					<p>
						Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac
						habitasse platea <span></span>fuss-free udin tempor id eu nisl nunc
						mi ipsum imperdiet massa, <span></span>Aliquam Ultrices Sagittis,
						orci a scelerisque purus semper.
					</p>
					<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>
					<ul>
						<li>Dolor sed viverra ipsum nunc alique</li>
						<li>
							Nec tincidunt semper <span></span>Neque Ornare, aenean euismod
						</li>
						<li>Dolor sed viverra ipsum nunc alique</li>
					</ul>
				</section>
				<div class="partenaire">
					<div class="d-flex item-center">
						<div>
							<h5>
								<strong>We Offer You</strong><br />
								Partnership
							</h5>
						</div>
						<div>
							<p>
								We love to partner with brands and products that we
								<br />believe in. Drop us a note this very day!
							</p>
						</div>
						<router-link tag="button" to="/contact" name="contact"
							>LEARN MORE</router-link
						>
					</div>
				</div>
			</div>
			<div class="frst-grid">
				<section id="newsletter" class="t-center">
					<h4>Never Miss a Post !</h4>
					<p>
						Sign up for free and be the first to get <br />notified about
						updates.
					</p>
					<div class="placement-input">
						<input type="text" placeholder="Your Email" />
					</div>
					<button>subscribe</button>
				</section>
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
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
	font-size: 50px;
	line-height: 150%;
	margin-top: 66px;
}
.third-grid {
	width: 837px;
}
.third-grid img {
	margin: 18px 0 30px 0;
}
.first-grid {
	width: 404px;
}
p {
	font-family: 'catamaran', sans-serif;
	font-size: 18px;
	color: #626262;
	line-height: 150%;
}
strong {
	font-weight: bold;
}
h4 {
	font-size: 23px;
	margin: 90px 0 30px 0;
}
h5 {
	line-height: 150%;
	font-size: 20px;
}
.item-center {
	padding: 25px 30px;
}
.partenaire {
	background-color: #f7f7f7;
	margin-top: 60px;
}
#ressource p:nth-child(3) {
	margin: 18px 0;
}
li {
	display: list-item;
	color: #626262;
	margin: 0 0 9px 36px;
}
li:nth-child(3) {
	margin-bottom: 0;
}
ul {
	list-style: inside;
}
.description-recipe p {
	font-size: 15px;
	line-height: 150%;
	letter-spacing: 0.1em;
}
.description-recipe p {
	font-size: 13px;
}
.case {
	padding: 0px 79px 18px 43px;
	align-items: center;
}
.case:nth-child(2) {
	padding-top: 34px;
}
.description-recipe {
	margin-left: 18px;
}
.recipe {
	position: relative;
	border: 1px solid #eae9e7;
	height: 418px;
}
.recipe h3 {
	position: absolute;
	bottom: 97.5%;
	left: 34%;
	background-color: #fff;
	padding: 4px 9px;
}
.recipe h4 {
	font-size: 15px;
	line-height: 150%;
	letter-spacing: 0.1em;
	margin: 0 0 6px 0;
}
#newsletter {
	background-color: #f7f7f7;
	margin-bottom: 72px;
}
#newsletter input {
	display: block;
	margin: 29px auto 16px auto;
	border: 1px solid #dddbdb;
	padding: 17px 0 17px 20px;
}
#newsletter button,
input {
	width: 293px;
}
#newsletter button {
	margin-bottom: 52px;
}
#newsletter h4 {
	margin-top: 66px;
	padding: 32px 95px 33px 95px;
}
.yellow-span h1 span {
	top: 34%;
	width: 87px;
}
#ressource ul li span {
	width: 112px;
	top: 85%;
}
#ressource p span {
	width: 181px;
	top: 86%;
}
#ressource p span:nth-child(1) {
	width: 65px;
	top: 36%;
}
</style>
