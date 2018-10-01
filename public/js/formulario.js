$(function () {
    /** inicializa el modal emergente,  y valida que no se pueda cerrar de ninguna manera */
    $('#exampleModalCenter').modal({ backdrop: 'static', keyboard: false });
   
    /**
     **  Evento click para el boton del modal emergente que permite validar,
     * si el valor del input de usuario es diferente de vacio entonces pueda guardarlo en una variable
     * local llamada username y se cierre el modal, de lo contrario se envia una alerta,
     * indicando que no se permite el envio mientras el valor del nombre de usuario 
     * este vacio.
     */
   
    //$('#errorAlert').hide()
   
    // Escuchar el boton para guardar
   $('#registerUser').on('click', (e) => {
       e.preventDefault();
       checkContrasena()
       if ($('#username').val() !== "" && $('#gmail').val() !== "" && $('#contrasena').val() !== "" && ($('input[name="Sexo"]').is(':checked'))) {
         let url = '/users/registro'
         let user = {
             username: $('#username').val(),
             gmail: $('#gmail').val(),
             password: $('#contrasena').val(),
             sexo: $('input:checked')[0].value
         }
         $.post(url, user, function(confirm) {
           alert(confirm)
           window.location.href = "http://127.0.0.1:3000/index.html"
       })
   
       } else {
          $('#errorAlert').slideDown('slow').html('<div class="row message">'+
                                                    '<div class="col-md-11">'+
                                                      '<span class="">Rellene los campos, no pueden estár vacíos</span>'+
                                                    '</div>'+
                                                    '<div class="col-md-1">'+
                                                     '<i class="fas fa-times iconclose"></i>'+
                                                    '</div>'+
                                                  '</div>');

          setTimeout(function() {
            $('#errorAlert').slideUp('slow');
         }, 20000);
       }
       
   })
   
   function checkContrasena(){
     let contrasena = $('#contrasena').val();
     let repContrasena = $('#contrasenadRepetd').val();
   
     if (contrasena===repContrasena) {
       getDatos();
   
     }else {
         $('.errorPass').slideDown('slow').html('<p class="error">La contraseña no coenciden</p>');
         setTimeout(function() {
           $('.errorPass').slideUp('slow');
       }, 2000);
     }
   }
   
   function getDatos(){
       var form_data = new FormData();
       form_data.append('username', $('#username').val());
       form_data.append('gmail', $('#gmail').val());
       form_data.append('password', $('contrasena').val());
       form_data.append('sexo', $('input:checked').value);
     }
   
   });
   