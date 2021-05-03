<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Countries
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target: #modal-nationality">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="nationalities"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'nationality_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'country_code'">
								{{ props.row.country_code }}
							</span>
							<span v-if="props.column.field === 'country'">
								{{ props.row.county }}
							</span>
							<span v-if="props.column.field === 'nationality'">
								{{ props.row.nationality }}
							</span>
							<span v-if="props.column.field === 'action'">
								<button class="sc-button sc-button-mini md-bg-orange-400" data-uk-tooltip="View">
									<fa :icon="['fas', 'eye']" class="md-color-white" />	
								</button>
								<button class="sc-button sc-button-mini md-bg-green-400" data-uk-tooltip="Edit">
									<fa :icon="['fas', 'edit']" class="md-color-white" />	
								</button>
							</span>
						</template>
					</VueGoodTable>
				</ScCardBody>
			</ScCard>
			<div id="modal-nationality" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-3@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Add Country
					</h2>
					<client-only>
						<CountriesForm button-text="Add"
							:submit-form="addCountries"
							:has-submit-button="true"
						/>
					</client-only>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import  CountriesForm from "~/components/serviceComponents/ems/countries-form";
export default {
	components: {
		VueGoodTable,
		CountriesForm
	},
	layout: 'employee',
	data: () => ({
		nationalities:[],	
	}),
	head () {
		return {
			'title': 'Employee | Countries'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'nationality_id',
				},
				{
					label: 'Country Code',
					field: 'country_code',
				},
				{
					label: 'Country',
					field: 'country',
				},
				{
					label: 'Nationality',
					field: 'nationality',
				},
				{
					label: 'Action',
					field: 'action',
				},
			]
		}
	},

	mounted () {
		this.getCountries()
	},
	methods: {
		getCountries () {
		},
		addCountries (){
			
		}

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
