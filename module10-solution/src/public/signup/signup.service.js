(function() {
	'use strict';

	angular.module('public')
	.service('SignupService', SignupService);

	SignupService.$inject = ['$http'];

	function SignupService ($http) {
		var signup = this;


		signup.validateDish = function(favorite) {
			var number = favorite.slice(1)-1;
			return $http({
					method: "GET",
					url:("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + favorite.slice(0, 1) + "/menu_items/" + number + ".json")
			}).then(function(response) {
				return response.data;
			}).catch(function(error) {
				console.log("error");
			})
		};

	}
})();