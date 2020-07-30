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
	margin-bottom: 0;
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
.recent-topic p {
	font-family: 'catamaran', sans-serif;
	color: #6b6768;
	margin-bottom: 9px;
}
.second-grid {
	width: 965px;
}
</style>
