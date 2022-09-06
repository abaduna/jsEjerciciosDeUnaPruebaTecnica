//multiplicar sin usar la funcion multiplicar
function multiplicar(a,b){
   let resaltado = 0 
   const Positivo = Math.abs(b) == b
   for (let index = 0; index < Math.abs(b); index++) {
    resaltado = Positivo ? resaltado + a : resaltado - a 
    
   }
   return resaltado
}
 r= multiplicar(-565465,-5445654)
 console.log(r)
//bajar la dimencion de un array
 const arr = [[1,2],[[1,3]],[1],[5]]


 const flatter = arr => arr.reduce((acc,el) =>  acc.concat(el), [])
 const d = flatter(arr)
 console.log(d)
 //---------------------//
 // esribiar una funcion que cuente  una palabra

