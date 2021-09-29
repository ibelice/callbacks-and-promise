import {buscarHeroeAsync, buscarHeroe} from './promesas';

const heroesIds = ['capi', 'iron', 'spiderman'];
const heroesPromesas = heroesIds.map( buscarHeroe);
// const heroesPromesa = heroesIds.map(id => buscarHeroe(id)); esta line es la misma que la de arriba

export const obtenerHeroesArr = async () => {

    return await Promise.all (heroesIds.map(buscarHeroe));}


export const obtenerHeroeAwait = async(id) => {

    try {

        const heroe = await buscarHeroeAsync(id);
        return heroe;

    }catch(err) {
        console.log('CATCH!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }

    
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }


//FORMA DE REALIZAR EL AWAIT
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    // console.log(heroes);

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id) => {
    if((await buscarHeroeAsync(id)).nombre === 'Iroman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaa');
    }
}

    // Otra forma de await
    // const heroesArr = [];

    // for(const id of heroesIds) {
    //     heroesArr.push(buscarHeroe(id));     
    //     }

    //     return await Promise.all(heroesArr);

// Una forma de realizar el await
    // for(const id of heroesIds) {
    // const heroe = await buscarHeroeAsync(id);
    // heroesArr.push(heroe);

    // }


    // return heroesArr;

