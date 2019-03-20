$(document).ready(function(){
	var reg_head = $('#regLabel', window.parent.document);
  
			// Custom method to validate username
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
			}, "Username must contain only letters, numbers");
			$(".alert-close").click(function(){
				$(".alert-grp-number").fadeTo("fast", 0);
			});
			$(".next").click(function(){
				var form = $("#myform");
				form.validate({
					errorElement: 'span',
					errorClass: 'help-block',
					highlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').addClass("has-error");
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').removeClass("has-error");
					},
					// rules: {
					// 	username: {
					// 		required: true,
					// 		usernameRegex: true,
					// 		minlength: 6,
					// 	},
					// 	password : {
					// 		required: true,
					// 	},
					// 	reg_type : {
					// 		required: true,
					// 	},
					// 	reg_group : {
					// 		required: true,
					// 	},
					// 	field_email : {
					// 		required: true,
					// 		email: true
					// 	},
					// 	field_dob: {
					// 		date: true
					// 	},
					// 	state_addr : {
					// 		required: true
					// 	},
					// 	gender : {
					// 		required: true,
					// 		minlength: 5
					// 	},
					// 	conf_password : {
					// 		required: true,
					// 		equalTo: '#password',
					// 	},
					// 	company:{
					// 		required: true,
					// 	},
					// 	url:{
					// 		required: true,
					// 	},
					// 	name: {
					// 		required: true,
					// 		minlength: 3,
					// 	},
					// 	email: {
					// 		required: true,
					// 		minlength: 3,
					// 	},
					//
					// },
					messages: {
						username: {
							required: "Username required",
						},
						password : {
							required: "Password required",
						},
						conf_password : {
							required: "Password required",
							equalTo: "Password don't match",
						},
						name: {
							required: "Name required",
						},
						email: {
							required: "Email required",
						}
					}
				});
				$('.this-required').each(function() {
				   $(this).rules("add", {
				      required: true
				   });
				});
				$('.this-date').each(function() {
				   $(this).rules("add", {
				      required: true,
							date: true
				   });
				});
				$('.this-email').each(function() {
				   $(this).rules("add", {
				      required: true,
							email: true
				   });
				});
				let valid_group = false;
				if($("#reg_type").val() === "2") {
					valid_group = true;
				} else {
					var totalReg = parseInt(reg_head.find('.regCount').html());
					if(totalReg > 4) {
						valid_group = true;
					} else {
						if(!$('#participant_information').is(":visible")) {
							valid_group = true;
						} else {
							$('.alert-grp-number').fadeTo( "fast", 1 );
						}

					}
				}
				if (form.valid() === true && valid_group){

					if ($('#account_information').is(":visible")){
						current_fs = $('#account_information');
						next_fs = $('#participant_information');
					}else if($('#participant_information').is(":visible")){
						current_fs = $('#participant_information');
						next_fs = $('#personal_information');
					}


					next_fs.show();

if($('#participant_information').is(":visible")){


	if($("#reg_type").val() === "2") {

		$("#add-more").hide();
		$("#grp_leader").hide();
	} else {
		reg_head.show();
	}
 }
					if($('#personal_information').is(":visible")){
						var totalReg = reg_head.find('.regCount').html();

						if(totalReg === "0") {

							reg_head.find('.regCount').html("1");
						}
					}
					current_fs.hide();
				}
			});


			$('#previous').click(function(){
				if($('#participant_information').is(":visible")){
					current_fs = $('#participant_information');
					next_fs = $('#account_information');
				}else if ($('#personal_information').is(":visible")){
					current_fs = $('#personal_information');
					next_fs = $('#participant_information');
				}
				next_fs.show();
				current_fs.hide();
			});

    //@naresh action dynamic childs
		var nextpart = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + nextpart;
        var addRemove = "#field" + (nextpart);
        nextpart = nextpart + 1;
				reg_head.find('.regCount').html(nextpart);
				var newpart = '<div id="field'+ nextpart +'" name="field'+ nextpart +'"><div class="form-group"><label class="col-lg-4 control-label">Full name</label><div class="col-lg-8"><input type="text"  name="field_name'+ nextpart +'" class="form-control this-required" maxlength="100" placeholder="Enter your first and last name seperated by a space." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Email</label><div class="col-lg-8"><input type="email" name="field_email'+ nextpart +'" class="form-control this-required this-email" placeholder="Enter your email." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Date of birth (You must be minimum 18 years to register)</label><div class="col-lg-8"><input type="date" name="field_dob'+ nextpart +'" class="form-control this-required this-date" placeholder="Enter your date of birth." required></div></div><div class="form-group"><label for="" class="col-lg-4 control-label">Gender</label><div class="col-lg-8"><select class="form-control this-required" name="gender'+ nextpart +'"><option value="">Please select</option><option value="m">Male</option><option value="f">Female</option></select></div></div><div class="form-group"><label class="col-lg-4 control-label">Street address</label><div class="col-lg-8"><input type="text"  name="street_addr'+ nextpart +'" class="form-control this-required" placeholder="Enter your street address. Eg. 296 wood st" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Suburb</label><div class="col-lg-8"><input type="text" name="suburb_addr'+ nextpart +'" class="form-control this-required" placeholder="Enter your suburb." required></div></div><div class="form-group"><label for="" class="col-lg-4 control-label">State</label><div class="col-lg-8"><select class="form-control this-required" name="state_addr'+ nextpart +'"><option value="">Please select</option><option value="nsw">NSW</option><option value="vic">VIC</option><option value="act">ACT</option><option value="sa">SA</option><option value="tas">TAS</option><option value="wa">WA</option><option value="nt">NT</option></select></div></div><div class="form-group"><label class="col-lg-4 control-label">Post code</label><div class="col-lg-8"><input type="number" name="post_addr'+ nextpart +'" class="form-control this-required" placeholder="Enter your postcode." max="9999" min="1999" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Contact number</label><div class="col-lg-8"><input type="number" name="contact'+ nextpart +'" class="form-control this-required" placeholder="Enter your mobile or phone number." min="9999" max="9999999999" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Parish / Community</label><div class="col-lg-8"><input type="text" name="field_comm'+ nextpart +'" class="form-control this-required" maxlength="100" placeholder="Enter parish or community you belong to." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Medical Conditions</label><div class="col-lg-8"><textarea class="form-control rounded-0" name="medical'+ nextpart +'" rows="3"></textarea></div></div><div class="form-group"><label class="col-lg-4 control-label">Special diet</label><div class="col-lg-8"><textarea class="form-control rounded-0" name="diet'+ nextpart +'" rows="3"></textarea></div></div><hr></div>';

        var newInput = $(newpart);

        var removeBtn = '<button id="remove' + (nextpart - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + nextpart).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(nextpart);
				$.validator.addClassRules("this-required", {
				     required: true
				});
				// newInput.find('.form-control').each(function() {
        //     $(this).rules("add",
        //         {
        //             required: true
        //         })
        // });

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });


		});
