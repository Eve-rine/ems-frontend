<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					Department Heads
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
						:rows="department_heads"
						:pagination-options="{ enabled: true }"
						style-class="uk-table uk-table-divider scutum-vgt"
					>
						<template slot="table-row" slot-scope="props">
							<span v-if="props.column.field === 'department_head_id'">
								{{ props.index + 1 }}
							</span>
							<span v-if="props.column.field === 'department_id'">
								{{ props.row.department_id }}
							</span>
							<span v-if="props.column.field === 'employee_id'">
								{{ props.row.employee_id }}
							</span>
							<span v-if="props.column.field === 'start_date'">
								{{ props.row.start_date }}
							</span>
							<span v-if="props.column.field === 'end_date'">
								{{ props.row.end_date }}
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
						Add Department Head
					</h2>
					<client-only>
						<DepartmentHeadsForm button-text="Add"
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
import  DepartmentHeadsForm from "~/components/serviceComponents/ems/department-heads-form";
export default {
	components: {
		VueGoodTable,
		DepartmentHeadsForm
	},
	layout: 'employee',
	data: () => ({
		department_heads:[],
	
	}),
	head () {
		return {
			'title': 'Employee | DepartmentHeads'
		}
	},
	computed: {
		columns () {
			return [
				{
					label: '#',
					field: 'department_head_id',
				},
				{
					label: 'Section',
					field: 'department_id',
				},
				{
					label: 'Employee Name',
					field: 'employee_id',
				},
				{
					label: 'Start Date',
					field: 'start_date',
				},
				{
					label: 'End Date',
					field: 'end_date',
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
