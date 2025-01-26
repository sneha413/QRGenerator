let input = document.getElementById("textQR");
let image = document.getElementById("imgbox");


function generater(){
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
}
