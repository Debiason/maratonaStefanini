(function () {
    "use strict";

    //Modulo
    angular.module('listaComprasApp')
    .service('ListaComprasService', listaComprasService);

    listaComprasService.$inject = ['$http', 'constantes', 'helperFactory'];

    function listaComprasService($http, constantes, helper){
        return {
            exemplo:exemplo,
            logar:logar,
            register:register
        }

    //--------------------------------------------

        function exemplo(){
            return $http.get('http://wordclockapi.com/api/json/est/now')
            .then(function (response){
                return response.data;
            })
            .catch(helper.sendError)
        }

        function logar(_params){
            return $http.post(constantes.URL_BASE + '/login', _params)
            .then(function (response){
                return response.data;
            })
            .catch(helper.sendError);
        }

        function register(_params){
            return $http.post(constantes.URL_BASE + '/register', _params)
            .then(function (response){
                return response.data;
            })
            .catch(helper.sendError);
            
        }

    }

})();