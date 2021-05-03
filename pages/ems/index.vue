<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Employee Data
				</h1>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<form class="uk-search uk-search-default uk-width-1-1">
						<span uk-search-icon></span>
						<input v-model="searchTerm"
							class="uk-search-input"
							type="search"
							placeholder="Search Employee ..."
							@keypress.enter.prevent="SearchEmployee"
						>
					</form>
					<VueGoodTable
						:columns="columns"
						:rows="employees"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'employee_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'staff_number'">
								{{ props.row.workdetails.staff_number }}
							</span>
							<span v-if="props.column.field === 'first_name'">
								{{ props.row.first_name }}
							</span>
								<span v-if="props.column.field === 'gender'">
								{{ props.row.workdetails.gender }}
							</span>
							<span v-if="props.column.field === 'mobile_number'">
								{{ props.row.mobile_number }}
							</span>
							<span v-if="props.column.field === 'email_address'">
								{{ props.row.email_address }}
							</span>
							<span v-if="props.column.field === 'section'">
								{{ props.row.workdetails.section }}
							</span>
							<span v-if="props.column.field === 'employment_date'">
								{{ props.row.workdetails.employment_date }}
							</span>
							<span v-if="props.column.field === 'action'">
								<nuxt-link :to="'/employee/view/'+ props.row.employee_id">
									<button class="sc-button sc-button-mini md-bg-orange-400" data-uk-tooltip="View employee">
										<fa :icon="['fas', 'eye']" class="md-color-white" />	
									</button>
								</nuxt-link>
								<nuxt-link :to="'/employee/update/'+ props.row.employee_id">
									<button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit employee">
										<fa :icon="['fas', 'edit']" class="md-color-white" />	
									</button>
								</nuxt-link>
							</span>
						</template>
					</VueGoodTable>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
export default {
	components: {
		VueGoodTable,
	},
	layout: 'employee',
	data: () => ({
		errorMessage:'',
		employees:[],
		searchTerm:'',
		
	}),
	head () {
		return {
			'title': 'Employee | List of Employees'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'employee_id',
				},
				{
					label: 'Staff No.',
					field: 'staff_number',
				},
				{
					label: 'Name',
					field: 'first_name',
				},
				{
					label: 'Gender',
					field: 'gender',
				},
				{
					label: 'Mobile',
					field: 'mobile_number',
				},
				{
					label: 'Email',
					field: 'email_address',
				},
            	{
					label: 'Section',
					field: 'section',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},
	mounted () {
	},

	methods: {
		SearchEmployee () {

		},
	    getEmployees () {
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
