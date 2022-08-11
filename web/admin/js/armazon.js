let armazones = [
    {
        idArmazones: 1,
        nombre: "blackcaze",
        marca: "Sin Marca",
        modelo: "chichifli",
        color: "verde",
        descripcion: "blablabla",
        codigoBarras: "",
        dimenciones: "",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo"
    },
    {
        idArmazones: 2,
        nombre: "blackcaze",
        marca: "Sin Marca",
        modelo: "chichifli",
        color: "verde",
        descripcion: "blablabla",
        odigoBarras: "",
        dimenciones: "",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo"
    },
    {
        idArmazones: 3,
        nombre: "blackcaze",
        marca: "Sin Marca",
        modelo: "chichifli",
        color: "verde",
        descripcion: "blablabla",
        odigoBarras: "",
        dimenciones: "",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo"
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
    for (let i = 0; i < armazones.length; i++)
    {
        //Vamos generando el contenido de la tabla dinamicamente:
        contenido = contenido + '<tr>' +
                '<td>' + armazones[i].nombre + '</td>' +
                '<td>' + armazones[i].marca + '</td>' +
                '<td>' + armazones[i].modelo + '</td>' +
                '<td>' + armazones[i].color + '</td>' +
                '<td>' + armazones[i].descripcion + '</td>' +
                '<td>' + armazones[i].codigoBarras + '</td>' +
                '<td>' + armazones[i].dimenciones + '</td>' +
                '<td>' + armazones[i].precioCompra + '</td>' +
                '<td>' + armazones[i].precioVenta + '</td>' +
                '<td>' + armazones[i].existencias + '</td>' +
                '<td>' + armazones[i].estatus + '</td>' +
                '<td><a href="#" onclick="cm.mostrarDetalleArmazon(' +
                armazones[i].idArmazones + ');">Ver Detalle</a></td>' +
                '</tr>';
    }
    document.getElementById('tbodyArmazon').innerHTML = contenido;
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

export function mostrarDetalleArmazon(idArmazon)
{
    let i = -1;

    //Buscamos la posicion de solucion
    i = buscarPosicionPorId(idArmazon);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario

        limpiarFormularioDetalle();

        //Llenamos el formulario con los datos de solucion

        //document.getElementById("txtCodigoBarras").value = armazones[i].codigoBarras;
        document.getElementById("txtNombre").value = armazones[i].nombre;
        document.getElementById("txtMarca").value = armazones[i].marca;
        document.getElementById("txtModelo").value = armazones[i].modelo;
        //document.getElementById("colorAccesorio").value = armazones[i].color;
        document.getElementById("txtDescripcion").value = armazones[i].descripcion;
        document.getElementById("txtDimensiones").value = armazones[i].dimenciones;
        document.getElementById("txtPrecioCompra").value = armazones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = armazones[i].precioVenta;
        document.getElementById("txtExistencias").value = armazones[i].existencias;
        document.getElementByName("rbtnActivo").value = armazones[i].estatus;



    } else //Se supone que esto nunca debe suceder
        alert('Armazon No encontrado.');

    //Mostramos el formulario que llenamos previamente
    setDetalleVisible(true);
}


export function limpiarFormularioDetalle()

{
    document.getElementById("txtCodigoArmazon").value = "";
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
    for (let i = 0;
    i < armazones.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (armazones[i].idSolucion === id) {
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

    let armazon = {
        
        idArmazones: 0,
        nombre: document.getElementById("txtNombre").value,
        marca: document.getElementById("txtMarca").value,
        modelo: document.getElementById("txtModelo").value,
        color:document.getElementById("colorAccesorio").value,
        descripcion:document.getElementById("txtDescripcion").value,
        codigoBarras:document.getElementById("txtCodigoBarras").value,
        dimenciones:document.getElementById("txtDescripcion").value,
        precioCompra:parseFloat(document.getElementById("txtPrecioCompra")).value,
        precioVenta: parseFloat(document.getElementById("txtPrecioVenta")).value,
        existencias: document.getElementById("txtExistencias").value,
        estatus:document.getElementById("rbtnActivo").value
   
    };

    if (document.getElementById("txtCodigoArmazon").value.trim() === '')
    {
        armazones.idProducto = Date.now();
        armazones.idArmazon = Date.now() + 1;
        armazones.numeroUnico = '' + Date.now() + 2;

        armazones[armazones.length] = armazones;

        document.getElementById("txtCodigoProducto").value = armazones.idProducto;
        document.getElementById("txtCodigoArmazon").value = armazones.idAccesorio;
        document.getElementById("txtNumeroUnico").value = armazones.numeroUnico;

        mandarConfirmacionGuardar();

        fillTable();
    } else
    {
        armazones.idProducto = parseInt(document.getElementById("txtCodigoProducto").value);
        armazones.idArmazon = parseInt(document.getElementById("txtCodigoArmazon").value);
        armazones.numeroUnico = document.getElementById("txtNumeroUnico").value;

        pos = buscarPosicionPorId(armazones.idSolucion);


        if (pos >= 0)
        {
            armazones[pos] = armazones;

            mandarConfirmacionActualizar();

            fillTable();
        } else
        {
            mandarError();
        }
    }
}

export function remove()
{
    let pos = -1;
    if (document.getElementById("txtCodigoArmazon").value.trim() !== '') {

        pos = buscarPosicionPorId(parseInt(document.getElementById("txtCodigoArmazon").value));

        if (pos >= 0) {
            armazones.splice(pos, 1);

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

