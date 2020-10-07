(function () {
    "use strict";

    //MODULO
    angular.module('listaTarefasApp', []);

    //CONTROLLER
    angular.module('listaTarefasApp')
    .controller("listaTarefasController", listaTarefasController);

    listaTarefasController.$inject = ['$scope'];

    function listaTarefasController($scope){

        var vm = this;

        vm.tarefas = [
            {text:'Estudar AngulaJS',feito:true},
            {text:'Fazer uma aplicação em AngulaJS',feito:false}
        ];


        vm.restam = restam;
        vm.addTarefa = addTarefa;
        vm.arquivar = arquivar;

        function restam(){
            var count = 0;
            angular.forEach(vm.tarefas, function (trf){
                if(!trf.feito) count++;
            });
            return count;
        }

        function addTarefa(){
            vm.tarefas.push({text:vm.tarefaText,feito:false});
            vm.tarefaText = '';
        }

        function arquivar(){
            vm.tarefas = vm.tarefas.filter(function (trf){return !trf.feito});
        }
    }

})();