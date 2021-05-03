<template>
	<div id="sc-page-wrapper">
		<div id="sc-page-top-bar" class="sc-top-bar" data-uk-sticky="offset:48; show-on-up: true; animation: uk-animation-slide-top-medium">
			<div class="sc-top-bar-content uk-flex uk-flex-1">
				<h1 class="sc-top-bar-title uk-flex-1">
					{{ titleText }}
				</h1>
			</div>
		</div>
		<div id="sc-page-content">
			<div class="sc-fab-page-wrapper">
				<nuxt-link :to="'/employee'" data-uk-tooltip="Back">
					<a href="javascript:void(0)" class="sc-fab sc-fab-medium sc-fab-primary">
						<i class="mdi mdi-arrow-left"></i>
					</a>
				</nuxt-link>
			</div>
			<ScCard>
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Personal Information
									</ScCardTitle>
								</div>
							</div>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									First Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.first_name" mode="outline"></ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.personal_details">
											{{ errors.personal_details[0] }}
										</li>
									</ul>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Middle Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.middle_name" mode="outline"></ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.middle_name">
											{{ errors.middle_name[0] }}
										</li>
									</ul>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Last Name
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.last_name" mode="outline"></ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Personal Identification type
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.personal_identification_type"
										:options="IdentificationTypes"
										:settings="{ 'width': '100%', 'placeholder': 'Select type...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Identification Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.identification_number" mode="outline"></ScInput>
								</div>
							</div>					
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Date Of Birth
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="personal_details.date_of_birth"
										v-flatpickr
										placeholder="Pick date..."
										:error-state="false"
										mode="outline"
									>
									</ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Gender
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.gender"
										:options="Gender"
										:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Relationship Status
								</label>
								<div class="uk-form-controls">
									<Select2
										v-model="personal_details.relationship_status"
										:options="relationshipStatus"
										:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
									></Select2>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Nationality
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="personal_details.nationality"
											:options="nationalities"
											:settings="{ 'width': '100%', 'placeholder': 'Select employee...', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<ScCardTitle>
								Contact Details
							</ScCardTitle>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Mobile Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.mobile_number" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Alternate Mobile Number
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.alternate_mobile_number" mode="outline"></ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Email Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.email_address" mode="outline"></ScInput>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Postal Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.postal_address"
										mode="outline"
										name="postal_address"
										:error-state="false"
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Residential Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.residential_address" mode="outline"></ScInput>
								</div>
							</div>	
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Permanent Address
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="contact_details.permanent_address" mode="outline"></ScInput>
								</div>
							</div>
						</div>		
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<ScCardTitle>
								Work Information
							</ScCardTitle>
						</ScCardHeader>
						<div class="uk-grid uk-margin-top" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Department
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.department_id"
											:options="Departments"
											:settings="{ 'width': '100%', 'placeholder': 'Select a department..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Section
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.section_id"
											:options="Sections"
											:settings="{ 'width': '100%', 'placeholder': 'Select a section..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Type
								</label>
								<div class="uk-form-controls">
									<client-only>
										<Select2
											v-model="work_details.employment_type"
											:options="EmploymentTypes"
											:settings="{ 'width': '100%', 'placeholder': 'Select a type..', allowClear: true }"
										></Select2>
									</client-only>
								</div>
							</div>
						</div>
						<div class="uk-grid" data-uk-grid>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Duration
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.employment_duration"
										:error-state="false"
										mode="outline"																					
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Employment Date
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.employment_date"
										v-flatpickr
										placeholder="Pick date..."
										:error-state="false"
										mode="outline"																					
									>
									</ScInput>
								</div>
							</div>
							<div class="uk-width-1-3@m">
								<label class="uk-form-label">
									Exit Date(YY-MM-DD)
								</label>
								<div class="uk-form-controls">
									<ScInput v-model="work_details.exit_date"
										v-flatpickr
										:error-state="false"
										mode="outline"	
										disabled																					
									>
									</ScInput>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Dependant Information
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addDependant">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
						<div v-for="(dependant, index) in dependants" :key="dependant.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid-match uk-grid" data-uk-grid>
										<div class="uk-width-1-4@m">
											<label>Full Name</label>
											<ScInput v-model="dependant.dependant_name" name="full_name" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-4@m">
											<label class="uk-form-label">
												Date of Birth
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="dependant.date_of_birth"
													v-flatpickr
													placeholder="Pick date..."
													:error-state="false"
													mode="outline"																				
												>
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-4@m">
											<label>Gender</label>
											<Select2
												v-model="dependant.gender"
												:options="Gender"
												:settings="{ 'width': '100%', 'placeholder': 'Select status...', allowClear: true }"
											></Select2>
										</div>
										<div class="uk-width-1-4@m">
											<label>Relation</label>
											<ScInput v-model="dependant.relation" name="relation" mode="outline" :error-state="false">													
											</ScInput>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeDependant(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>	
			<ScCard class="uk-margin-top">
				<ScCardBody>
					<form>
						<ScCardHeader separator>
							<div class="uk-flex uk-flex-middle">
								<div class="uk-flex-1">
									<ScCardTitle>
										Kin Information
									</ScCardTitle>
								</div>
								<div class="sc-actions">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-green-400" @click="addKin">
										<i class="mdi mdi-plus md-color-white"></i>
									</a>
								</div>
							</div>
						</ScCardHeader>
				
						<div v-for="(kin, index) in kins" :key="kin.id" class="sc-padding sc-form-section" :class="{'md-bg-grey-100' : index % 2}">
							<div class="uk-grid-match uk-grid" data-uk-grid>
								<div class="uk-width-expand@m">
									<div class="uk-grid-match uk-grid" data-uk-grid>
										<div class="uk-width-1-5@m">
											<label>Full Name</label>
											<ScInput v-model="kin.kin_name" name="full_name" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-5@m">
											<label>
												Relation
											</label>
											<div class="uk-form-controls">
												<ScInput v-model="kin.kin_relation" name="relation" mode="outline" :error-state="false">													
												</ScInput>
											</div>
										</div>
										<div class="uk-width-1-5@m">
											<label>Mobile Number</label>
											<ScInput v-model="kin.kin_mobile_number" name="mobile_number" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-5@m">
											<label>Email Address</label>
											<ScInput v-model="kin.kin_email_address" name="email_address" mode="outline" :error-state="false">													
											</ScInput>
										</div>
										<div class="uk-width-1-5@m">
											<label>Postal Address</label>
											<ScInput v-model="kin.kin_postal_address" name="postal_address" mode="outline" :error-state="false">													
											</ScInput>
										</div>
									</div>
								</div>
								<div class="uk-width-auto@m uk-flex-middle">
									<a href="javascript:void(0)" class="sc-button sc-button-icon sc-button-outline sc-button-outline-square sc-button-outline-primary md-bg-red-300" @click="removeKin(index)">
										<i class="mdi mdi-trash-can-outline md-color-white"></i>
									</a>
								</div>
							</div>
						</div>
					</form>
					<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
						<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(dependants,personal_details,work_details,contact_details,kins)">
							{{ buttonText }}
						</button>
					</div>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
import Select2 from '~/components/Select2'
import 'vue-good-table/dist/vue-good-table.css'
if(process.client) {
	require('~/plugins/flatpickr');
}
import { scHelpers } from "~/assets/js/utils";
const { uniqueID } = scHelpers;

export default {
	name: 'EmployeeForm',
	components: {
		ScInput,
		Select2
	},
	  props: {
	  	titleText: {
			type: String,
			required: true,
		},
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required: true
		},
		getRecord: {
			type: Function,
			required: false,
			default:null
		},
		hasSubmitButton:{
			type:Boolean,
			default:false
		}

	},
	data: () => ({
		responseMessage:'',
		personal_details:{
			first_name: '',
			middle_name:'',
			last_name:'',
			personal_identification_type:'',
			identification_number:'',
			date_of_birth:'',
			gender:'',
			relationship_status:'',
			nationality:'',
		},
		work_details:{
			department_id: '',
			section_id:'',
			employment_type:'',
			employment_duration:'',
			employment_date:'',
			exit_date:'',
		},
		contact_details:{
			mobile_number: '',
			alternate_mobile_number:'',
			email_address:'',
			postal_address:'',
			residential_address:'',
			permanent_address:'',
		},
		dependants: [
			{
				id: uniqueID(),
				dependant_name:'',
				date_of_birth:'',
				gender: '',
				relation: '',
			}
		],	
		kins:[
			{
				id: uniqueID(),
				kin_name:'',
				relation:'',
				kin_mobile_number: '',
				kin_postal_address: '',
				email_address:''
			}
		],
		status: [],				
		nationality: [],
		genders: [],	
		identification_types:[],
		EmploymentTypes:[],
		Sections:[],
		Departments:[]
	}),
	head () {
		return {
			'title': 'Employee | Create'
		}
	},
	computed: {
		relationshipStatus () {
			return this.status.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		Gender () {
			return this.genders.map(function (obj) {
				obj.id = obj.id || obj.id;
				obj.text = obj.text || obj.name;
				return obj;
			});
		},
		nationalities () {
			return this.nationality.map(function (obj) {
				obj.id = obj.id || obj.leave_type_id;
				obj.text = obj.text || obj.leave_type;
				return obj;
			});
		},
		IdentificationTypes (){
			return this.identification_types.map(function (obj) {
				obj.id = obj.id || obj.leave_type_id;
				obj.text = obj.text || obj.leave_type;
				return obj;
			});	
		}
		
	},
	mounted (){
		this.getRecord(this.dependants, this.personal_details, this.work_details, this.contact_details, this.kins)
	},
	methods: {
		addDependant () {
			this.dependants.push({
				id: uniqueID(),
				full_name:'',
				date_of_birth:'',
				gender: '',
				relation: '',
			})
		},
		addKin () {
			this.kins.push({
			    id: uniqueID(),
				full_name:'',
				relation:'',
				mobile_number: '',
				postal_address: '',
			})
		},
		removeDependant (index) {
			this.dependants.splice(index, 1);
	
		},
		removeKin (index) {
			this.kins.splice(index, 1);
	
		},
	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  
</style>
<style lang="scss" scoped>
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}
</style>