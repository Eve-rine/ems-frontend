<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Departments
				</h1>
			</div>
			<div class="sc-actions uk-margin-right uk-margin-small-top">
				<a href="javascript:void(0)" class="sc-fab sc-fab-small sc-fab-text sc-fab-primary" data-uk-toggle="target:  #modal-department">
					<i class="mdi mdi-plus"></i>Add New
				</a>
			</div>
		</div>
		<div id="sc-page-content">
			<ScCard>
				<ScCardBody>
					<VueGoodTable
						:columns="columns"
						:rows="departments"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'department_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'department'">
								{{ props.row.department }}
							</span>
							<span v-if="props.column.field === 'department_head'">
								{{ props.row.department_head }}
							</span>
							<span v-if="props.column.field === 'department_abbreviation'">
								{{ props.row.department_abbreviation }}
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
			<div id="modal-department" class="uk-flex-middle" uk-modal="bg-close:false">
				<div class="uk-modal-dialog uk-width-1-3@l uk-margin-auto uk-modal-body">
					<button class="uk-modal-close-default" data-uk-close></button>
					<h2 class="uk-modal-title">
						Create Department
					</h2>
					<client-only>
						<DepartmentsForm button-text="Add"
							:submit-form="addDepartment"
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
import  DepartmentsForm from "~/components/serviceComponents/ems/departments-form";
export default {
	components: {
		VueGoodTable,
		DepartmentsForm
	},
	layout: 'employee',
	data: () => ({
		departments:[],
	
	}),
	head () {
		return {
			'title': 'Employee | Departments'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'department_id',
				},
				{
					label: 'Department',
					field: 'department',
				},
				{
					label: 'Dept. Abbr',
					field: 'department_abbreviation',
				},
				{
					label: 'Dept. Head',
					field: 'department_head',
				},
				{
					label: 'Action',
					field: 'action',
				},

			]
		}
	},
	methods: {
		addDepartment (){
	
		}
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
</style>
