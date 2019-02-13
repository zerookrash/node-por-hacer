const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea realizada'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrado de una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}