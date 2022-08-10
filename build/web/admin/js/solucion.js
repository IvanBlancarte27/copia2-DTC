let soluciones = [
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
export function inicializarSol()
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
    for (let i = 0; i < soluciones.length; i++)
    {
        //Vamos generando el contenido de la tabla dinamicamente:
        contenido = contenido + '<tr>' +
                '<td>' + soluciones[i].nombre + '</td>' +
                '<td>' + soluciones[i].marca + '</td>' +
                '<td>' + soluciones[i].precioCompra + '</td>' +
                '<td>' + soluciones[i].precioVenta + '</td>' +
                '<td>' + soluciones[i].existencias + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleAccesorio('+
                                                                    soluciones[i].idAccesorio+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodysoluciones').innerHTML = contenido;
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

        document.getElementById("txtCodigoAccesorio").value = soluciones[i].idAccesorio;
        document.getElementById("txtCodigoProducto").value = soluciones[i].idAccesorio;
        document.getElementById("txtNumeroUnico").value = soluciones[i].numeroUnico;
        document.getElementById("txtNombre").value = soluciones[i].nombre;
        document.getElementById("txtMarca").value = soluciones[i].marca;
        document.getElementById("txtPrecioCompra").value = soluciones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = soluciones[i].precioVenta;
        document.getElementById("txtExistencias").value = soluciones[i].existencias;

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
//dentro del arreglo de soluciones
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;i < soluciones.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (soluciones[i].idAccesorio === id) {
            return i; //Si son iguales, regresamos la posicion
        }
    }
    //Si llegamos hasta aqui significa que
    //que no encontramos el ID buscado y entonces
    //devolvemos -1

    return -1;
}

export function save()
{
    
    let pos = -1;
    
    let accesorio = {
                        idProducto  : 0,
                        idAccesorio : 0,
                        numeroUnico : 0,
                        nombre      : document.getElementById("txtNombre").value,
                        marca       : document.getElementById("txtMarca").value,
                        precioCompra: parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value)
                    };
                   
    if (document.getElementById("txtCodigoAccesorio").value.trim() === '') 
    {
        accesorio.idProducto = Date.now();
        accesorio.idAccesorio = Date.now() + 1;
        accesorio.numeroUnico = '' + Date.now() + 2;
        
        soluciones[soluciones.length]= accesorio;
        
        document.getElementById("txtCodigoProducto").value=accesorio.idProducto;
        document.getElementById("txtCodigoAccesorio").value=accesorio.idAccesorio;
        document.getElementById("txtNumeroUnico").value=accesorio.numeroUnico;
        
        mandarConfirmacionGuardar();
        
        fillTable();
    }
    else
    {
        accesorio.idProducto = parseInt(document.getElementById("txtCodigoProducto").value);
        accesorio.idAccesorio = parseInt(document.getElementById("txtCodigoAccesorio").value);
        accesorio.numeroUnico = document.getElementById("txtNumeroUnico").value;
        
        pos = buscarPosicionPorId(accesorio.idAccesorio);
        
        
        if (pos >= 0) 
        {
            soluciones[pos] = accesorio;
            
            mandarConfirmacionActualizar();
            
            fillTable();
        }
        else
        {
            mandarError();
        }
    }
}

export function remove()
{
    let pos = -1;
    if (document.getElementById("txtCodigoAccesorio").value.trim() !== '') {
        
        pos = buscarPosicionPorId(parseInt(document.getElementById("txtCodigoAccesorio").value));
        
        if (pos >= 0){
            soluciones.splice(pos, 1);
            
            mandarConfirmacionEliminar();
            
            fillTable();
            
            limpiarFormularioDetalle();
            
            setDetalleVisible(false);
        }
    }
}

export function limpiar_y_mostrarDetalle()
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}


