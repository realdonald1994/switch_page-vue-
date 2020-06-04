<template>
	<main>
		<h1>GS-Vue-Test</h1>
		​<p>
		The requirements of the test are outlined below, as well as the steps to get started. Please fork this repository and complete the test in a repository of your own.
		​
		This coding test will use the <a href="https://swapi.dev/">Star Wars API</a>.​
		</p>
		<h2>Requirements</h2>
		<ul>
			<li> As a user, I can click between starships and people in the left sidebar and receive a full list of the names of all the items from that resource</li>
			<li> As a user, when I click on a specific item name, I see a list of information about that item in the main area</li>
			<li> the main area should have a title with the name of the item</li>
			<li> If the item is a starship, I see the following details:</li>
			<ul>
				<li> model</li>
				<li> manufacturer</li>
				<li> starship class</li>
			</ul>
			​
			<li> If the item is a person, I see:</li>
			<ul>
				<li> eye color</li>
				<li> birth year</li>
				<li> the app should include some minimal, functional styling</li>
			</ul>
		</ul>
		​
		<h3>Project setup</h3>
		<code>
			npm install
		</code>
		​
		<h3>Compiles and hot-reloads for development</h3>
		<code>
			npm run serve
		</code>
	</main>
</template>

<script>
	export default {}
</script>

<style>
main {
	font-family: sans-serif;
	max-width: 650px;
	margin: auto;
}
</style>
