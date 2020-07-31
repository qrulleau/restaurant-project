<template>
	<div class="container">
		<div class="d-flex">
			<div class="first-grid">
				<section class="login">
					<h2>Login</h2>
					<div class="inline-grid">
						<label for="">Username :</label>
						<input type="text" placeholder="Your Username" />
					</div>
					<div class="inline-grid">
						<label for="">Password :</label>
						<input type="text" placeholder="Your Password" />
					</div>
					<div class="small-container">
						<div class="d-flex item-center">
							<input type="checkbox" name="" id="" />
							<p>Keep me signed in</p>
						</div>
					</div>
					<button type="submit">LOG IN</button>
				</section>
				<section class="recent-topic">
					<h2>Recent Topics</h2>
					<p>Dark beers</p>
					<p>Main Dishes</p>
					<p>Pottage</p>
					<p>Salads</p>
					<p>Legumes</p>
				</section>
			</div>
			<div class="second-grid">
				<div class="d-flex flex-end">
					<input type="text" placeholder="What are you looking for ?" />
					<button type="submit">Search</button>
				</div>
				<section class="forum">
					<div class="header-forum">
						<div class="d-flex item-center">
							<div class="info-forum styling-default">
								<h2>Forum</h2>
							</div>
							<div class="topics-forum styling-default">
								<h2>Topics</h2>
							</div>
							<div class="post-forum styling-default">
								<h2>Post</h2>
							</div>
							<div class="last-post-forum styling-default">
								<h2>Last Post</h2>
							</div>
						</div>
					</div>
					<div class="content-forum">
						<div class="d-flex item-center">
							<div class="info-forum">
								<h4>Alcoholic Beverages</h4>
							</div>
							<div class="topics-forum t-center">
								<p>5</p>
							</div>
							<div class="post-forum t-center">
								<p>5</p>
							</div>
							<div class="last-post-forum d-flex-vertical t-center">
								<p>1 month ago</p>
								<div class="d-flex-center">
									<div class="d-flex item-center container-description-forum">
										<img src="../assets/profil-picture-forum.jpg" alt="" />
										<h5>Tom spencer</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content-forum">
						<div class="d-flex item-center">
							<div class="info-forum">
								<h4>Alcoholic Beverages</h4>
							</div>
							<div class="topics-forum t-center">
								<p>5</p>
							</div>
							<div class="post-forum t-center">
								<p>5</p>
							</div>
							<div class="last-post-forum d-flex-vertical t-center">
								<p>1 month ago</p>
								<div class="d-flex-center">
									<div class="d-flex item-center container-description-forum">
										<img src="../assets/profil-picture-forum.jpg" alt="" />
										<h5>Tom spencer</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content-forum">
						<div class="d-flex item-center">
							<div class="info-forum">
								<h4>Alcoholic Beverages</h4>
							</div>
							<div class="topics-forum t-center">
								<p>5</p>
							</div>
							<div class="post-forum t-center">
								<p>5</p>
							</div>
							<div class="last-post-forum d-flex-vertical t-center">
								<p>1 month ago</p>
								<div class="d-flex-center">
									<div class="d-flex item-center container-description-forum">
										<img src="../assets/profil-picture-forum.jpg" alt="" />
										<h5>Tom spencer</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="content-forum">
						<div class="d-flex item-center">
							<div class="info-forum">
								<h4>Alcoholic Beverages</h4>
							</div>
							<div class="topics-forum t-center">
								<p>5</p>
							</div>
							<div class="post-forum t-center">
								<p>5</p>
							</div>
							<div class="last-post-forum d-flex-vertical t-center">
								<p>1 month ago</p>
								<div class="d-flex-center">
									<div class="d-flex item-center container-description-forum">
										<img src="../assets/profil-picture-forum.jpg" alt="" />
										<h5>Tom spencer</h5>
									</div>
								</div>
							</div>
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
.inline-grid {
	display: grid;
}
.login h2 {
	margin-bottom: 32px;
}
.d-flex-center {
	display: flex;
	justify-content: center;
}
.first-grid {
	width: 302px;
}
.container {
	margin-top: 66px;
}
.login {
	background-color: #f9f6e7;
	padding: 18px 26px;
}
.flex-end {
	justify-content: flex-end;
}
.flex-end input {
	margin: 0 6px 0 0;
	height: 60px;
	width: 276px;
}
label,
.small-container p {
	color: #6b6768;
	font-family: 'catamaran', sans-serif;
	margin-bottom: 6px;
}
input {
	margin-bottom: 12px;
	height: 48px;
	padding-left: 12px;
	border: 1px solid #eae9e7;
}
input[type='checkbox'] {
	margin: 0 3px 0 0;
}
.small-container {
	width: 154px;
	margin-bottom: 12px;
}
.small-container p {
	margin: 0 0 0 12px;
}
.recent-topic {
	margin-top: 30px;
}
.recent-topic h2 {
	font-size: 18px;
}
.recent-topic p,
.topics-forum p,
.last-post-forum p,
.post-forum p {
	font-family: 'catamaran', sans-serif;
	color: #6b6768;
	margin-bottom: 9px;
}
.topics-forum p,
.post-forum p {
	margin-bottom: 0;
}

.second-grid {
	width: 965px;
}
.topics-forum {
	width: 10%;
}
.post-forum {
	width: 10%;
	border-left: 1px solid #eae9e7;
	border-right: 1px solid #eae9e7;
	padding: 48px 0;
}
.header-forum .post-forum {
	padding: 0;
}
.last-post-forum {
	width: 25%;
}
.d-flex .styling-default h2 {
	text-align: center;
	color: #6b6768;
	font-size: 15px;
	margin-bottom: 0;
	padding: 12px 0;
}
.d-flex .info-forum {
	width: 55%;
	padding-left: 60px;
	border-right: 1px solid #eae9e7;
}
.d-flex .info-forum h2 {
	text-align: inherit;
}
.header-forum {
	background-color: #f7f7f7;
}
h4 {
	padding: 48px 0;
	font-size: 15px;
}
h5 {
	font-family: 'catamaran', sans-serif;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
}
.container-description-forum {
	width: 98px;
}
.content-forum {
	border: 1px solid #eae9e7;
}
.forum {
	margin-top: 30px;
}
</style>
