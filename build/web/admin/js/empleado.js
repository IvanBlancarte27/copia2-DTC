let empleados = [
    {
        idEmpleado: 1,
        nombre: "Angel",
        apellido_paterno: "Juarez",
        apellido_materno: "Alvizo",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "NA",
        telefono_casa: "4765647384",
        telefono_movil: "4776452839",
        correo_electronico: "gallo@gmail.com",
        usuario: "empleadoGeneral",
        contraseña: "12345"
    },
    {
        idEmpleado: 2,
        nombre: "Keysi",
        apellido_paterno: "Cardona",
        apellido_materno: "Reyes",
        genero: "Femenino",
        estatus: "Inactivo",
        rfc: "NA",
        telefono_casa: "4763526364",
        telefono_movil: "4778491202",
        correo_electronico: "qeso@gmail.com",
        usuario: "admin",
        contraseña: "54321"
    },
    {
        idEmpleado: 3,
        nombre: "Alan",
        apellido_paterno: "Contreras",
        apellido_materno: "Sanchez",
        genero: "Masculino",
        estatus: "Activo",
        rfc: "NA",
        telefono_casa: "4778642536",
        telefono_movil: "4768492363",
        correo_electronico: "cuasi@gmail.com",
        usuario: "empleadoJorge",
        contraseña: "67890"
    }
];

//inicializar
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
    for (let i = 0; i < empleados.length; i++)
    {

        //Generar numero unico
        let letra1 = empleados[i].apellido_paterno.substring(0, 2);
        let letra2 = empleados[i].apellido_materno.substring(0, 1);

        let numero_unico = letra1 + letra2 + "-" + Math.floor(Math.random() * 9999);
        //fin numero unico

        contenido = contenido + '<tr>' +
                '<td>' + empleados[i].nombre + '</td>' +
                '<td>' + empleados[i].apellido_paterno + '</td>' +
                '<td>' + empleados[i].apellido_materno + '</td>' +
                '<td>' + empleados[i].genero + '</td>' +
                '<td>' + empleados[i].estatus + '</td>' +
                '<td>' + numero_unico + '</td>' +
                '<td>' + empleados[i].rfc + '</td>' +
                '<td>' + empleados[i].telefono_casa + '</td>' +
                '<td>' + empleados[i].telefono_movil + '</td>' +
                '<td>' + empleados[i].correo_electronico + '</td>' +
                '<td>' + empleados[i].usuario + '</td>' +
                '<td>' + empleados[i].contraseña + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleEmpleado('+
                                                                    empleados[i].idEmpleado+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyEmpleado').innerHTML = contenido;
}
//Muestra y oculta el detalle del Accesorio
export function setDetalleVisible(valor)
{
    //El tripe igual es para comparar valores
    //Cuando es con doble igual es para comparar objetos
    if (valor === true)
    {
        document.getElementById("divDetalle").style.display = "";
        document.getElementById("divCatalogo").style.display = "none";
    } else
    {
        document.getElementById("divDetalle").style.display = "none";
        document.getElementById("divCatalogo").style.display = "";
    }
}

export function mostrarDetalleEmpleado(idEmpleado)
{
    let i = -1;

    //Buscamos la posicion del accesorio
    i = buscarPosicionPorId(idEmpleado);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos del accesorio

        document.getElementById("txtNombreE").value = empleados[i].nombre;
        document.getElementById("txtApellidoPaternoE").value = empleados[i].apellido_paterno;
        document.getElementById("txtApellidoMaternoE").value = empleados[i].apellido_materno;
        document.getElementById("txtCorreoElectronico").value = empleados[i].correo_electronico;
        document.getElementsByName("rbtnGenero").value = empleados[i].genero;
        document.getElementsByName("rbtnEstatus").value = empleados[i].estatus;
        document.getElementById("txtTelefonoCasa").value = empleados[i].telefono_casa;
        document.getElementById("txtTelefonoMovil").value = empleados[i].telefono_movil;
        document.getElementById("txtUsuario").value = empleados[i].usuario;
        document.getElementById("pwdContraseña").value = empleados[i].contraseña;

    } else //Se supone que esto nunca debe suceder
        alert('Empleado No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
    document.getElementById("txtNombreE").value = "";
        document.getElementById("txtApellidoPaternoE").value = "";
        document.getElementById("txtApellidoMaternoE").value = "";
        document.getElementById("txtCorreoElectronico").value = "";
        document.getElementsByName("rbtnGenero").value = "";
        document.getElementsByName("rbtnEstatus").value = "";
        document.getElementById("txtTelefonoCasa").value = "";
        document.getElementById("txtTelefonoMovil").value = "";
        document.getElementById("txtUsuario").value = "";
        document.getElementById("pwdContraseña").value = "";
}


//Buscar la posicion de un Accesorio
//dentro del arreglo de accesorios
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;i < empleados.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (empleados[i].idEmpleado === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}


