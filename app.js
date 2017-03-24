(function() {
    "use strict";

    angular.module('app', ['ng', 'ui.router']);

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('feed', {
                url: '/',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'partials/header.html'
                    },
                    'content': {
                        template: '<div ui-view></div>'
                    }
                }
            })
            .state('feed.list', {
                url: '',
                views: {
                    'content@': {
                        templateUrl: 'partials/list.html',
                        controller: 'FeedListController',
                        controllerAs: 'feedList'
                    }
                }
            });

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
    }]);

    angular.module('app').controller('FeedListController', ['serviceFeed', function(serviceFeed) {
        var ctrl = this;

        ctrl.photos = [{
            "title": "Blue river",
            "url": "http://farm9.static.flickr.com/8305/7893507666_0d25cd9f30.jpg",
            "date": "Thu, 30 Aug 2012 10:41:00 -0400"
        }, {
            "title": "Dangerously beautiful paths",
            "url": "http://farm8.static.flickr.com/7275/7550745422_3e323cd79e.jpg",
            "date": "Thu, 12 Jul 2012 03:27:00 -0400"
        }, {
            "title": "Silver curve",
            "url": "http://farm8.static.flickr.com/7006/6453535439_b6ac71d303.jpg",
            "date": "Mon, 05 Dec 2011 11:18:00 -0500"
        }, {
            "title": "On the other side",
            "url": "http://farm8.static.flickr.com/7158/6399857349_b9865fb2ce.jpg",
            "date": "Sat, 26 Nov 2011 00:45:00 -0500"
        }, {
            "title": "Derborence lake inspired.. :)",
            "url": "http://farm7.static.flickr.com/6104/6357185863_d043645a12.jpg",
            "date": "Fri, 18 Nov 2011 07:40:19 -0500"
        }, {
            "title": "Late sun",
            "url": "http://farm7.static.flickr.com/6221/6318336935_d6d54f85f6.jpg",
            "date": "Sun, 06 Nov 2011 10:52:00 -0500"
        }, {
            "title": "Is it missing something?",
            "url": "http://farm7.static.flickr.com/6050/6279664899_f411cfb402.jpg",
            "date": "Tue, 25 Oct 2011 10:12:02 -0400"
        }, {
            "title": "Snow princess..:)",
            "url": "http://farm7.static.flickr.com/6159/6263221527_6f629d6df7.jpg",
            "date": "Thu, 20 Oct 2011 17:00:00 -0400"
        }];
    }]);

    $(function() {
        console.log('DOM is ready...');
        angular.bootstrap(document.body, ['app']);
    });

})();