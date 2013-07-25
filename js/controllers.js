'use strict';

/* Controllers */

function SwitchCtrl($scope) {
    $scope.choice = "skew";
    $scope.options = { "skew" : "Skew", "scale" : "Scale", "cube" : 'Cube',"rotate" : 'Rotate', "slide" : 'Slide'};

}

function RepeatCtrl($scope) {
    $scope.cnt = 1;
    $scope.artists = ['ABBA','Pink Floyd','Bee Gees','Fleetwood Mac','The Cars','Blondie',
        'The Go Go\'s','Rush','Electric Light Orchestra'];
    $scope.addItem = function() {
        $scope.artists.push("New Artist " + $scope.cnt++);
    };

}

function ShowCtrl($scope) {
    $scope.right = false;
}
