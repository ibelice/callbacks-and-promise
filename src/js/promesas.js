const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iroman',
        poder: 'Absurda cantidad de dinero'
    },
    spiderman: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de aranas'
    },
}

export const buscarHeroe = (id) => {

    const heroe = heroes [id];
    
    return new Promise (( resolve, reject) => {
        if(heroe) {
            // resolve(heroe);
            setTimeout(() => resolve (heroe), 1000);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });

}


// Forma Async
export const buscarHeroeAsync =  async (id) => {

    const heroe = heroes [id];
    
        if(heroe) {
            return heroe;
        } else {
            throw `No existe un heroe con el id ${id}`;
        }
        
    };

const promesaLenta = new Promise ( (resolve, reject) => {
    setTimeout(() => resolve ('Promesa lenta', 2000));
});

const promesaMedia = new Promise ( (resolve, reject) => {
    setTimeout(() => resolve ('Promesa Media', 1500));
});

const promesaRapida = new Promise ( (resolve, reject) => {
    setTimeout(() => resolve ('Promesa Rapida', 1000));
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}