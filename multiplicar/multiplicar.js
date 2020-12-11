// requires
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`La base introducida "${base}" no es un número.`);
            return;
        }

        if (!Number(limite)){
            reject(`El limite introducido "${limite}" no es un número.`);
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
};

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`La base introducida "${base}" no es un número.`);
            return;
        }
        if (!Number(limite)){
            reject(`El limite introducido "${limite}" no es un número.`);
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};