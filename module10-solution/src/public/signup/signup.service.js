(function() {
	'use strict';

	angular.module('public')
	.service('SignupService', SignupService);

	SignupService.$inject = ['$http'];

	function SignupService ($http) {
		var signup = this;


		signup.validateDish = function(favorite) {
			var category = favorite.replace(/[^A-Z]/g, '');
			var number = favorite.replace(/[^0-9]/g, '');

			console.log(category);
			console.log(number);

			return $http({
					method: "GET",
					url:("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + category + "/menu_items/" + number + ".json")
			}).then(function(response) {
				return response.data;
			}).catch(function(error) {
				console.log("error");
			})
		};

	}
})();