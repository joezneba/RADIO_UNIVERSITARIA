angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.radioOnline', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/radioOnline.html',
        controller: 'radioOnlineCtrl'
      }
    }
  })

  .state('loginRegister', {
    url: '/page6',
    templateUrl: 'templates/loginRegister.html',
    controller: 'loginRegisterCtrl'
  })

  .state('registrar', {
    url: '/page7',
    templateUrl: 'templates/registrar.html',
    controller: 'registrarCtrl'
  })

  .state('quienesSomos', {
    url: '/page3',
    templateUrl: 'templates/quienesSomos.html',
    controller: 'quienesSomosCtrl'
  })

  .state('tabsController.noticias', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('tabsController.programaciN', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciN.html',
        controller: 'programaciNCtrl'
      }
    }
  })

  .state('tabsController.programaciNDiaria', {
    url: '/page5/:dia',
    views: {
      'tab3': {
        templateUrl: 'templates/programaciNDiaria.html',
        controller: 'programaciNDiariaCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('programasGrabados', {
    url: '/page11',
    templateUrl: 'templates/programasGrabados.html',
    controller: 'programasGrabadosCtrl'
  })

  .state('tabsController.tituloDeNoticia', {
    url: '/page9/:id',
    views: {
      'tab4': {
        templateUrl: 'templates/tituloDeNoticia.html',
        controller: 'tituloDeNoticiaCtrl'
      }
    }
  })

  .state('cambiarContraseA', {
    url: '/page10',
    templateUrl: 'templates/cambiarContraseA.html',
    controller: 'cambiarContraseACtrl'
  })

$urlRouterProvider.otherwise('/page6')


});