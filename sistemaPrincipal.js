// INICIO DEL SISTEMA


// FUNCION PARA GUARDAR PRODUCTOS EN LOCALSTORAGE
function guardarProductosEnLocalStorage() {
    console.log("Función guardarProductosEnLocalStorage llamada!");
    localStorage.setItem("productosArray", JSON.stringify(productosArray));
    localStorage.setItem("productosCategoria", JSON.stringify(productosCategorias));
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
}

function cargarProductosDesdeLocalStorage() {
    console.log("Función cargarProductosDesdeLocalStorage llamada!");
    const productosLocalStorage = localStorage.getItem("productosArray");
    if (productosLocalStorage) {
        productosArray = JSON.parse(productosLocalStorage);
    }

    const categoriasLocalStorage = localStorage.getItem("productosCategoria");
    if (categoriasLocalStorage) {
        productosCategorias = JSON.parse(categoriasLocalStorage); // Corregido el nombre de la variable
    }
    const carritoJSON = localStorage.getItem("carrito");
    
    if (carritoJSON) {
        carrito = JSON.parse(carritoJSON);
    }
}

//FUNCION PARA LIMPIAR LOS DATOS DEL LOCALSTORE
document.getElementById("limpiar-local-store").addEventListener("click", function() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ha restaurado el sistema",
        showConfirmButton: false,
        timer: 1500
      });
    localStorage.clear();
    
    // Espera 1 segundo (1000 milisegundos) antes de recargar la página
    setTimeout(function() {
        location.reload();
    }, 1000);
});

document.getElementById("actualizar-sistema").addEventListener("click", function(){
   
    location.reload();
})

//ARRAY SISTEMA
//ARRAY PRODUCTOS
let productosArray = [{id: 0,
    nombre: "Unidad SSD 1TB",
    descripcion: "El disco WD Blue SN580 NVMe SSD potencia los flujos de trabajo creativos, ya que ofrece capacidad de respuesta de las aplicaciones para múltiples proyectos. El diseño de bajo consumo prolonga la duración de la batería, de modo que puede seguir trabajando o creando cuando esté en el lugar.",
    precio: 12990,
    precioRebajado: 10990,
    cantidad: 12,
    sku: "SDDWD01",
    fecha: "8/11/2023 10:19:54",
    imagen: "img/productos/ssd.jpg",
    categoria: "SSD"
},
{id: 1,
    nombre: "Notebook Laptop HP",
    descripcion: "Diseñada para tu productividad y entretenimiento desde cualquier lugar,",
    precio: 519990,
    precioRebajado:"",
    cantidad: 12,
    sku: "NTBKHP01",
    fecha: "8/11/2023 10:30:54",
    imagen: "img/productos/notebook.jpg",
    categoria: "NOTEBOOK"
}
,
{id: 2,
    nombre: "Discos Duros PC WD",
    descripcion: "Opta por la fiabilidad y la eficacia con el disco duro Western Digital Blue. Este disco duro de Western Digital, silencioso y ecológico, incorpora una interfaz SATA III",
    precio: 63990,
    precioRebajado: 4990,
    cantidad: 12,
    sku: "HDWD",
    fecha: "8/11/2023 11:30:54",
    imagen: "img/productos/hd.jpg",
    categoria: "DISCO DURO"
}
,
{id: 3,
    nombre: "Smartphone Redmi",
    descripcion: "Smartphone Redmi 12 256GB/8GB 5G Negro Liberado",
    precio: 261990,
    precioRebajado: 224990,
    cantidad: 24,
    sku: "TELXIA",
    fecha: "8/11/2023 11:13:54",
    imagen: "img/productos/celular.jpg",
    categoria: "TELEFONO"
}
,
{id: 4,
    nombre: "Tablet Galaxy Tab S9",
    descripcion: "Tablet Galaxy Tab S9 FE PLUS 12.4 pulgadas 12GB 256GB WiFi Octa Core Android Gray",
    precio: 731990,
    precioRebajado: 709990,
    cantidad: 24,
    sku: "TABSAN",
    fecha: "5/11/2023 09:13:54",
    imagen: "img/productos/tablet.jpg",
    categoria: "TABLET"
}
,
{id: 6,
    nombre: "Memoria Notebook 16GB CRUCIAL",
    descripcion: "Memoria Notebook 16GB SoDimm DDR4 3200MHz Value RAM",
    precio: 42990,
    precioRebajado: 39990,
    cantidad: 24,
    sku: "MEMO16GBCR",
    fecha: "4/11/2023 09:13:54",
    imagen: "img/productos/memoriaram.jpg",
    categoria: "MEMORIAS RAM"
}
]; 


// Defino un arreglo para almacenar productos
console.log("Array productos llamada!",productosArray)
//ARRAY CATEGORIAS
let productosCategorias = [
    { id: 1, categoria: "Notebook" },
    { id: 3, categoria: "Discos Duros" },
    { id: 4, categoria: "SSD" },
    { id: 5, categoria: "Teléfonos" },
    { id: 6, categoria: "Tablet" },
    { id: 7,categoria: "Memorias RAM" }
];

//ARRAY CARRITO
let carrito=[]
/* let productosCategorias = []; */

console.log("Array categorias llamada! : ",productosCategorias)

//ARRAY IMAGENES EN OFERTA
const imagenes = [
    "img/BANNER1.jpg", 
    "img/BANNER-2.jpg"  
];




let nombresDuplicados = new Set(); // Defino un conjunto para llevar un seguimiento de los nombres duplicados
const categoriasPredefinidas = new Set([]);

// Obtengo productos almacenados en localStorage al cargar la página
cargarProductosDesdeLocalStorage();
//Muestro las funciones para cargar al comienzo DEL PROGRAMA
mostrarCarrito()

mostrarCarrito()
mostrarProductos()
mostrarProductosTienda()



/* mostrarProductoIndividualOferta()  */
crearCheckboxesCategorias(productosCategorias);
console.log("Array categorias llamada! : ",productosCategorias)
console.log("Array productos llamada!",productosArray)


document.addEventListener("DOMContentLoaded", function () {
    const carritoDropdown = document.getElementById("carritoDropdown");

    // Agregar un manejador de eventos para el clic en el menú
    carritoDropdown.addEventListener("click", function (e) {
        e.stopPropagation(); // Evitar que el evento se propague y cierre el menú
    });
    mostrarTotalCarrito()
});

// HORA Y FECHA 
// Obtén la fecha y hora actual
const fechaHora = new Date();

// Define las partes de la fecha (día, mes y año)
const dia = fechaHora.getDate();
const mes = fechaHora.getMonth() + 1; // Meses comienzan en 0 (enero) y sumamos 1
const año = fechaHora.getFullYear();

// Define las partes de la hora (hora, minuto y segundo)
const hora = fechaHora.getHours();
const minuto = fechaHora.getMinutes();
const segundo = fechaHora.getSeconds();

// Formatea la fecha y hora como "día/mes/año hora:minuto:segundo"
const fechaHoraFormateada = `${dia}/${mes}/${año} ${hora}:${minuto}:${segundo}`;


// FUNCION MENSAJE DE ALERTA CON TIEMPO
const mensajeAlerta = document.getElementById("mensaje-alerta");
function mostrarMensaje(mensaje) {
    console.log("Función mostrarMensaje llamada!");
    mensajeAlerta.textContent = mensaje;
    setTimeout(function () {
        mensajeAlerta.textContent = ""; // Borra el contenido del mensaje
    }, 3000);
}

// Obtiene los valores seleccionados de los checkboxes
function obtenerCategoriasSeleccionadas() {
    const checkboxes = document.querySelectorAll('input[name="categorias"]:checked');
    const categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
    return categoriasSeleccionadas;
}


// FUNCION AGREGAR PRODUCTOS (AÑADIR NUEVO PRODUCTO O EDITAR)

document.addEventListener("DOMContentLoaded", function () {
    const miformulario = document.getElementById("formulario");
    miformulario.addEventListener("submit", agregarProductosSistema);
    mostrarProductos();
    mostrarProductosTienda();
    
});


function obtenerCategoriaSeleccionada() {
    const categoriasSeleccionadas = document.querySelectorAll('input[name="categorias"]:checked');
    if (categoriasSeleccionadas.length === 0) {
        return "Sin Categoría"; // Asigna "Sin Categoría" si no se selecciona ninguna categoría
    } else {
        const categorias = Array.from(categoriasSeleccionadas).map(categoria => categoria.value);
        return categorias[0];
    }
}


//FUNCION AGREGAR PRODUCTOS

function agregarProductosSistema(evento) {
    document.getElementById("boton-publicar-productos").addEventListener("click", agregarProductosSistema);
    console.log("Función agregarProductosSistema llamada!");
    evento.preventDefault();

    let formulario = document.getElementById("formulario"); // Obtén el formulario correctamente
    const categoriasSeleccionadas = obtenerCategoriasSeleccionadas();

    // Obtiene los valores de los campos del formulario
    let nombre = formulario.querySelector("#nombre").value.trim().toUpperCase();
    let descripcion = formulario.querySelector("#descripcion-producto").value;
    let precio = parseFloat(formulario.querySelector("#precio").value);
    let precioRebajado = parseFloat(formulario.querySelector("#precio-rebajado").value);
    let cantidad = parseInt(formulario.querySelector("#cantidad").value);
    let categoria = obtenerCategoriaSeleccionada();
    let fechaHoraIngreso = fechaHoraFormateada; // Reemplaza con la fecha adecuada
    let sku = formulario.querySelector("#sku").value.trim().toUpperCase();
    let imagen = "";  // Inicializa la variable de la imagen

    // Obtén el archivo de imagen seleccionado por el usuario
    let imagenInput = formulario.querySelector("#imagen");
    let imagenFile = imagenInput.files[0];

    // Verifica si se seleccionó un archivo
    if (imagenFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            // El contenido de la imagen está en event.target.result
            let imagenBase64 = event.target.result;
            imagen = imagenBase64;

            // Continuar con el resto del código de la función
            continuarConRestoDelCodigo();
        };

        reader.readAsDataURL(imagenFile);
    } else {
        // Si no se seleccionó una imagen, continúa con el resto del código
        continuarConRestoDelCodigo();
    }

    function continuarConRestoDelCodigo() {
        if (nombre === "") {
            const mensajeError = "Por favor, ingresa un nombre de producto válido.";
            mostrarMensaje(mensajeError);
            return;
        }
        if (precio === null || isNaN(precio) || precio <= 0) {
            const mensajeError = "Error: Debes especificar un precio válido para el producto.";
            mostrarMensaje(mensajeError);
            return;
        }
        if (precio <= 0 || isNaN(precio)) {
            const mensajeError = "Error: Debes especificar un precio válido y mayor que cero para el producto.";
            mostrarMensaje(mensajeError);
            return;
        }

        if (precioRebajado >= precio) {
            const mensajeError = "Error: El precio rebajado debe ser inferior al precio normal";
            mostrarMensaje(mensajeError);
            return;
        }
        if (precioRebajado < 0 || precioRebajado >= precio) {
            const mensajeError = "Error: El precio rebajado debe ser mayor o igual a cero y menor que el precio normal.";
            mostrarMensaje(mensajeError);
            return;
        }
        if (categoriasSeleccionadas.length === 0) {
            const mensajeError = "Error: Debes seleccionar al menos una categoría para el producto.";
            mostrarMensaje(mensajeError);
            return;
        }

        if (categoria === "") {
            const mensajeError = "Error: Debes seleccionar una categoría para el producto.";
            mostrarMensaje(mensajeError);
            return;
        }

        if (!isNaN(cantidad) && cantidad >= 1) {
            const productoExistente = productosArray.find(function (producto) {
                return producto.nombre === nombre;
            });

            if (productoExistente) {
                productoExistente.precio = precio;
                productoExistente.precioRebajado = precioRebajado;
                productoExistente.descripcion = descripcion;
                productoExistente.cantidad += cantidad;
                productoExistente.fechaHoraIngreso = fechaHoraIngreso;
                productoExistente.sku = sku;

                formulario.reset();
                const mensaje = `Se actualizó la cantidad de "${cantidad}" del producto "${nombre}" en el sistema!`;
                mostrarMensaje(mensaje);
            } else {
                const agregarDatosArray = { nombre: nombre, descripcion: descripcion, precio: precio, precioRebajado: precioRebajado, cantidad: cantidad, sku: sku, fecha: fechaHoraIngreso, imagen: imagen, categoria: categoria };
                productosArray.push(agregarDatosArray);
                const mensaje = `Producto "${nombre}" agregado al sistema!`;
                mostrarMensaje(mensaje);

                formulario.reset();
                guardarProductosEnLocalStorage();
                mostrarProductos();
                mostrarProductosTienda();
                console.log("Array productos llamada!", productosArray);
                console.log("Array categorías llamada! : ", productosCategorias);

                nombresDuplicados.add(nombre);
            }
        } else {
            const mensajeError = "Algunos campos están vacíos o contienen valores inválidos.";
            mostrarMensaje(mensajeError);
        }
    }
}


//FUNCION MOSTRAR PRODUCTOS SISTEMA 

function mostrarProductos() {
    console.log("Función mostrarProductos llamada!");
    const listaProductos = document.getElementById("mostrar-Productos");
    listaProductos.innerHTML = "";

    if (productosArray.length > 0) {
        for (let i = 0; i < productosArray.length; i++) {
            const producto = productosArray[i];
            const fila = document.createElement("tr");

            const numCelda = document.createElement("td");
            numCelda.textContent = i + 1;

         
            const imagenCelda = document.createElement("td");
            const imagenElement = document.createElement("img");
            imagenElement.src = producto.imagen; 
            imagenElement.alt = producto.nombre; 
            imagenElement.width = 50; 
            imagenCelda.appendChild(imagenElement);

            const nombreCelda = document.createElement("td");
            nombreCelda.textContent = producto.nombre;

            const precioCelda = document.createElement("td");
            precioCelda.textContent = `$${producto.precio}`;

            const precioRebajadoCelda = document.createElement("td");
            precioRebajadoCelda.textContent = producto.precioRebajado ? `$${producto.precioRebajado}` : "";

            const cantidadCelda = document.createElement("td");

            const decrementarBoton = document.createElement("button");
            decrementarBoton.textContent = "-";
            decrementarBoton.classList.add("btn", "btn-dec", "mr-1");
            decrementarBoton.addEventListener("click", () => decrementarCantidad(i));

            const cantidadSpan = document.createElement("span");
            cantidadSpan.textContent = producto.cantidad;
            cantidadSpan.classList.add("mr-1");

            const incrementarBoton = document.createElement("button");
            incrementarBoton.textContent = "+";
            incrementarBoton.classList.add("btn", "btn-in");
            incrementarBoton.addEventListener("click", () => incrementarCantidad(i));

            cantidadCelda.appendChild(decrementarBoton);
            cantidadCelda.appendChild(cantidadSpan);
            cantidadCelda.appendChild(incrementarBoton);

            const categoriaCelda = document.createElement("td");
            categoriaCelda.textContent = producto.categoria;

            const skuCelda = document.createElement("td");
            skuCelda.textContent = producto.sku ? producto.sku : "No especificado"; 

            const fechaCelda = document.createElement("td");
            fechaCelda.textContent = producto.fecha; 

            const eliminarBoton = document.createElement("button");
            eliminarBoton.textContent = "Eliminar";
            eliminarBoton.classList.add("btn", "btn-eliminar-sistema");
            eliminarBoton.addEventListener("click", () => eliminarProducto(i));

            fila.appendChild(numCelda);
            fila.appendChild(imagenCelda); // Agregar la celda de la imagen
            fila.appendChild(nombreCelda);
            fila.appendChild(precioCelda);
            fila.appendChild(precioRebajadoCelda);
            fila.appendChild(cantidadCelda);
            fila.appendChild(categoriaCelda);
            fila.appendChild(skuCelda);
            fila.appendChild(fechaCelda);
            /* fila.appendChild(editarBoton); */
            fila.appendChild(eliminarBoton);

            listaProductos.appendChild(fila);
        }
    } else {
        console.log("No hay productos en el sistema.");
    }
}

function incrementarCantidad(index) {
    productosArray[index].cantidad++;
    mostrarProductos();
}

function decrementarCantidad(index) {
    if (productosArray[index].cantidad > 1) {
        productosArray[index].cantidad--;
        mostrarProductos();
    }
}
function eliminarProducto(index) {
    Swal.fire({
        title: "¿Seguro que deseas eliminar este producto?",
        text: "No podrás revertir esto.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Eliminado!",
                text: "Producto eliminado.",
                icon: "success"
            });
            productosArray.splice(index, 1);
            guardarProductosEnLocalStorage();
            mostrarProductos();
            mostrarProductosTienda();
        }
    });
}



//FUNCION AGREGAR CATEGORIAS
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("boton-publicar-categoria").addEventListener("click", function (event) {
        event.preventDefault();
        agregarCategoria();
    });
});

function agregarCategoria() {
    // Llamada a la función agregarCategoria cuando se hace clic en el botón

    // Obtener el nombre de la categoría
    const inputCategoria = document.getElementById("nombre-categoria");
    const nombreCategoria = inputCategoria.value.trim();

    if (nombreCategoria) {
        // Verificar si la categoría ya existe en el array
        const categoriaExistente = productosCategorias.find(categoria => categoria.categoria === nombreCategoria);

        if (categoriaExistente) {
            
            
            const mensajeError = "La categoría ya existe en el sistema.";
            mostrarMensaje(mensajeError);
            
        } else {
            // Calcular un nuevo ID para la categoría
            const nuevoId = productosCategorias.reduce((maxId, categoria) => Math.max(maxId, categoria.id), 0) + 1;

            // Agregar la categoría al array con un nuevo ID
            productosCategorias.push({ id: nuevoId, categoria: nombreCategoria });

            const mensajeError = `Categoría "${nombreCategoria}" agregada al sistema.`;
            mostrarMensaje(mensajeError);

           
            // Limpia el input después de agregar la categoría
            inputCategoria.value = "";
            guardarProductosEnLocalStorage();
            cargarProductosDesdeLocalStorage();
            crearCheckboxesCategorias(productosCategorias);
        }
    } else {
        const mensajeError = "Por favor, ingresa un nombre de categoría válido.";
        mostrarMensaje(mensajeError);
        
    }
}

// FUNCION MOSTRAR Y SELECCION DE CATEGORIAS POR CHECK INPUT
function crearCheckboxesCategorias(productosCategorias) {
    const mostrarCategoriasPrincipales = document.getElementById('mostrar-categorias-principales');

    if (!mostrarCategoriasPrincipales) {
        console.error("No se encontró el elemento con ID 'mostrar-categorias-principales'");
        return;
    }

    // Eliminar categorías anteriores antes de agregar nuevas categorías
    mostrarCategoriasPrincipales.innerHTML = "";

    productosCategorias.forEach((categoria) => {
        const div = document.createElement('div');
        div.className = 'form-check';

        const input = document.createElement('input');
        input.className = 'form-check-input';
        input.type = 'checkbox';
        input.value = categoria.categoria;
        input.id = `checkbox_${categoria.id}`;
        input.name = 'categorias';

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = `checkbox_${categoria.id}`;
        label.textContent = categoria.categoria;

        const eliminarBoton = document.createElement('button');
        eliminarBoton.textContent = 'X';
        eliminarBoton.className = 'btn-eliminar-categorias';
        eliminarBoton.addEventListener('click', () => eliminarCategoria(categoria.id));

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(eliminarBoton);

        mostrarCategoriasPrincipales.appendChild(div);
    });
}

function eliminarCategoria(id) {
    // Encuentra la categoría en el array y elimínala
    const index = productosCategorias.findIndex(categoria => categoria.id === id);
    if (index !== -1) {
        // Obtiene  la categoría que se va a eliminar
        const categoriaEliminada = productosCategorias[index];

        // Asigna "Sin Categoría" a los productos asociados a la categoría eliminada
        productosArray.forEach(producto => {
            if (producto.categoria === categoriaEliminada.categoria) {
                producto.categoria = "Sin Categoría";
            }
        });

        // Elimina la categoría
        productosCategorias.splice(index, 1);

        // Actualiza la vista de categorías
        crearCheckboxesCategorias(productosCategorias);

        // Guarda los cambios en el localStorage si es necesario
        guardarProductosEnLocalStorage();
    }
}

// FUNCION PARA MOSTRAR PRODUCTO INDIVIDUAL (LO OCUPARE DESPUES)

function mostrarProductoIndividual() {
    console.log("Función mostrarProductoIndividual llamada!");
    const productoIndividual = document.getElementById("producto-Individual");
    productoIndividual.innerHTML = '';

    productosArray.sort((a, b) => new Date(b.fechaHoraIngreso) - new Date(a.fechaHoraIngreso));

    productosArray.forEach((producto) => {
        if (producto.cantidad > 0) {
            // Contenedor principal
            const card = document.createElement("div");
            card.classList.add("card", "mb-3");
            card.style.maxWidth = "540px";

            // Contenedor de la imagen
            const rowG0 = document.createElement("div");
            rowG0.classList.add("row", "g-0");

            const imgCont = document.createElement("div");
            imgCont.classList.add("col-md-4");

            // Imagen del producto
            const img = document.createElement("img");
            img.src = producto.imagen; // Establece la URL de la imagen del producto
            img.classList.add("card-img-top");
            img.alt = producto.nombre; // Agrega un atributo "alt" para descripción de la imagen
            imgCont.appendChild(img);

            const cuerpo = document.createElement("div");
            cuerpo.classList.add("col-md-8");

            // Contenedor del cuerpo del producto
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            // Título del producto
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = producto.nombre;

            // Categorías
            const cardCategorias = document.createElement("p");
            cardCategorias.classList.add("card-Categorias");
            cardCategorias.textContent = `Categorías: ${producto.categoria}`;

            // SKU
            const cardSku = document.createElement("p");
            cardSku.classList.add("sku");
            cardSku.textContent = `SKU: ${producto.sku}`;

            // Precio
            const cardPrecio = document.createElement("p");
            cardPrecio.classList.add("card-precio");
            cardPrecio.textContent = `$${producto.precio.toFixed(2)}`;

            // Precio Rebajado
            const cardPreciorebajado = document.createElement("p");
            cardPreciorebajado.classList.add("card-precioRebajado");
            cardPreciorebajado.textContent = producto.precioRebajado ? `$${producto.precioRebajado.toFixed(2)}` : "";

            // Descripción del producto
            const cardDescripcion = document.createElement("p");
            cardDescripcion.classList.add("card-descripcion");
            cardDescripcion.textContent = `Detalles: ${producto.descripcion}`;

            // Botón de agregar al carrito
            const boton = document.createElement("a");
            boton.href = "#"; 
            boton.classList.add("btn", "btn-primary");
            boton.textContent = "Añadir al carrito";

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardCategorias);
            cardBody.appendChild(cardSku);
            cardBody.appendChild(cardPrecio);
            cardBody.appendChild(cardPreciorebajado);
            cardBody.appendChild(cardDescripcion);
            cardBody.appendChild(boton);

            cuerpo.appendChild(cardBody);
            rowG0.appendChild(imgCont);
            rowG0.appendChild(cuerpo);

            card.appendChild(rowG0);

            productoIndividual.appendChild(card);
        }
    });
}

//FUNCION MOSTRAR IMAGENES CAROUSEL (EN BANNER PRINCIPAL)
function mostrarCarruselImagenes(imagenes) {
    const carruselContainer = document.getElementById("mostrar-Carrusel-Imagenes");
    carruselContainer.innerHTML = '';

    const carrusel = document.createElement("div");
    carrusel.classList.add("carousel", "slide");
    carrusel.id = "customCarousel";

    const carruselInner = document.createElement("div");
    carruselInner.classList.add("carousel-inner");

    for (let i = 0; i < imagenes.length; i++) {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (i === 0) {
            item.classList.add("active");
        }

        const img = document.createElement("img");
        img.src = imagenes[i];
        img.classList.add("d-block", "w-100", "img-fluid"); 
        img.alt = `Imagen ${i + 1}`;

        item.appendChild(img);
        carruselInner.appendChild(item);
    }

    const controlContainer = document.createElement("div");
    controlContainer.classList.add("text-center");

    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-control-prev");
    prevButton.type = "button";
    prevButton.setAttribute("data-bs-target", "#customCarousel");
    prevButton.setAttribute("data-bs-slide", "prev");

    const prevIcon = document.createElement("span");
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden", "true");

    prevButton.appendChild(prevIcon);

    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-control-next");
    nextButton.type = "button";
    nextButton.setAttribute("data-bs-target", "#customCarousel");
    nextButton.setAttribute("data-bs-slide", "next");

    const nextIcon = document.createElement("span");
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden", "true");

    nextButton.appendChild(nextIcon);

    controlContainer.appendChild(prevButton);
    controlContainer.appendChild(nextButton);

    carrusel.appendChild(carruselInner);
    carrusel.appendChild(controlContainer);

    carruselContainer.appendChild(carrusel);
}



// (EN TIENDA) FUNCION MOSTRAR (CARD) PRODUCTOS GALERIA
function mostrarProductosTienda() {
    console.log("Función mostrarProductosGaleria llamada!");

    const productosGaleria = document.getElementById("mostrar-productos-tienda");
    productosGaleria.innerHTML = '';

    productosArray.sort((a, b) => new Date(b.fechaHoraIngreso) - new Date(a.fechaHoraIngreso));

    const row = document.createElement("div");
    row.classList.add("row");

    productosArray.forEach((producto) => {
        if (producto.cantidad > 0) {
            const col = document.createElement("div");
            col.classList.add("col-md-3");

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";

            const img = document.createElement("img");
            img.src = producto.imagen;
            img.classList.add("card-img-top");
            img.alt = producto.nombre;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.id = "card-body-tamaño";

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = producto.nombre;

            const cardCategorias = document.createElement("p");
            cardCategorias.classList.add("card-Categorias");
            cardCategorias.textContent = `Cat:\n ${producto.categoria}`;

            const cardPrecio = document.createElement("p");
            cardPrecio.classList.add("card-precio");
            cardPrecio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

            const cardPreciorebajado = document.createElement("p");
            cardPreciorebajado.classList.add("card-precioRebajado");

            // Verifico si el precio rebajado existe y no es 0 o vacío
            if (producto.precioRebajado !== undefined && producto.precioRebajado !== 0 && producto.precioRebajado !== "") {
                cardPreciorebajado.textContent = `Oferta: $${producto.precioRebajado.toLocaleString()}`;
            }

            const cardSku = document.createElement("p");
            cardSku.classList.add("sku");
            cardSku.textContent = `SKU: ${producto.sku}`;

            const cardDescripcion = document.createElement("p");
            cardDescripcion.classList.add("card-descripcion-tienda", "barra-desplazamiento-cat");
            cardDescripcion.textContent = `Detalles: ${producto.descripcion}`;
            cardDescripcion.style.maxHeight = "3em";

            const boton = document.createElement("button");
            boton.classList.add("btn", "btn-primary");
            boton.textContent = "Añadir carrito";

            boton.addEventListener("click", () => {
                // Actualizar el precio del producto al precio rebajado antes de agregar al carrito
                if (producto.precioRebajado !== undefined && producto.precioRebajado > 0) {
                    producto.precio = producto.precioRebajado;
                }
                
                añadirCarrito(producto);
                mostrarCarrito();
                guardarProductosEnLocalStorage();
                mostrarTotalCarrito();  // Asegúrate de llamar a mostrarTotalCarrito aquí
                actualizarBurbujaCarrito();
                Swal.fire(`Producto ${producto.nombre} \nAgregado al Carrito!`);
                setTimeout(function() {
                    location.reload(); 
               }, 2000);
            });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardCategorias);
            cardBody.appendChild(cardPrecio);
            cardBody.appendChild(cardPreciorebajado);
            cardBody.appendChild(cardSku);
            cardBody.appendChild(cardDescripcion);
            cardBody.appendChild(boton);

            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);

            productosGaleria.appendChild(row);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarCarruselImagenes(imagenes);
    mostrarProductoIndividualOferta();
});

function mostrarProductoIndividualOferta() {
    console.log("Función mostrarProductoIndividualOferta llamada!");
    const productoCarousel = document.getElementById("carouselExample");
    const carouselInner = productoCarousel.querySelector(".carousel-inner");
    carouselInner.innerHTML = '';

    const productosRebajados = productosArray.filter(producto => producto.precioRebajado !== undefined && producto.precioRebajado < producto.precio && producto.precioRebajado > 0);

    productosRebajados.forEach((producto, index) => {
        if (producto.cantidad > 0) {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index === 0) {
                carouselItem.classList.add("active");
            }

            const card = document.createElement("div");
            card.classList.add("card", "mb-3");
            card.style.maxWidth = "540px";

            const imgCont = document.createElement("div");
            imgCont.classList.add("col-md-4");

            const img = document.createElement("img");
            img.src = producto.imagen;
            img.classList.add("d-block", "w-100");
            img.alt = producto.nombre;
            imgCont.appendChild(img);

            const cuerpo = document.createElement("div");
            cuerpo.classList.add("col-md-8");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = producto.nombre;

            const cardCategorias = document.createElement("p");
            cardCategorias.classList.add("card-Categorias");
            cardCategorias.textContent = `Categorías: ${producto.categoria}`;

            const cardSku = document.createElement("p");
            cardSku.classList.add("sku");
            cardSku.textContent = `SKU: ${producto.sku}`;

            const cardPrecio = document.createElement("p");
            cardPrecio.classList.add("card-precio");
            cardPrecio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

            const cardPreciorebajado = document.createElement("p");
            cardPreciorebajado.classList.add("card-precioRebajado");

            // Verifico si el precio rebajado existe y no es 0 o vacío
            if (producto.precioRebajado !== undefined && producto.precioRebajado !== 0 && producto.precioRebajado !== "") {
                cardPreciorebajado.textContent = `Oferta: $${producto.precioRebajado.toLocaleString()}`;
            }

            const cardDescripcion = document.createElement("p");
            cardDescripcion.classList.add("card-descripcion");
            cardDescripcion.textContent = `Detalles: ${producto.descripcion}`;
            cardDescripcion.style.maxHeight = "3em";

            const boton = document.createElement("a");
            boton.href = "#";
            boton.classList.add("btn", "btn-primary");
            boton.textContent = "Añadir al carrito";

            boton.addEventListener("click", () => {
                // Modifica el precio al precio rebajado
                producto.precio = producto.precioRebajado;
                añadirCarrito(producto);
                mostrarCarrito();
                guardarProductosEnLocalStorage();
                mostrarTotalCarrito();  
                actualizarBurbujaCarrito();
                Swal.fire(`Producto ${producto.nombre} \nAgregado al Carrito!`);
                setTimeout(function() {
                     location.reload(); 
                }, 2000);
            });

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardCategorias);
            cardBody.appendChild(cardSku);
            cardBody.appendChild(cardPrecio);
            cardBody.appendChild(cardPreciorebajado);
            cardBody.appendChild(cardDescripcion);
            cardBody.appendChild(boton);

            cuerpo.appendChild(cardBody);
            carouselItem.appendChild(imgCont);
            carouselItem.appendChild(cuerpo);
            carouselInner.appendChild(carouselItem);
        }
    });
}

// FUNCION AÑADIR AL CARRITO
function añadirCarrito(producto) {
    const productoCopia = { ...producto };
    carrito.push(productoCopia);

    console.log("Producto añadido al carrito:", producto);

    // Mostrar el carrito y el total después de añadir un producto
    mostrarCarrito();
    mostrarTotalCarrito();
    
    guardarProductosEnLocalStorage();

    // Actualizar la burbuja del carrito
    actualizarBurbujaCarrito();
}

function actualizarBurbujaCarrito() {
    const burbujaCarrito = document.getElementById("burbuja");

    // Establecer el texto de la burbuja según la longitud del carrito
    if (burbujaCarrito) {
        const valorBurbuja = carrito.length > 0 ? '1' : '0';
        burbujaCarrito.textContent = valorBurbuja;

        // Guardar el valor en el localStorage
        localStorage.setItem("valorBurbuja", valorBurbuja);
    }
}

// Recuperar el valor de la burbuja del localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const valorBurbuja = localStorage.getItem("valorBurbuja");
    const burbujaCarrito = document.getElementById("burbuja");

    if (burbujaCarrito && valorBurbuja) {
        burbujaCarrito.textContent = valorBurbuja;
    }
});

actualizarBurbujaCarrito();

//FUNCIONES MOSTRAR PRODUCTOS Y CARRITO TOTAL
if (document.getElementById("total-carrito") === null) {
    const totalCarritoElement = document.createElement("p");
    totalCarritoElement.id = "total-carrito";
    document.getElementById("mostrar-carrito").appendChild(totalCarritoElement);
}

// FUNCION MOSTRAR CARRITO
function mostrarCarrito() {
    console.log("Función mostrarCarrito llamada!");
    const carritoContainer = document.getElementById("mostrar-carrito");
    carritoContainer.innerHTML = '';

    const carritoAgrupado = {};

    for (let i = 0; i < carrito.length; i++) {
        const producto = carrito[i];
        const productoID = producto.id;

        if (!carritoAgrupado[productoID]) {
            carritoAgrupado[productoID] = {
                producto: producto,
                cantidad: 1,
            };
        } else {
            carritoAgrupado[productoID].cantidad++;
        }
    }

    const listaProductos = document.createElement("ul");
    listaProductos.classList.add("list-group");

    for (const productoID in carritoAgrupado) {
        const productoAgrupado = carritoAgrupado[productoID];
        const producto = productoAgrupado.producto;

        const productoEnCarrito = document.createElement("li");
        productoEnCarrito.classList.add("list-group-item");

        productoEnCarrito.textContent = `${producto.nombre} $${producto.precio}, Cantidad: x${productoAgrupado.cantidad}`;

        const botonEliminarCarrito = document.createElement("button");
        botonEliminarCarrito.classList.add("btn-eliminar-carrito");
        botonEliminarCarrito.textContent = "x";

        botonEliminarCarrito.addEventListener("click", function () {
            eliminarProductoCarrito(producto.id);
        });

        productoEnCarrito.appendChild(botonEliminarCarrito);
        listaProductos.appendChild(productoEnCarrito);
    }

    carritoContainer.appendChild(listaProductos);

    // Mostrar el botón "Finalizar Pedido" solo si hay productos en el carrito
    if (carrito.length > 0) {
        const botonFinalizarPedido = document.createElement("button");
        botonFinalizarPedido.textContent = "Finalizar Pedido";
        botonFinalizarPedido.classList.add("btn-finalizar-pedido");
        botonFinalizarPedido.addEventListener("click", function () {
            
            Swal.fire("Pedido finalizado. ¡Gracias por tu compra!");
            carrito = [];
            mostrarCarrito();
            mostrarTotalCarrito();
            actualizarBurbujaCarrito();

        });

        carritoContainer.appendChild(botonFinalizarPedido);
    } else {
        carritoContainer.textContent = "El carrito está vacío.";
    }
}



//FUNCIONES DE MI PRIMER PROGRAMA SE HACE REFERENCIA Y UN VALOR SENTIMENTAL 
let iva = 0.19
const costo = sumarPrecios(carrito)
const valorfinalIva = totalIva(costo, iva)

function totalIva(costo, iva) {
    let total = costo * iva
    return total
}
function sumarPrecios(totalNeto) {
    let totalFin = 0;
  
    for (let i = 0; i < totalNeto.length; i++) {
        totalFin += totalNeto[i].precio
    }
  
    return totalFin
}

function mostrarTotalCarrito() {
    let precioProductoIndividual = "";
    let valorFinalTotal = valorfinalIva + costo;

    for (let i = 0; i < carrito.length; i++) {
        const producto = carrito[i];
        precioProductoIndividual += `${i + 1}: Nombre: ${producto.nombre}\nPrecio: $${parseFloat(producto.precio).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n`;
    }

    const totalCarritoElement = document.getElementById("total-carrito");

    if (totalCarritoElement) {
        totalCarritoElement.innerHTML = `<br>VALOR TOTAL: $${parseFloat(valorFinalTotal).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } 
}



// FUNCION ELIMINAR PRODUCTO DEL CARRITO
function eliminarProductoCarrito(productoID) {
    const indice = carrito.findIndex((producto) => producto.id === productoID);

    if (indice !== -1) {
        carrito.splice(indice, 1);
        console.log(carrito);
        mostrarCarrito();
        mostrarTotalCarrito();  
        guardarProductosEnLocalStorage();
        actualizarBurbujaCarrito();
    /* setTimeout(function() {
        location.reload();
    }, 2000); */
        
    }
}
//FIN DEL PROGRAMA

