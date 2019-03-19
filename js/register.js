$(document).ready(function(){
	var reg_head = $('#regLabel', window.parent.document);

			// Custom method to validate username
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) || /^[a-zA-Z0-9]*$/i.test(value);
			}, "Username must contain only letters, numbers");
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
					rules: {
						username: {
							required: true,
							usernameRegex: true,
							minlength: 6,
						},
						password : {
							required: true,
						},
						reg_type : {
							required: true,
						},
						reg_group : {
							required: true,
						},
						field_email : {
							required: true,
							email: true
						},
						field_dob: {
							date: true
						},
						state_addr : {
							required: true
						},
						gender : {
							required: true,
							minlength: 5
						},
						conf_password : {
							required: true,
							equalTo: '#password',
						},
						company:{
							required: true,
						},
						url:{
							required: true,
						},
						name: {
							required: true,
							minlength: 3,
						},
						email: {
							required: true,
							minlength: 3,
						},

					},
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

				if (form.valid() === true){

					console.log('form is good '+$('#participant_information').is(":visible"));
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
    var next_exp = 0;
    $("#add-more1").click(function(e){
        e.preventDefault();
        var addto = "#fielda" + next_exp;
        var addRemove = "#fielda" + (next_exp);
        next_exp = next_exp + 1;
        var newInp = ' <div id="fielda'+ next_exp +'" name="field1'+ next_exp +'"><div class="form-group"><label class="col-md-3">Job Title</label><div class="col-md-7"><input type="text"  name="job_tit[]" id="job_tit" class="form-control" placeholder="e.g. Java/php Developer" required> </div><br><br><br><!-- Text input--><div class="form-group"><label class="col-md-3">Company</label><div class="col-md-7"><input type="text"  name="company[]" id="company" class="form-control" placeholder="" required> </div> <div><br><br><!-- Text input--><div class="form-group"><label class="col-md-3">City</label> <div class="col-md-7"><input type="text"  name="city[]" id="city" class="form-control" placeholder="" required></div></div><br><br><!-- Text input--><div class="form-group"><label class="col-md-3">Time period</label><div class="col-md-8"><div class="col-md-3"><select class="form-control"  name="work_from[]" ><option value="1995">    1995	</option><option value="1996">	1996	</option><option value="1997">	1997	</option><option value="1998">	1998	</option><option value="1999">	1999	</option><option value="2000">	2000	</option><option value="2001">	2001	</option><option value="2002">	2002	</option><option value="2003">	2003	</option><option value="2004">	2004	</option><option value="2005">	2005	</option><option value="2006">	2006	</option><option value="2007">	2007	</option><option value="2008">	2008	</option><option value="2009">	2009	</option><option value="2010">	2010	</option><option value="2011">	2011	</option><option value="2012">	2012	</option><option value="2013">	2013	</option><option value="2014">	2014	</option><option value="2015">	2015	</option><option value="2016">	2016	</option></select></div><div class="col-md-1"><label>To</label></div><div class="col-md-3"><select class="form-control"  name="work_to[]" ><option value="1980">	1980	</option><option value="2000">	2000	</option><option value="2001">	2001	</option><option value="2002">	2002	</option><option value="2003">	2003	</option><option value="2004">	2004	</option><option value="2005">	2005	</option><option value="2006">	2006	</option><option value="2007">	2007	</option><option value="2008">	2008	</option><option value="2009">	2009	</option><option value="2010">	2010	</option><option value="2011">	2011	</option><option value="2012">	2012	</option><option value="2013">	2013	</option><option value="2014">	2014	</option><option value="2015">	2015	</option><option value="2016">	2016	</option><option value="2017">	2017	</option><option value="2018">	2018	</option><option value="2019">	2019	</option><option value="2020">	2020	</option></select></div></div></div><br><br><div class="form-group"><input type="checkbox" name="cur_work[]" value="cur_work"> I currently work here<br></div><br><hr></div>';
        var newInput = $(newInp);

        var removeBtn = '<button id="remove' + (next_exp - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field"><br>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#fielda" + next_exp).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next_exp);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#fielda" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });


    //@naresh action dynamic childs
		var nextpart = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + nextpart;
        var addRemove = "#field" + (nextpart);
        nextpart = nextpart + 1;
				reg_head.find('.regCount').html(nextpart);
				var newpart = '<div id="field'+ nextpart +'" name="field'+ nextpart +'"><div class="form-group"><label class="col-lg-4 control-label">Full name</label><div class="col-lg-8"><input type="text"  name="field_name[]" class="form-control" maxlength="100" placeholder="Enter your first and last name seperated by a space." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Email</label><div class="col-lg-8"><input type="email"  name="field_email[]" class="form-control" placeholder="Enter your email." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Date of birth (You must be minimum 18 years to register)</label><div class="col-lg-8"><input type="date"  name="field_dob[]" class="form-control" placeholder="Enter your date of birth." required></div></div><div class="form-group"><label for="" class="col-lg-4 control-label">Gender</label><div class="col-lg-8"><select class="form-control" name="gender[]"><option value="">Please select</option><option value="m">Male</option><option value="f">Female</option></select></div></div><div class="form-group"><label class="col-lg-4 control-label">Street address</label><div class="col-lg-8"><input type="text"  name="street_addr[]" class="form-control" placeholder="Enter your street address. Eg. 296 wood st" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Suburb</label><div class="col-lg-8"><input type="text"  name="suburb_addr[]" class="form-control" placeholder="Enter your suburb." required></div></div><div class="form-group"><label for="" class="col-lg-4 control-label">State</label><div class="col-lg-8"><select class="form-control" name="state_addr[]"><option value="">Please select</option><option value="nsw">NSW</option><option value="vic">VIC</option><option value="act">ACT</option><option value="sa">SA</option><option value="tas">TAS</option><option value="wa">WA</option><option value="nt">NT</option></select></div></div><div class="form-group"><label class="col-lg-4 control-label">Post code</label><div class="col-lg-8"><input type="number"  name="post_addr[]" class="form-control" placeholder="Enter your postcode." max="9999" min="1999" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Contact number</label><div class="col-lg-8"><input type="number"  name="contact[]" class="form-control" placeholder="Enter your mobile or phone number." max="9999" min="9999999999" required></div></div><div class="form-group"><label class="col-lg-4 control-label">Parish / Community</label><div class="col-lg-8"><input type="text"  name="field_comm[]" class="form-control" maxlength="100" placeholder="Enter parish or community you belong to." required></div></div><div class="form-group"><label class="col-lg-4 control-label">Medical Conditions</label><div class="col-lg-8"><textarea class="form-control rounded-0" name="medical[]" rows="3"></textarea></div></div><div class="form-group"><label class="col-lg-4 control-label">Special diet</label><div class="col-lg-8"><textarea class="form-control rounded-0" name="diet[]" rows="3"></textarea></div></div><hr></div>';

        var newInput = $(newpart);

        var removeBtn = '<button id="remove' + (nextpart - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + nextpart).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(nextpart);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });


		});
