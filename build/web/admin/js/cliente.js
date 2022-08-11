let clientes = [
    {
        idClientes: 1,
        nombre: "Ivan",
        apellido_paterno: "Blancarte",
        apellido_materno: "Aguayo",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "IBAL1027",
        telefono_casa: "4771189966",
        telefono_movil: "4775862341",
        correo_electronico: "iblancarte583@gmail.com"
    },
    {
        idClientes: 2,
        nombre: "Alexis",
        apellido_paterno: "Villanueva",
        apellido_materno: "Blancarte",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "ALEX285",
        telefono_casa: "4772853694",
        telefono_movil: "4774560398",
        correo_electronico: "alexblan2@gmail.com"
    },
    {
        idClientes: 3,
        nombre: "Mariana",
        apellido_paterno: "Angulo",
        apellido_materno: "Camarillo",
        genero: "Femenino",
        estatus: "Activo",
        rfc: "MARIAN258",
        telefono_casa: "4770369764",
        telefono_movil: "4772579036",
        correo_electronico: "marAn25@gmail.com"
    }
];

//iniciarlizar
export function inicializar()
{
    setDetalleVisible(false);
    fillTable();
}
//finInicializar

/**
 * Llena una tabla a partir de un Arreglo JSON.
 */
export function fillTable()
{
    //Declaramos una variable donde se guardara el contenido de la tabla:
    let contenido = '';
    //Recorrer el Arreglo
    for (let i = 0; i < clientes.length; i++)
    {

        //Generar numero unico
        let letra1 = clientes[i].apellido_paterno.substring(0, 2);
        let letra2 = clientes[i].apellido_materno.substring(0, 1);

        let numero_unico = letra1 + letra2 + "-" + Math.floor(Math.random() * 9999);
        //fin numero unico

        contenido = contenido + '<tr>' +
                '<td>' + clientes[i].nombre + '</td>' +
                '<td>' + clientes[i].apellido_paterno + '</td>' +
                '<td>' + clientes[i].apellido_materno + '</td>' +
                '<td>' + clientes[i].genero + '</td>' +
                '<td>' + clientes[i].estatus + '</td>' +
                '<td>' + clientes[i].rfc + '</td>' +
                '<td>' + clientes[i].telefono_casa + '</td>' +
                '<td>' + clientes[i].telefono_movil + '</td>' +
                '<td>' + clientes[i].correo_electronico + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleCliente('+
                                                                    clientes[i].idClientes+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyClientes').innerHTML = contenido;
}
//Muestra y oculta el detalle del Accesorio
export function setDetalleVisible(valor)
{
    //El tripe igual es para comparar valores
    //Cuando es con doble igual es para comparar objetos
    if (valor === true)
    {
        document.getElementById("divDetalle").style.display = "";
        document.getElementById("divReporte").style.display = "none";
    } else
    {
        document.getElementById("divDetalle").style.display = "none";
        document.getElementById("divReporte").style.display = "";
    }
}

export function mostrarDetalleCliente(idClientes)
{
    let i = -1;

    //Buscamos la posicion del accesorio
    i = buscarPosicionPorId(idClientes);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos del accesorio

        document.getElementById("txtNombreC").value = clientes[i].nombre;
        document.getElementById("txtApellidoPaternoC").value = clientes[i].apellido_paterno;
        document.getElementById("txtApellidoMaternoC").value = clientes[i].apellido_materno;
        document.getElementById("txtCorreoElectronico").value = clientes[i].correo_electronico;
        document.getElementsByName("rbtnGenero").value = clientes[i].genero;
        document.getElementsByName("rbtnEstatus").value = clientes[i].estatus;
        document.getElementById("txtTelefonoCasa").value = clientes[i].telefono_casa;
        document.getElementById("txtTelefonoMovil").value = clientes[i].telefono_movil;
        

    } else //Se supone que esto nunca debe suceder
        alert('Cliente No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
    document.getElementById("txtNombreC").value = "";
        document.getElementById("txtApellidoPaternoC").value = "";
        document.getElementById("txtApellidoMaternoC").value = "";
        document.getElementById("txtCorreoElectronico").value = "";
        document.getElementsByName("rbtnGenero").value = "";
        document.getElementsByName("rbtnEstatus").value = "";
        document.getElementById("txtTelefonoCasa").value = "";
        document.getElementById("txtTelefonoMovil").value = "";
}


//Buscar la posicion de un Accesorio
//dentro del arreglo de accesorios
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;i < clientes.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (clientes[i].idClientes === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}


