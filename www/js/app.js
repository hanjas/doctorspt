// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ui.bootstrap.datetimepicker', 'ion-datetime-picker', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('top');

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.booking', {
        url: '/booking',
        views: {
          'menuContent': {
            templateUrl: 'templates/booking.html'
          }
        }
      })

      .state('app.doctor', {
        url: '/doctor',
        views: {
          'menuContent': {
            templateUrl: 'templates/doctor.html',
            controller: 'doctorCtrl'
          }
        }
      })

      .state('app.history', {
        url: '/history',
        views: {
          'menuContent': {
            templateUrl: 'templates/history.html',
            controller: 'HistoryCtrl'
          }
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html'
          }
        }
      })

      .state('app.aboutus', {
        url: '/aboutus',
        views: {
          'menuContent': {
            templateUrl: 'templates/aboutus.html'
          }
        }
      })

    //////////////////////////////////////////////////////////

    .state('app.booking.booking', {
      url: "/booking",
      views: {
        'tab-booking': {
          templateUrl: "templates/tabbooking.html",
          // controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.booking.bookinglist', {
      url: "/bookinglist",
      views: {
        'tab-bookinglist': {
          templateUrl: "templates/tabbookinglist.html",
          controller: 'BookingListCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/booking');
  });
