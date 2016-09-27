import {Component} from '../../include/angular2/core';
//creamos nuestro componente



@Component({
/* Obtenemos la etiqueta "etiqueta-index" de nuestro archivo index.html, nuestro componente efectuará los cambios sobre esta etiqueta */
selector: 'etiqueta-index',
// Ubicación de nuestra plantilla HTML
templateUrl: 'login/hola_mundo.html'
})
export class ClaseMundo {
/* Declaramos e inicializamos la variable que usaremos para transportar nuestro nombre teclado en el input para que posteriormente se pueda mostrar en otra sección de nuestra plantilla HTML */	
tuNombre: string = '';	
}