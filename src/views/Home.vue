<template>

<main>
	<div class="container">
		<aside class="profile">
			<img src="./../../public/img/brandon-barringer.jpg" alt="Brandon Barringer" class="profile__img">
			<div class="content">
				<h1 class="content__headline headline">Brandon Barringer</h1>
				<p class="content__subheadline subheadline">Creative Designer &amp; Developer with a knack for problem solving, creativity and process efficiancy</p>
				<div class="content__description">
					<p>Hi. I'm Brandon. I've been a designer and developer since my first introduction to graphic communications in 2004.</p>
					<p>I'm a huge nerd that is constantly looking for the best solution to any problem in life and at work, like the most efficient route to take home, the perfect way to stack a sandwhich and the actual solution to <code>8&#247;2(2+2)</code> <small><em> It's 16 by the way</em></small></p>
					<p>Anyway, if you're interested in having a chat just..</p>
				</div>
				<a href="#!" class="button">Contact Me</a>
			</div>
		</aside>
		<section class="history">
			<div class="history__header">
				<h1 class="history__headline headline">My History of Learning, Doing, Creating & Thinking</h1>
			</div>
			<h2 class="history__section-headline secondary-headline">Work</h2>
			<article class="card">
				<div class="card__container">
					<div class="card__date-container">
						<time class="card__date card__date--start">Aug. 15<sup>th</sup> 2013</time>
						<time class="card__date card__date--end">Current</time>
					</div>
					<div class="card__content-container">
						<h1 class="card__title">Noble Studios</h1>
						<p class="card__subheadline subheadline">Creative Designer</p>
						<p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae pariatur alias blanditiis, minus beatae labore. Nemo illo quae mollitia sequi architecto ad dignissimos aliquid, ut dolor cum incidunt alias magnam.</p>
					</div>
				</div>
			</article>
			<article class="card">
				<div class="card__container">
					<div class="card__date-container">
						<time class="card__date card__date--start">Jun 15<sup>th</sup> 2013</time>
						<time class="card__date card__date--end">Aug 15<sup>th</sup> 2013</time>
					</div>
					<div class="card__content-container">
						<h1 class="card__title">Noble Studios</h1>
						<p class="card__subheadline subheadline">Design Intern</p>
						<p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae pariatur alias blanditiis, minus beatae labore. Nemo illo quae mollitia sequi architecto ad dignissimos aliquid, ut dolor cum incidunt alias magnam.</p>
					</div>
				</div>
			</article>
			<article class="card">
				<div class="card__container">
					<div class="card__date-container">
						<time class="card__date card__date--start">Jun 7<sup>th</sup> 2010</time>
						<time class="card__date card__date--end">Current</time>
					</div>
					<div class="card__content-container">
						<h1 class="card__title">Freelance Marketing Services</h1>
						<p class="card__subheadline subheadline">CEO / President / Designer / Developer</p>
						<p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae pariatur alias blanditiis, minus beatae labore. Nemo illo quae mollitia sequi architecto ad dignissimos aliquid, ut dolor cum incidunt alias magnam.</p>
					</div>
				</div>
			</article>
			<h2 class="history__section-headline secondary-headline">Education</h2>
			<h2 class="history__section-headline secondary-headline">Notable Acheivements</h2>

		</section>
		<section class="skills">
			<h1 class="skills__headline headline">Skills</h1>
		</section>
	</div>
</main>

</template>

<script>

export default {}

</script>

<style lang="sass">
	@import './public/sass/variables.sass'
	@import './public/sass/profile.sass'
	@import './public/sass/history.sass'
	@import './public/sass/skills.sass'
</style>