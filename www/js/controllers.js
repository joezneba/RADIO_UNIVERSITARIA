angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('radioOnlineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginRegisterCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    //$scope.user={};
    //$scope.enviar = function(){
      //  debugger
    //}


}])
   
.controller('registrarCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
    $scope.user={
        nombre:'',
        email:'',
        clave:'',
        repclave:''
    };

    $scope.enviar=function (userdata) {
        if (userdata.clave==userdata.repclave) {//Valida que el las claves coicidan
          console.log('form submitedd');
        console.log(userdata);

        $http({
            method:'post',
            data: $.param(userdata),
            url: 'http://localhost/radiounl/Clienteapp/CrearUsuario',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            console.log(data);
            alert(userdata.nombre+' te has registrado correctamente');
        }).error(function (data) {
            console.log(data);
            alert('Fallo el registro Intente nuevamente.');
        });  
        }else{
            alert('fallo pass');
        }
              
    };
}])

/*
$scope.enviar=function (userdata) {
        console.log('form submitedd');
        console.log(userdata);

        $http({
            method:'post',
            data: $.param(userdata),
            url: 'http://localhost/radiounl/Clienteapp/CrearUsuario',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            console.log(data);
            alert(userdata.nombre+' te has registrado correctamente');
        }).error(function (data) {
            console.log(data);
            alert('Fallo el registro Intente nuevamente.');
        });      
    };
*/
   
.controller('quienesSomosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    

}])

.controller('noticiasCtrl', ['$scope', '$stateParams','$http', function ($scope, $stateParams,$http) {
     $http.get("http://unl.edu.ec/rssunl.xml",
            {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  }).success(function (data) {
      
    console.log(data);
    $scope.noticias=data.rss.channel.item;
  });

  function image() {
      var direccionServidor= 'http://localhost/radiounl/index.php/banner_sw';
        $http.get(direccionServidor).success(function(data){
            console.log(data);
            $scope.foto = data.response[0];
        })
  }
    image();
}])

.controller('programaciNCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

   
.controller('programaciNDiariaCtrl', ['$scope','$stateParams','$http', function ($scope, $stateParams,$http) {
    var dia =$stateParams.dia;
    var direccionServidor= 'http://localhost/radiounl/programa_sw/dia/';
        $http.get(direccionServidor+dia).success(function(data){
            console.log(data);
            $scope.programas = data.response;
        })
        
    
}])

.controller('programasGrabadosCtrl', ['$scope', '$stateParams', '$http',function ($scope, $stateParams,$http) {
    var direccionServidor= 'http://localhost/radiounl/index.php/programagrabado_sw';
    $http.get(direccionServidor).success(function(data){
        console.log(data);
        $scope.programasgrabados = data.response;
        $scope.programasgrabados.forEach(function(element) {
           element.AUDIO= `http://localhost/radiounl/${element.AUDIO}`
        }, this);
    })

}])

.controller('tituloDeNoticiaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cambiarContraseACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

