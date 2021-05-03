<template>
	<div>
		<client-only>
			<EmployeeForm button-text="Add"
				:submit-form="addEmployee"
				title-text="Add Employee"
				:has-submit-button="true"
				:get-record="getRecord"
			/>
		</client-only>
	</div>
</template>
<script>
import  EmployeeForm from "~/components/serviceComponents/ems/employee-form";
export default {
	components:{
		EmployeeForm
	},
	layout: 'employee',
	methods:{
	  addEmployee (dependants, personal_details, work_details, contact_details, kins) {	
		},
	 getRecord (leaveUpdate) {
		}
	}
	
}
</script>