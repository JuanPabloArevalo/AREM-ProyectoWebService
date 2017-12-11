/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global apiclientRegistrarse */

var registrarse = (function () {

    function inicializarElementos() {
        $(".filas").remove("tr");
    }

    function adicionarFila(item) {
        var markup = "<tr class=\"filas\"><td>" + item.cliente + "</td><td>" + item.pais + "</td><td>" + item.fecha + "</td><td>" + item.configuracion + "</td><td>" + item.errorDesarrollo + "</td><td>" + item.capacitacion + "</td><td>" + item.tipo + "</td><td>" + item.responsable + "</td></tr>";
        $("table tbody").append(markup);
    }
    function inicializarElementosN() {
        $(".filasN").remove("tr");
    }

    function adicionarFilaN(item) {
        var markup = "<tr class=\"filasN\"><td>" + item.titulo + "</td><td>" + item.descripcion + "</td><td><img src=\""+item.urlImagen+"\" class=\"img-rounded imagen\" alt=\"Imagen\"></td><td><a href=\""+item.url+"\" class=\"btn btn-warning btn-block\">Visitar</a></td></tr>";
        $("#registrosNoticias").append(markup);
    }
    return {
        cargar(){
            var promesaConsulta = apiclientRegistrarse.getUsuarios();
            promesaConsulta.then(
                    function (datos) {
                        inicializarElementos();
                        datos.map(adicionarFila);
                    },
                    function (dato) {
                        alert(dato.responseJSON.message);
                    }
            );
        },
        cargarNoticias(periodico){
           
            var promesaConsulta = apiclientRegistrarse.getNoticias(periodico);
            promesaConsulta.then(
                    function (datos) {
                        inicializarElementosN();
                        datos.map(adicionarFilaN);
                    },
                    function (dato) {
                        alert(dato.responseJSON.message);
                    }
            );
        }
    };
}());
