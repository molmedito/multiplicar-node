const colors = require('colors');
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log('================='.brightMagenta);
                console.log(`Tabla del ${argv.base}`.brightMagenta);
                console.log('================='.brightMagenta);
                console.log(data.cyan);
            })
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.black.bgWhite))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


