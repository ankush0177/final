var base_url = 'http://localhost:3000/';
//var register_customer = "register";
var login = "login";
var register = "register";

$(document).ready(function() {


    $('#login_customer').click(() => {
        console.log('Login customer')
        const email = $('#txtusername').val();
        const password = $('#txtpassword').val();
        var user = { "username": email, "password": password };
        debugger
        $.post(base_url + login, user, (res) => {
            console.log("Customer", res);
            if (res.status == 200) {
                console.log(res);
                // Check browser support
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("username", res.data[0].email);
                    localStorage.setItem("cid", res.data[0].id);
                    // Retrieve
                    setTimeout(function() {
                        $("#userprofile").append(localStorage.getItem("username"));
                    }, 500);

                } else {

                    setTimeout(function() {
                        $("#userprofile").append("Guest Customer");
                    }, 500);


                    alert("Sorry, your browser does not support Web Storage...");
                }
                window.location.href = "home.html";
            } else {
                alert("Invalid Credentials.");
            }
            console.log("Customer ", res)

        });
    });

});