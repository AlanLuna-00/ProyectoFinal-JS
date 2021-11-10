$('.nav-link').on('click', function() {
    $('navbar-collapse').collapse('hide');  
})

let emailInput = $('#floatingEmail').val();
let nameInput = $('#floatingName').val();

$('#buttonConfirm').on('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Gracias por su compra`,
        text: 'Le hemos enviado un Email con los pasos a seguir',
        showConfirmButton: false,
        timer: 2000,
        footer: 'SportShoes - Todos los derechos reservados ©'
      })
})