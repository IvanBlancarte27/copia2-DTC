//Creamos el arreglo de empleados:
let empleados = [
    {
        idEmpleado: 1,
        numeroUnicoEmpleado: "JUA6374",
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
        numeroUnicoEmpleado: "CAR4567",
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
        numeroUnicoEmpleado: "COS456",
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
    for (let i = 0; i < empleados.length; i++)
    {
        contenido = contenido + '<tr>' +
                '<td>' + empleados[i].nombre + '</td>' +
                '<td>' + empleados[i].apellido_paterno + '</td>' +
                '<td>' + empleados[i].apellido_materno + '</td>' +
                '<td>' + empleados[i].genero + '</td>' +
                '<td>' + empleados[i].estatus + '</td>' +
                '<td>' + empleados[i].numeroUnicoEmpleado + '</td>' +
                '<td>' + empleados[i].rfc + '</td>' +
                '<td>' + empleados[i].telefono_casa + '</td>' +
                '<td>' + empleados[i].telefono_movil + '</td>' +
                '<td>' + empleados[i].correo_electronico + '</td>' +
                '<td>' + empleados[i].usuario + '</td>' +
                '<td>' + empleados[i].contraseña + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleEmpleado(' +
                empleados[i].idEmpleado + ');">Ver Detalle</a></td>' +
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
        document.getElementById("txtRFC").value = empleados[i].rfc;
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
    document.getElementById("txtRFC").value = "";
    document.getElementById("pwdContraseña").value = "";
}


//Buscar la posicion de un Accesorio
//dentro del arreglo de accesorios
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;
    i < empleados.length; i++)
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

//Guardar los datos de un empleado (insert/update)
export function save()
{
    //declaramos una variable temporal para saber la posición del empleado
    let pos = -1;
    //Definimos los atributos y valores del empleado
    let empleado = {
        idEmpleado: 0,
        numeroUnicoEmpleado = 0,
        nombre: document.getElementById("txtNombre").value,
        apellido_paterno: document.getElementById("txtApellidoPaterno").value,
        apellido_materno: document.getElementById("txtApellidoMaterno").value,
        genero: document.getElementById("txtGenero").value,
        estatus: document.getElementById("txtEstatus").value,
        rfc: document.getElementById("txtRFC").value,
        telefono_casa: document.getElementById("txtTelefonoCasa").value,
        telefono_movil: document.getElementById("txtTelefonoMovil").value,
        correo_electronico: document.getElementById("txtCorreoElectronico").value,
        usuario: document.getElementById("txtUsuario").value,
        contraseña: document.getElementById("txtContraseña").value
    }
    //Revisamos si hay algun valor en la caja de texto del id del empleado:
    //El trin quita espacios a la derecha e izquierda
    if (document.getElementById("txtNumeroUnicoEmpleado").value.trim() === '')
    {
        //generamos un id para el empleado a partir de los milisegundos de la fecha actual
        empleado.idEmpleado = Date.now();

        //Generar numero unico
        let letra1 = empleado.apellido_paterno.substring(0, 2);
        let letra2 = empleado.apellido_materno.substring(0, 1);

        empleado.numeroUnicoEmpleado = letra1 + letra2 + Date.now() + 1;

        //Insertamos el empleado al final del arreglo
        empleados[empleados.length] = empleado;

        //Colocamos los id generados en las cajas de texto para evitar duplicados
        document.getElementById("txtNumeroUnicoEmpleado").value = empleado.numeroUnicoEmpleado;
        document.getElementById("txtIdEmpleado").value = empleado.idEmpleado;

        //Mostramos un mensaje al usuario
        mandarConfirmacionGuardar();
        
        //Actualizamos la tabla
        fillTable();
    } else
    {
        //Si el accesorio ya tiene un id, lo tomamos para actualizar sus datos:
        empleado.idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value);
        empleado.numeroUnicoEmpleado = document.getElementById("txtNumeroUnicoEmpleado").value;
        
        //Buscamos la posición del objeto:
        pos = buscarPosicionPorId(empleado.idEmpleado);
        
        //Revisamos que tengamos una posición valida:
        if (pos >=0)
        {
            //Remplazamos el objeto en la posición encontrada:
            empleados[pos] = empleado;
            
            //Mostramos un mensaje al usuario:
            mandarConfirmacionGuardar();
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            alert("Error: Empleado no Encontrado.");
        }        
    }
}

//Eliminar un empleado
export function remove()
{
    let pos = -1;
    if (document.getElementById("txtIdEmpleado").value.trin()!="")
    {
        //Buscamos la posición del empleado:
        pos = buscarPosicionPorId(parseInt(document.getElementById("txtIdEmpleado").value));
        
        //revisamos que tengamos una posición valida:
        if (pos>=0)
        {
            //revisamos al empleado en la posición encontrada
            empleados.splice(pos,1);
            
            //mostramos un mensaje de notificación al usuario:
            mandarConfirmacionEliminar();
            
            //actualizamos la tabla:
            fillTable();
            
            //limpiamos el formulario:
            limpiarFormularioDetalle();
            
            //mostramos la tabla:
            setDetalleVisible(false);
        }
    }
}

export function limpiar_y_mostrarDetalle() 
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}




