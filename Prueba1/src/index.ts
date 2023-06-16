let mensaje: string = "Hola Mundo"

mensaje = "CHAN"
mensaje = "chao mundo"
console.log(mensaje)

/* Tipos de datos en js
*number
*string
*boolena
*null
*undefined
*object
*function
* tupos de datos Ts
*any
*unknow
*never
*arrays
*tuplas
*Enums
*
tipos inferidos 

*/

let extincionDino : number = 7_000_000
let dinoFavorito: string = "T-rex"
let extintos = true 

function chanchitofeliz(config : any){
    return config
}

let animales: string[] = ['chanchito', 'feliz', 'felipe']

let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let num2:  Array<number> = []

//nums.map(x => x.)// el autocomletado sugiere metodos del tipo de dato 

let tupla: [number, string[]] = [1, ['chancito feliz', 'meow', 'gato feliz' ]]


const chica = 's'
const mediada = 'm'
const grande = "l"
const extragrande = 'xl'
//pascalCase 

enum Talla { Chica = 's', Mediada = 'm', Grande = ' l', ExtraGrande = 'xl'}

const variable1 = Talla.Grande
console.log(variable1)

 const enum LoadingState { Idle, Loading, Success, Error}

 const estado = LoadingState.Success

 type Direccion = {
    numero: number, 
    calle: string,
    pais: string
}
 type Persona = {
    readonly id: number,
    nombre: string,
    edad?: number, 
    talla: Talla, 
    direccion: Direccion
} 

 const objeto: Persona = { 
    id: 1, 
    nombre: 'Hola mundo', 
    talla: Talla.Chica , 
    direccion: {
        numero: 1, 
        calle: 'meow meow',
        pais : 'gatos tav'

    }
}

const arr: Persona[] = []
