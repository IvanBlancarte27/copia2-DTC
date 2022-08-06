let accesorios = [
    {
        idProducto: 1,
        idAccesorio: 2,
        numeroUnico:"ABC15268",
        nombre: "Estuche",
        marca: "Sin Marca",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15
    },
    {
        idProducto: 2,
        idAccesorio: 3,
        numeroUnico:"IBL358",
        nombre: "Cuerda sujecion",
        marca: "Gukci",
        precioCompra: 5.90,
        precioVenta: 25.00,
        existencias: 1
    },
    {
        idProducto: 3,
        idAccesorio: 4,
        numeroUnico:"KAD258",
        nombre: "Paño de microfibra",
        marca: "Fendik",
        precioCompra: 15.90,
        precioVenta: 250.00,
        existencias: 5
    }

];
export function inicializar()
{
    setDetalleVisible(false);
    fillTable();
}
/**
 * Llena una tabla a partir de un Arreglo JSON.
 */
export function fillTable()
{
    //Declaramos una variable donde se guardara el contenido de la tabla:
    let contenido = '';
    //Recorrer el Arreglo
    for (let i = 0; i < accesorios.length; i++)
    {
        //Vamos generando el contenido de la tabla dinamicamente:
        contenido = contenido + '<tr>' +
                '<td>' + accesorios[i].nombre + '</td>' +
                '<td>' + accesorios[i].marca + '</td>' +
                '<td>' + accesorios[i].precioCompra + '</td>' +
                '<td>' + accesorios[i].precioVenta + '</td>' +
                '<td>' + accesorios[i].existencias + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleAccesorio('+
                                                                    accesorios[i].idAccesorio+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyAccesorios').innerHTML = contenido;
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

export function mostrarDetalleAccesorio(idAccesorio)
{
    let i = -1;

    //Buscamos la posicion del accesorio
    i = buscarPosicionPorId(idAccesorio);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos del accesorio

        document.getElementById("txtCodigoAccesorio").value = accesorios[i].idAccesorio;
        document.getElementById("txtCodigoProducto").value = accesorios[i].idAccesorio;
        document.getElementById("txtNumeroUnico").value = accesorios[i].numeroUnico;
        document.getElementById("txtNombre").value = accesorios[i].nombre;
        document.getElementById("txtMarca").value = accesorios[i].marca;
        document.getElementById("txtPrecioCompra").value = accesorios[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = accesorios[i].precioVenta;
        document.getElementById("txtExistencias").value = accesorios[i].existencias;

    } else //Se supone que esto nunca debe suceder
        alert('Accesorio No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
    document.getElementById("txtCodigoAccesorio").value = "";
    document.getElementById("txtCodigoProducto").value = "";
    document.getElementById("txtNumeroUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
}


//Buscar la posicion de un Accesorio
//dentro del arreglo de accesorios
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;i < accesorios.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (accesorios[i].idAccesorio === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}


