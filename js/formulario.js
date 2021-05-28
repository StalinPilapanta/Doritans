document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593995276111";


    let cliente = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let resp = document.querySelector("#respuesta");

    let familiares = [];
    let familiar1 = document.getElementById("chkFamiliar1");
    let familiar2 = document.getElementById("chkFamiliar2");
    let familiar3 = document.getElementById("chkFamiliar3");
    let familiar4 = document.getElementById("chkFamiliar4");
    let familiar5 = document.getElementById("chkFamiliar5");
    let familiar6 = document.getElementById("chkFamiliar6");

    if (familiar1.checked) {
        familiares.push(familiar1.value);
    }

    if (familiar2.checked) {
        familiares.push(familiar2.value);
    }
    if (familiar3.checked) {
        familiares.push(familiar3.value);
    }
    if (familiar4.checked) {
        familiares.push(familiar4.value);
    }
    if (familiar5.checked) {
        familiares.push(familiar5.value);
    }
    if (familiar6.checked) {
        familiares.push(familiar6.value);
    }


    let medianos = [];

    let mediano1 = document.getElementById("chkMediano1");
    let mediano2 = document.getElementById("chkMediano2");
    let mediano3 = document.getElementById("chkMediano3");

    if (mediano1.checked) {
        medianos.push(mediano1.value);
    }
    if (mediano2.checked) {
        medianos.push(mediano2.value);
    }
    if (mediano3.checked) {
        medianos.push(mediano3.value);
    }


    let personales = [];

    let personal1 = document.getElementById("chkPersonal1");
    let personal2 = document.getElementById("chkPersonal2");
    let personal3 = document.getElementById("chkPersonal3");
    let personal4 = document.getElementById("chkPersonal4");
    let personal5 = document.getElementById("chkPersonal5");
    let personal0 = document.getElementById("chkPersonal0");

    if (personal1.checked) {
        personales.push(personal1.value);
    }
    if (personal2.checked) {
        personales.push(personal2.value);
    }
    if (personal3.checked) {
        personales.push(personal3.value);
    }
    if (personal4.checked) {
        personales.push(personal4.value);
    }
    if (personal5.checked) {
        personales.push(personal5.value);
    }
    if (personal0.checked) {
        personales.push(personal0.value);
    }

    resp.classList.remove("fail");
    resp.classList.remove("send");

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Doritans Broaster_*%0A
        *Hola me llamo*%0A
        ${cliente}%0A%0A
        *Mi Dirección es:*%0A
        ${direccion}%0A%0A
        *Pedido*%0A%0A
		*Pedido Familiar: *%0A
		${familiares}%0A%0A
		*Pedido Mediano: *%0A
		${medianos}%0A%0A
        *Pedido Personal: *%0A
		${personales}%0A%0A
		*¿Cuál es el total de mi compra?*%0A%0A%0A`;

    if (cliente === "" || direccion === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

    window.open(url);
});