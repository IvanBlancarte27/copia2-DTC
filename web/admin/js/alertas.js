function mandarConfirmacionEliminar()
{
    alert("Se Elimino Correctamente");
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
