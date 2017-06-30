/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
       // template: " <div> <h1>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        templateUrl: 'blog-list/blog-list.html',
        controller: function (Post, $routeParams, $scope) {
            console.log($routeParams.id);

            $scope.items = Post.query();

            // var blogItems = [
            //     {title: "Some title 1", id: 1, description: "This is a description"},
            //     {title: "Some title 2", id: 2, description: "This is a description"},
            //     {title: "Some title 3", id: 3, description: "This is a description"},
            //     {title: "Some title 4", id: 4, description: "This is a description"},
            // ];

            // $scope.items = blogItems;

            console.log("hello from blogList controller");
            $scope.title = "Smth";
            $scope.count = 0;

            $scope.someClickTest = function () {
                $scope.count += 1;
                $scope.title = "Clicked " + $scope.count + " times";

            }
        }
});
