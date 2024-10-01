    const config = require('../config.js');
    const Usuario = require('../models/usuario.js');
    const jwt = require('jsonwebtoken');

    exports.login = async (req,res) => {
        
        const {username, password} = req.body;
        const usuario = new Usuario(null,'','',null,'',username,password);

        try {
            const result = //await sql.query`SELECT * FROM USUARIOS WHERE usuario = ${username} AND contrasena = ${hashedPassword}`;
                        [
                            {
                                "idUsuario": 1,
                                "nombresUsuario": "Jorge Oswaldo",
                                "nombreOrdenado": "Infante Da Cruz, Jorge Oswaldo",
                                "numeroDocumento": "46030192",
                                "idTipoDocumentoTm": 1,
                            }
                        ]

            Object.assign(usuario, 
                {
                    idUsuario: result[0].idUsuario,
                    nombresUsuario: result[0].nombresUsuario,
                    nombreOrdenado: result[0].nombreOrdenado,
                    idTipoDocumentoTm: result[0].idTipoDocumentoTm,
                    numeroDocumento: result[0].numeroDocumento
                }
            )
            
            if (usuario.idUsuario!=null && usuario.idUsuario>0) {            
                const token = jwt.sign(
                    {
                        idUsuario: usuario.idUsuario,
                        nombresUsuario: usuario.nombresUsuario,
                        nombreOrdenado: usuario.nombreOrdenado,
                        idTipoDocumentoTm: usuario.idTipoDocumentoTm,
                        numeroDocumento: usuario.numeroDocumento,
                        username: usuario.usuario
                    },
                    config.secret,
                    {
                        expiresIn: '1h'
                    }
                )
                res.json({ success: true, user:  usuario});
            } else {
            res.json({ success: false });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error en la base de datos');
        }
        
    }