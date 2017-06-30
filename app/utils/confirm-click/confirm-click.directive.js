'use strict';

angular.module('confirmClick')
    .directive('confirmClick', function () {
        return {
            scope: {
                message: '@message',
                eq: '=eq',
                post: '=post'
            },
            restrict: 'E',
            template: '<a ng-href="/blog/{{post.id}}">{{post.title}}</a>',
            link: function (scope, element, attr) {
                console.log(scope.post);
                // console.log(element);
                // console.log(attr);
            }
        }
    });