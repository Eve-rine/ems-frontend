<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-content">
			<ScCard class="uk-margin-top">
				<ScCardTitle>
					Latest Orders
				</ScCardTitle>
				<ScCardBody>
					<div class="uk-overflow-auto">
						<h1>Hello World</h1>
						<h2>{{ $auth.user.email }} </h2>
						<h2>{{ $auth.loggedIn }} </h2>
						<button class="sc-button sc-button-large sc-button-block sc-button-warning" @click="$auth.logout()">
							<span style="color:black">
								Login to Dashboard
							</span>
						</button>
					</div>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DashboardV2',
}
</script>

