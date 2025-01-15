function enviarWhatsApp() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const tipoDcoumento = document.getElementById("tipoDocumento").value;
    const numeroDocumento = document.getElementById("numeroDocumento").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    const regimenTributario = document.getElementById("regimenTributario").value;
    const mensajeAdicional = document.getElementById("mensaje").value;

    // Validar que los campos obligatorios estén completos
    if (!nombre || !tipoDcoumento || !numeroDocumento || !direccion || !correo) {
        alert("Por favor, completa todos los campos obligatorios antes de enviar.");
        return;
    }

    // Número de WhatsApp donde se enviará (formato internacional, sin '+')
    const numeroDestino = "573225725739"; // Cambia esto al número de tu negocio.

    // Construir el mensaje
    const mensajeCompleto = `
        Nombre completo o razón social: ${nombre} 
        Tipo de documento: ${tipoDcoumento} 
        Numero de documento: ${numeroDocumento} 
        Dirección: ${direccion}. Correo electrónico: ${correo}.
        ${regimenTributario ? "Régimen tributario: " + regimenTributario : ""}
        ${mensajeAdicional ? "Detalles adicionales: " + mensajeAdicional : ""}
        `;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeCompleto);

    // Crear el enlace de WhatsApp
    const enlace = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${mensajeCodificado}`;

    // Redirigir al enlace
    window.open(enlace, "_blank");
}