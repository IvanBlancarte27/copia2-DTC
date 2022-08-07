function mandarConfirmacionEliminar()
{
    alert("Se Elimino Correctamente");
}

function mandarConfirmacionCambios()
{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: '¿Está seguro en modificar?',
        text: "No podra revertir los cambios!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, modificar',
        cancelButtonText: 'cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
        } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
            swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'modificación cancelada'
                    );
        }
    });
}

function mandarConfirmacionGuardar()
{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Guardado correctamente',
        showConfirmButton: false,
        timer: 1500
    });
}

function mandarNotificación()
{
    alert("Se Envio la Notificación");
}

function mandarNotificacion()
{
    let cliente = document.getElementById('txtNumeroUnicoCliente').value;
    alert("Se Notificó al Cliente " + cliente);
}

function cancelarPresupuesto()
{
    let presupuesto = document.getElementById('txtClaveUnicaPresupuesto').value;
    alert("El Presupuesto " + presupuesto + " se ha Cancelado.");
}
