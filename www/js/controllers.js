angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('doctorCtrl', function($scope, $stateParams) {
      $scope.doctors = [{
          name: 'Murukesh',
          category: 'Orthodox'
      },{
          name: 'Suhail',
          category: 'ENT'
      },{
          name: 'Hari Ram',
          category: 'Allergist'
      },{
          name: 'Rinoy',
          category: 'Dentist'
      }];
  })

  .controller('BookingListCtrl', function($scope, $stateParams) {
      $scope.bookings = [{
          tokenno: 30,
          date: '02.12.2016',
          time: '12:30pm',
          fees: '200rs'
      }, {
          tokenno: 10,
          date: '12.12.2016',
          time: '10:30pm',
          fees: '200rs'
      }, {
          tokenno: 60,
          date: '25.12.2016',
          time: '01:00pm',
          fees: '200rs'
      }, {
          tokenno: 30,
          date: '02.01.2017',
          time: '12:30pm',
          fees: '200rs'
      }];
  })
  .controller('HistoryCtrl', function($scope, $stateParams) {
      $scope.bookings = [{
          tokenno: 30,
          date: '02.12.2016',
          time: '12:30pm',
          fees: '200rs'
      }, {
          tokenno: 10,
          date: '12.12.2016',
          time: '10:30pm',
          fees: '200rs'
      }, {
          tokenno: 60,
          date: '25.12.2016',
          time: '01:00pm',
          fees: '200rs'
      }, {
          tokenno: 30,
          date: '02.01.2017',
          time: '12:30pm',
          fees: '200rs'
      }];
  });
