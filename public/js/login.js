$( function() {

    $('.loginButton').on('click', (e) => {
        e.preventDefault();
        if ($('#username').val() !== "" && 
        $('#pass').val() !== "") {
            let url = '/users/login'
            let user = {
                username: $('#username').val(),
                password: $('#pass').val(),
            }

            $.post(url, user, (response) => {
                if(response.error == false ) {
                    alert(response.message);
                    window.location.href = "http://127.0.0.1:3000/main.html";
                } else { 
                    alert(response.message);
                }
            })
            
        } else {
            $('.loginerrors').slideDown('slow').html('<p class="error">Rellene los campos, no pueden estár vacíos</p>');
      setTimeout(function() {
        $('.loginerrors').slideUp('slow');
      }, 10000);
        }
        
    })
})