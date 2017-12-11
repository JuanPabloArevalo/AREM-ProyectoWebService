/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var apiclientRegistrarse = (function(){
    
    return{
        getUsuarios(){
            return $.get("/proyectoArem/V1/reportes"); 
        },
        getNoticias(periodico){
            return $.get("http://apinoticias.herokuapp.com/APINoticias/V1/news/"+periodico); 
        }
    };
    
}());