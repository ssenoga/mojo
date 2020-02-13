$(document).ready(function(){
    const login = $('#login');

    const uname = $('#uname');
    const password = $('#password').text();

    // add an eventlistener to the login button
    login.on('click',function(e){

        console.log(uname.html());
        e.preventDefault();
    })
});