(function () {
    "use strict";

    // MODULO
    angular.module('listaComprasApp')
        .config(routes)
            .run(configDefault);

    routes.$inject = ['$routeProvider'];
    configDefault.$inject = ['$rootScope'];

    function routes($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl:'acesso/home.tpl.html'
        })
        .when('/login', {
            templateUrl: 'acesso/login.tpl.html'
        })
        .when('/register', {
            templateUrl: 'acesso/register.tpl.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }

    function configDefault($rootScope){
        $rootScope.listaMensagens = []
    }
            

})();