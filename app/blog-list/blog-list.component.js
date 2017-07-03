/**
 * Created by negr on 6/28/2017.
 */
'use strict';

angular.module('blogList')
    .component('blogList', {
       // template: " <div> <h1>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
        templateUrl: 'blog-list/blog-list.html',
        controller: function (Post, $rootScope, $routeParams, $location, $scope) {
            //console.log($routeParams.id);

            $scope.goToItem = function (item) {
                $rootScope.$apply(function () {
                    $location.path("/blog/" + item.id)
                })
            };

            $scope.changeCols = function (number) {
                if (angular.isNumber(number)) {
                    $scope.numCols = number;
                } else {
                    $scope.numCols = 2;
                }

                setupCol($scope.items, $scope.numCols);

            };


            $scope.loadingQuery = false;
            $scope.$watch(function () {
                if($scope.query) {
                    $scope.loadingQuery = true;
                    $scope.cssClass = 'col-sm-12'
                } else {
                    if ($scope.loadingQuery) {
                        setupCol($scope.items, 2)
                        $scope.loadingQuery = false;
                    }
                }
            });

            function setupCol(data, number) {
                if (angular.isNumber(number)) {
                    $scope.numCols = number;
                } else {
                    $scope.numCols = 2;
                }
                $scope.cssClass = 'col-sm-' + (12/ $scope.numCols);
                $scope.items = data;
                $scope.colItems = chunkArrayInGroups(data,  $scope.numCols);
            }

            // $scope.items = Post.query();
            $scope.items = Post.query(function (data) {
                setupCol(data, 2);

            }, function (errorData) {

            });

            function chunkArrayInGroups(array, unit) {
                var results = [];
                var length = Math.ceil(array.length / unit);

                for(var i = 0; i < length; i++) {
                    results.push(array.slice(i * unit, (i+1) * unit));
                }

                return results;
            }



            // var blogItems = [
            //     {title: "Some title 1", id: 1, description: "This is a description"},
            //     {title: "Some title 2", id: 2, description: "This is a description"},
            //     {title: "Some title 3", id: 3, description: "This is a description"},
            //     {title: "Some title 4", id: 4, description: "This is a description"},
            // ];

            // $scope.items = blogItems;

            // console.log("hello from blogList controller");
            // $scope.title = "Smth";
            // $scope.count = 0;
            //
            // $scope.someClickTest = function () {
            //     $scope.count += 1;
            //     $scope.title = "Clicked " + $scope.count + " times";
            //
            // }
        }
});
