let armazones = [
    {
        idArmazones: 1,
        nombre: "blackcaze",
        marca: "Sin Marca",
        modelo: "chichifli",
        color: "verde",
        descripcion: "blablabla",
        codigoBarras: "OQ-126584",
        fotografia: "",
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
        codigoBarras: "OQ-16845",
        fotografia: "",
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
        codigoBarras: "OQ-136975",
        fotografia: "",
        dimenciones: "",
        precioCompra: 129.90,
        precioVenta: 350.00,
        existencias: 15,
        estatus: "Activo"
    }

];
export function inicializarArmazon()
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
                '<td>' + armazones[i].precioCompra + '</td>' +
                '<td>' + armazones[i].precioVenta + '</td>' +
                '<td>' + armazones[i].existencias + '</td>' +
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

export function mostrarDetalleArmazon(idArmazones)
{
    let i = -1;

    //Buscamos la posicion de solucion
    i = buscarPosicionPorId(idArmazones);

    //Revisamos que sea una posicion valida
    if (i >= 0)
    {
        //Limpiamos formulario

        limpiarFormularioDetalle();

        //Llenamos el formulario con los datos de solucion

        document.getElementById("txtNombreAr").value = armazones[i].nombre;
        document.getElementById("txtMarcaAr").value = armazones[i].marca;
        document.getElementById("txtModeloAr").value = armazones[i].modelo;
        document.getElementById("colorAr").value = armazones[i].color;
        document.getElementById("txtDescripcionAr").value = armazones[i].descripcion;
        document.getElementById("txtCodigoBarrasAr").value = armazones[i].codigoBarras;
        document.getElementById("txtDimensionesAr").value = armazones[i].dimenciones;
        document.getElementById("txtPrecioCompraAr").value = armazones[i].precioCompra;
        document.getElementById("txtPrecioVentaAr").value = armazones[i].precioVenta;
        document.getElementById("txtExistenciasAr").value = armazones[i].existencias;
        document.getElementById("txtCodigoArmazon").value=armazones[i].idArmazones;

    } else //Se supone que esto nunca debe suceder
        alert('Armazon No encontrado.');

    //Mostramos el formulario que llenamos previamente
    setDetalleVisible(true);
}


export function limpiarFormularioDetalle()
{
    document.getElementById("txtNombreAr").value = "";
    document.getElementById("txtMarcaAr").value = "";
    document.getElementById("txtModeloAr").value = "";
    document.getElementById("colorAr").value = "";
    document.getElementById("txtDescripcionAr").value = "";
    document.getElementById("txtCodigoBarrasAr").value = "";
    document.getElementById("txtDimensionesAr").value = "";
    document.getElementById("txtPrecioCompraAr").value = "";
    document.getElementById("txtPrecioVentaAr").value = "";
    document.getElementById("txtExistenciasAr").value = "";
    document.getElementById("txtCodigoArmazon").value = "";
}


//Buscar la posicion de un Accesorio
//dentro del arreglo de soluciones
//con base en el idAccesorio
function buscarPosicionPorId(id)
{
    for (let i = 0;i <armazones.length; i++)
    {
        //Comparamos si el ID del Accesorio en la posicion
        //actual, es igual al id que nos pasan como parametro:
        if (armazones[i].idArmazones === id) {
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
        codigoBarras: 0,
        nombre: document.getElementById("txtNombreAr").value,
        marca: document.getElementById("txtMarcaAr").value,
        modelo: document.getElementById("txtModeloAr").value,
        color: document.getElementById("colorAr").value,
        descripcion: document.getElementById("txtDescripcionAr").value,
        dimenciones: document.getElementById("txtDimensionesAr").value,
        precioCompra: parseFloat(document.getElementById("txtPrecioCompraAr").value),
        precioVenta: parseFloat(document.getElementById("txtPrecioVentaAr").value),
        existencias: parseFloat(document.getElementById("txtExistenciasAr").value)


    };

    if (document.getElementById("txtCodigoBarrasAr").value.trim() === '')
    {
        armazon.idArmazon = Date.now()+ 1;
        
        let letra1 = "O";
        let letra2 = "Q-";

        armazon.codigoBarras = letra1 + letra2 + (Date.now() + 1);

        armazones[armazones.length] =armazon;

        document.getElementById("txtCodigoArmazon").value = armazon.idArmazon;
        document.getElementById("txtCodigoBarrasAr").value = armazon.codigoBarras;

        mandarConfirmacionGuardar();

        fillTable();
    } else
    {
        armazon.idArmazon=parseInt(document.getElementById("txtCodigoArmazon").value);
        armazon.codigoBarras=document.getElementById("txtCodigoBarrasAr").value;

        pos = buscarPosicionPorId(armazon.idArmazon);

        if (pos >= 0)
        {
            armazones[pos] = armazon;

            mandarConfirmacionActualizar();

            fillTable();
        } else
        {
           alert("Error: Armazon no Encontrado.");
        }
    }
}

export function remove()
{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Esta Seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            let pos = -1;
            if (document.getElementById("txtCodigoArmazon").value.trim() !== '') {

                pos = buscarPosicionPorId(parseInt(document.getElementById("txtCodigoArmazon").value));

                if (pos >= 0) {
                    armazones.splice(pos, 1);

                    swalWithBootstrapButtons.fire(
                            'Eliminado!',
                            'Se elimino correctamente.',
                            'success'
                            )

                    fillTable();

                    limpiarFormularioDetalle();

                    setDetalleVisible(false);
                }
            }
        } else if (
                result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire(
                    'Cancelado',
                    '',
                    'error'
                    )
        }
    })
}

export function limpiar_y_mostrarDetalle()
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}
