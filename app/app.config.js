/**
 * Created by negr on 6/28/2017.
 */
'use strict';
angular.module('tryangular')
    .config(
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({ enabled: true });
            $routeProvider
                .when("/", {
                    template: "<blog-list></blog-list>"
                })
                .when("/about", {
                    templateUrl: "/about.html"
                })
                .when("/blog/1", {
                    template: "<h1>Hi</h1>"
                })
                .when("/blog/2", {
                    template: "<h1>H1 22</h1>"
                })
                .otherwise({
                    template: "Not Found"
                })

} );