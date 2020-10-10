(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

        acessoController.$inject = ['helperFactory','ListaComprasService'];

    function acessoController(helper,service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
    
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.logar = logar;
        vm.register = register;
        

        function logar(){
            return service.logar(vm.login)
            .then(function(_resp){
                if(_resp.error){
                    helper.addMsg(_resp.msg,'danger');
                }else{
                    helper.addMsg(_resp.message, 'success');
                    helper.path('/home')
                    helper.setRootScope('userLogged' , _resp.userLogged)
                }
            })
        }

        function register(){
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password
            };

            return service.register(newUser)
                .then(function(_resp) {
                    if(_resp.error){
                        helper.addMsg(_resp.msg, 'danger', 'Tente novamente')
                    }else{
                        helper.addMsg(_resp.message, 'success');
                        helper.path('/home')
                        helper.setRootScope('userLogged' , _resp.userLogged);
                    }
            });
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();