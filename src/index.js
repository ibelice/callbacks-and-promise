import { heroesCiclo, heroeIfAwait } from "./js/await";

heroesCiclo();

heroeIfAwait('iron');




// ESTO PERTENECE AL AWAIT!!!
// import {obtenerHeroesArr, obtenerHeroeAwait} from './js/await';

// console.time('await');

// obtenerHeroeAwait('capi2')
//     .then(heroe => {
//     console.log(heroe)

//     console.timeEnd('await');
// }).catch(console.warn);













//ASYNC
// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

// buscarHeroe('capi2')
//         .then(heroe => console.log(heroe))
//         .catch(console.warn);

// buscarHeroeAsync('iron2')
//         .then(heroe => console.log(heroe))
//         .catch(console.warn);



// PROMISE RACE
// import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';

// // promesaLenta.then(console.log);
// // promesaMedia.then(console.log);
// // promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida ])
//         .then(console.log)
//         .catch(console.warn);
