angular
  .module('app', ['ngRoute', 'firebase'])
  .controller('MyCtrl', MyController)
  .config(ApplicationConfig);

function ApplicationConfig($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MyCtrl as ctrl',
    templateUrl: 'views/myctrl.html'
  })
}

function MyController() {

}
