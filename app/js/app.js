angular
  .module('app', ['ngRoute', 'firebase'])
  .constant('FirebaseUrl', 'https://bouldercodeplus.firebaseio.com')
  .service('rootRef', ['FirebaseUrl', Firebase])
  .service('users', Users)
  .controller('MyCtrl', MyController)
  .config(ApplicationConfig);

function ApplicationConfig($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MyCtrl as ctrl',
    templateUrl: 'views/myctrl.html'
  })
}

function Users(rootRef, $firebaseObject, $firebaseArray) {
  var usersRef = rootRef.child('users');
  this.get = function get(id) {
    return $firebaseObject(usersRef.child(id));
  }
  this.all = function all() {
    return $firebaseArray(usersRef);
  }
}

function MyController(users) {
  this.users = users.all();
}
