$("#mostrartexto").click(CambiarTexto);
function CambiarTexto(){
    var passwordField = $('#contraseña');
    var fieldType = passwordField.attr('type');
    
    if (fieldType === 'password') {
        passwordField.attr('type', 'text');
    } else {
        passwordField.attr('type', 'password');
    }

}