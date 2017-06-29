'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: '/blog-detail/blog-detail.html',
        controller: function ($routeParams, $scope) {
            var blogItems = [
                {title: "Some title 1", id: 1, description: "This is a description"},
                {title: "Some title 2", id: 2, description: "This is a description"},
                {title: "Some title 3", id: 3, description: "This is a description"},
                {title: "Some title 4", id: 4, description: "This is a description"}
            ];

            $scope.title = "Blog " + $routeParams.id

        }
    });
