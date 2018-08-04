exports.home = (req,res) => {
    res.send("Bienvenidos al a Mi Pagina");
    res.end();
}

exports.contacto = (req,res) => {
    res.send("Puedes contactarme al correo me@example.com");
    res.end();
}