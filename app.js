let figuras = require('./dhCollectibles/collectibles')


let hotToys = 'Hot Toys'
let bandai = 'Bandai'
let starWars = 'Star Wars'


let unifiedCollectibles = figuras(hotToys,bandai,starWars)

collectibles = {
    figuras: figuras(hotToys, bandai, starWars),
    listFigures: function(){
        this.figuras.forEach(element => {
            console.log(element)
        });
    },
    figuresByBrand: function(brand){
        let arrayBrand = this.figuras.filter((figura) => figura.marca === brand)
        return arrayBrand
    }
    
}


console.log(collectibles.figuresByBrand(hotToys))