let fs = require('fs')

let figuras1 = fs.readFileSync('./dhCollectibles/datos/figuras1.json')
let figuras2 = fs.readFileSync('./dhCollectibles/datos/figuras2.json')
let figuras3 = fs.readFileSync('./dhCollectibles/datos/figuras3.json')


let todasLasFiguras = [...JSON.parse(figuras1), ...JSON.parse(figuras2), ...JSON.parse(figuras3)]

function figuras(...marcas){
    let marcasSeleccionadas = []
    marcas.forEach(element => {
        let marcasFiltradas = todasLasFiguras.filter((figurasArray) => figurasArray.marca === element)
        marcasSeleccionadas = marcasSeleccionadas.concat(marcasFiltradas)
    });
    return marcasSeleccionadas
}



module.exports = figuras