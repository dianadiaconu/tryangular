'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: '/blog-detail/blog-detail.html',
        controller: function (Post, $http, $location, $routeParams, $scope) {

            Post.query(function (data) {
                $scope.notFound  = true;
                angular.forEach(data, function (post) {
                    if (post.id == $routeParams.id) {
                        $scope.post = post;
                    }

                })
            });

            //$http.get("/json/posts.json").then(successCallback, errorCallback);

            // function successCallback(response, status, config, statusText) {
            //     $scope.notFound = true;
            //     console.log(response);
            //     $scope.posts = response.data;
            //     angular.forEach($scope.posts, function (post) {
            //         if (post.id == $routeParams.id) {
            //             $scope.notFound  = false;
            //             $scope.post = post;
            //         }
            //
            //     })
            // }
            //
            // function errorCallback(response, status, config, statusText) {
            //     $scope.notFound = true;
            //     console.log(response);
            // }

            if ($scope.notFound) {
                // change location
                $location.path("/404");
                console.log("Not found");

            }



            // var blogItems = [
            //     {title: "Some title 1", id: 1, description: "This is a description", publishDate: "12-06-2017"},
            //     {title: "Some title 2", id: 2, description: "This is a description"},
            //     {title: "Some title 3", id: 3, description: "This is a description"},
            //     {title: "Some title 4", id: 4, description: "This is a description"}
            // ];
            //
            // $scope.title = "Blog " + $routeParams.id;
            //
            //
            // angular.forEach(blogItems, function (post) {
            //     if (post.id == $routeParams.id) {
            //         $scope.notFound = false;
            //         $scope.post = post;
            //     }
            // });



        }
    });
