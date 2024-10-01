module.exports = {
    sqlserver: {
        user: 'sa',       // Reemplaza con tu usuario de SQL Server
        password: 'pa@$123sa', // Reemplaza con tu contraseña de SQL Server
        server: 'localhost',     // Reemplaza con la dirección de tu servidor SQL (puede ser localhost)
        database: 'METROPOLI_TERRENOS', // Reemplaza con el nombre de tu base de datos
        options: {
            encrypt: false, // Usar encrypt para conexiones seguras, establece en false si estás usando un servidor local
            trustServerCertificate: true // Cambia a false en producción
        }
    },
    secret: process.env.TOKEN_SECRET
};