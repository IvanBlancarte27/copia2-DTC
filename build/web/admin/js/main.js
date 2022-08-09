//Se declara la variable cm(Cargar Modulo) 
let cm=null;

function cargarModuloEmpleado()
{
    //AJAX: Asynchronous
    fetch('empleado/empleado.html')
    .then(respuesta => {
        //Devolvemos el contenido
        //de la respuesta en formato
        //texto:
        return respuesta.text();
                       })
    .then(datos => {
        
        //Insertamos el codigo HTML
        //dentro del contenedor principal
        document.getElementById('contenedor_principal').innerHTML=datos;
                 
        import('./empleado.js').then(obj => {
                    cm=obj;
                    cm.inicializar();
                    
                });
             });  
}

function cargarModuloCliente()
{
     //AJAX: Asynchronous
    fetch('cliente/cliente.html')
    .then(respuesta => {
        //Devolvemos el contenido
        //de la respuesta en formato
        //texto:
        return respuesta.text();
                       })
    .then(datos => {
        
        //Insertamos el codigo HTML
        //dentro del contenedor principal
        document.getElementById('contenedor_principal').innerHTML=datos;
                 
        import('./cliente.js').then(obj => {
                    cm=obj;
                    cm.inicializar();
                    
                });
             });   
}

function cargarModuloAccesorio()
{
    //AJAX: Asynchronous
    fetch('producto/accesorio/accesorio.html')
    .then(respuesta => {
        //Devolvemos el contenido
        //de la respuesta en formato
        //texto:
        return respuesta.text();
                       })
    .then(datos => {
        
        //Insertamos el codigo HTML
        //dentro del contenedor principal
        document.getElementById('contenedor_principal').innerHTML=datos;
                 
        import('./accesorio.js') 
                .then(obj => {
                    cm=obj;
                    cm.inicializar();
                    
                });
             });
}

function cargarModuloSolucion()
{
    //AJAX: Asynchronous
    fetch('producto/solucion/solucion.html')
    .then(respuesta => {
        //Devolvemos el contenido
        //de la respuesta en formato
        //texto:
        return respuesta.text();
                       })
    .then(datos => {
        
        //Insertamos el codigo HTML
        //dentro del contenedor principal
        document.getElementById('contenedor_principal').innerHTML=datos;
                 
        import('./solucion.js') 
                .then(obj => {
                    cm=obj;
                    cm.inicializar();
                    
                });
             });
}
