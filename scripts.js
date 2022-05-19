function myFunction() {

    var type = document.getElementById("formSelect").value;
    var amount = document.getElementById("formAmount").value;
    var price = 200;

    if (type == 1) {
        // Estudiante

        result = amount * (price * 0.2);

    } else if (type == 2) {
        // Trainee

        result = amount * (price * 0.5);

    } else {
        // Junior

        result = amount * (price * 0.85);

    }

    document.getElementById("price").innerHTML = result;

}

function erase() {
    document.getElementById("formSelect").value = 1;
    document.getElementById("formAmount").value = 1;
    document.getElementById("price").innerHTML = 0;
}