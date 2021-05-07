var base_url = 'http://localhost:3000/';


var login = "login";
var adminlogin = "adminlogin";
var getAllBookings = "fetchBookings";
var fetchCustomers= "fetchCustomers";
var fetchFeedbacks= "fetchFeedbacks";
var fetchAllBookings= "fetchAllBookings";
var register= "register";


var myProfile= "myProfile";

$(document).ready(function() {

	 
    $('#login_customer').click(() => {
        console.log('Login customer')
        const email = $('#txtusername').val();
        const  password  = $('#txtpassword').val();
        var user = { "username" : email , "password" : password };
        debugger
        $.post(base_url + login, user, (res) => {
            console.log("Customer",res);
            if (res.status == 200) {
				console.log(res);
				
				if (typeof(Storage) !== "undefined") {
				  // Store
				  localStorage.setItem("username", res.data[0].email);
				  localStorage.setItem("cid", res.data[0].id);
				  // Retrieve
				  setTimeout(function(){
					   $("#userprofile").append(localStorage.getItem("username"));
				   },500);
				 
				} else {

					setTimeout(function(){
					   $("#userprofile").append("Guest Customer");
				   },500);
					
			     
				  alert("Sorry, your browser does not support Web Storage...");
				}	
                window.location.href = "home.html";
            } else {
                alert("Invalid Credentials.");
            }
            console.log("Customer ", res)

        });
    });

    $('#login_admin').click(() => {
        console.log('Admin Login customer')
        const email  = $('#txtusername_admin').val();
        const  password = $('#txtpassword_admin').val();
        var user = {
            "username": email,
            "password": password
        };
        $.post(base_url + adminlogin, user, (res) => {
            console.log(res);
             if (res.status == 200) {
                window.location.href = "adminhome.html";
            } else {
                alert("Invalid Credentials.");
            }

            console.log("Admin Logged ", res)

        });
    });

    

  
});