class Usuario{
    constructor(idUsuario = null,nombresUsuario='',nombreOrdenado='',idTipoDocumentoTm=null,numeroDocumento='',usuario='',contrasena=''){
        this.idUsuario = idUsuario;
        this.nombresUsuario = nombresUsuario;
        this.nombreOrdenado = nombreOrdenado;
        this.idTipoDocumentoTm = idTipoDocumentoTm;
        this.numeroDocumento = numeroDocumento;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
}

module.exports = Usuario;
