angular.module('app.controllers', ['ngSanitize'])
  
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
   
.controller('loginRegisterCtrl', ['$scope', '$stateParams', '$http','LoginService', '$ionicPopup','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, LoginService, $ionicPopup, $state) {
    $scope.data={
        email:'',
        clave:''
    };


    //evaluar
   
     $scope.enviar=function(userdata){

        $http({
            method:'post',
            data: $.param(userdata),
            url: 'http://localhost/radiounl/clienteapp/validar',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).success(function (data) {
            console.log(data);
            console.log(data.response);
            if(data.response==null){
                alert("error");
            }else{
                localStorage.setItem("token", data.response);
                location.href ="#/page11";
            }
        
        
            //alert("ya paso");   
            //alert(userdata.nombre+' te has registrado correctamente');
        })
     };
   

   /* $scope.login = function(){
      LoginService.loginUser($scope.data.username,$scope.data.password).success(function(data){
        $state.go('tab.dash');
      }).error(function(data) {
          var alertPopup= $ionicPopup.alert({
              title: 'Login Failed!',
              template:'Please check your credentials!'
          });
      });
        //console.log("LOGIN user: "+$scope.data.username+" -PW: "+$scope.data.password);
    }*/
    

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
        ////////
        


        ///////////////////////////////validacion de correo existente///////////
        var correo= userdata.email;
        var direccionServidor= 'http://localhost/radiounl/clienteapp_sw/find/';
        $http.get(direccionServidor+correo).success(function(data){
            console.log(data);
            $scope.correo = data.response.CORREO;
            if (userdata.email==$scope.correo) {
            console.log("Coiciden");
            alert('Ya existe un usuario registrado con este correo!')
            window.location.reload();
            ///////////////fin validacion correo existente/////////////
        }
        
        });
        
        if (userdata.clave==userdata.repclave) {//Valida que el las claves coicidan
            console.log('form submitedd');
            console.log(userdata);
            ///////Guardar Nuevo usuario////////////
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
                location.href ="#/page6";
        }).error(function (data) {
            console.log(data);
            alert('Fallo el registro Intente nuevamente.');
        });  
        }else{
            alert('Contraseña no coiciden');
        }

        
        ///////////////////////////////
        /*if (userdata.clave==userdata.repclave) {//Valida que el las claves coicidan
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
            alert('Contraseña no coiciden');
        }*/
              
    };
}])

   
.controller('quienesSomosCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {
    var direccionServidor= 'http://localhost/radiounl/index.php/informacion_sw';
        $http.get(direccionServidor).success(function(data){
            console.log(data);
            $scope.informacion= data.response;
        })

}])

.controller('noticiasCtrl', ['$scope', '$stateParams','$http', '$sce', function ($scope, $stateParams,$http, $sce) {
     /*$http.get("http://unl.edu.ec/rssunl.xml",
            {
    transformResponse: function (cnv) {
      var x2js = new X2JS();
      var aftCnv = x2js.xml_str2json(cnv);
      return aftCnv;
    }
  }).success(function (data) {
      
    console.log(data);
    $scope.noticias=data.rss.channel.item;
  });*/
 
  function image() {
      var direccionServidor= 'http://localhost/radiounl/index.php/banner_sw';
        $http.get(direccionServidor).success(function(data){
            console.log(data);
            $scope.foto = data.response[0];
        })
  }
    image();

        var direccionServidor= 'http://localhost/radiounl/noticia_sw';
        $http.get(direccionServidor).success(function(data){
            console.log(data);
            $scope.noticias=data.response;
        })
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
    
    var token = localStorage.getItem("token");
    if (token ==null) {
        console.log(token);
        location.href ="#/page11/page6";

        
    }else{
        console.log(token);
        var direccionServidor= 'http://localhost/radiounl/index.php/programagrabado_sw';
        $http.get(direccionServidor).success(function(data){
            console.log(data);
            $scope.programasgrabados = data.response;
            $scope.programasgrabados.forEach(function(element) {
               element.AUDIO= `http://localhost/radiounl/${element.AUDIO}`
            }, this);
        })
    }
    

    

}])

.controller('tituloDeNoticiaCtrl', ['$scope', '$stateParams', '$http','$sce', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$sce) {
    var id=$stateParams.id;
    var direccionServidor= 'http://localhost/radiounl/noticia_sw/noti/';
    $http.get(direccionServidor+id).success(function(data){
        console.log(data);
        $scope.noticia=data.response[0];
    })

}])
   
.controller('cambiarContraseACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

