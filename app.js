(function() {
	'use strict';

	angular.module('zipWeather', ['ngMaterial'])
		.controller('ListController', ['$scope', '$http', function ($scope, $http) {

			var api_root = 'http://api.openweathermap.org/data/2.5/weather';
			var apiKey = '49309048de185f8093bd837b564ffd30';
			var countryCode = 'us';

			$scope.weatherData = null;
			$scope.loader = true;

			$scope.searchZip = function () {
				console.log("entered zip");
				$scope.weatherData = null;
				$scope.loader = false;

				$http({
					method: "GET",
					url: api_root,
					params: {
						zip: $scope.zipCode + ',' + countryCode,
					}
				}).success(function(data) {
					console.log('Data retrieved', data);
					$scope.loader = true;
					$scope.weatherData = data;
				}).catch(function (err) {
					console.log('Error Catch Hit');
					console.log(err.status);
				});
			};

			// $scope.searchZip = function () {
			// 	$http.json('http://api.openweathermap.org/data/2.5/weather?zip=07652,us').success(function(data) {
			// 		$scope.weatherData = data;
			// 	}).catch(function (err) {
			// 		console.log(err);
			// 	});
			// };

		}])

		.filter('capitalize', function() {
		  return function(input, scope) {
		    if (input!=null)
		    input = input.toLowerCase();
		    return input.substring(0,1).toUpperCase()+input.substring(1);
		  }
		});

})();