let soluciones = [
    {
        idProducto: 1,
        idSolucion: 2,
        numeroUnico:"ABC15268",
        nombre: "Estuche",
        marca: "Sin Marca",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15
    },
    {
        idProducto: 2,
        idSolucion: 3,
        numeroUnico:"IBL358",
        nombre: "Cuerda sujecion",
        marca: "Gukci",
        precioCompra: 5.90,
        precioVenta: 25.00,
        existencias: 1
    },
    {
        idProducto: 3,
        idSolucion: 4,
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
                '<td><a href="#" onclick="cm.mostrarDetalleSolucion('+
                                                                    soluciones[i].idSolucion+');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodySolucion').innerHTML = contenido;
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

export function mostrarDetalleSolucion(idSolucion)
{
    let i = -1;

    //Buscamos la posicion de solucion
    i = buscarPosicionPorId(idSolucion);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario
        
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con los datos de solucion

        document.getElementById("txtCodigoSolucion").value = soluciones[i].idSolucion;
        document.getElementById("txtCodigoProducto").value = soluciones[i].idSolucion;
        document.getElementById("txtNumeroUnico").value = soluciones[i].numeroUnico;
        document.getElementById("txtNombre").value = soluciones[i].nombre;
        document.getElementById("txtMarca").value = soluciones[i].marca;
        document.getElementById("txtPrecioCompra").value = soluciones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = soluciones[i].precioVenta;
        document.getElementById("txtExistencias").value = soluciones[i].existencias;

    } else //Se supone que esto nunca debe suceder
        alert('Solucion No encontrado.');
       
       //Mostramos el formulario que llenamos previamente
       setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
    document.getElementById("txtCodigoSolucion").value = "";
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
        if (soluciones[i].idSolucion === id) {
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
    
    let solucion = {
                        idProducto  : 0,
                        idSolucion  : 0,
                        numeroUnico : 0,
                        nombre      : document.getElementById("txtNombre").value,
                        marca       : document.getElementById("txtMarca").value,
                        precioCompra: parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value)
                    };
                   
    if (document.getElementById("txtCodigoSolucion").value.trim() === '') 
    {
        solucion.idProducto = Date.now();
        solucion.idSolucion = Date.now() + 1;
        solucion.numeroUnico = '' + Date.now() + 2;
        
        soluciones[soluciones.length]= soluciones;
        
        document.getElementById("txtCodigoProducto").value=solucion.idProducto;
        document.getElementById("txtCodigoSolucion").value=solucion.idSolucion;
        document.getElementById("txtNumeroUnico").value=solucion.numeroUnico;
        
        mandarConfirmacionGuardar();
        
        fillTable();
    }
    else
    {
        soluciones.idProducto = parseInt(document.getElementById("txtCodigoProducto").value);
        soluciones.idSolucion = parseInt(document.getElementById("txtCodigoSolucion").value);
        soluciones.numeroUnico = document.getElementById("txtNumeroUnico").value;
        
        pos = buscarPosicionPorId(soluciones.idSolucion);
        
        
        if (pos >= 0) 
        {
            soluciones[pos] = soluciones;
            
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
    if (document.getElementById("txtCodigoSolucion").value.trim() !== '') {
        
        pos = buscarPosicionPorId(parseInt(document.getElementById("txtCodigoSolucion").value));
        
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


