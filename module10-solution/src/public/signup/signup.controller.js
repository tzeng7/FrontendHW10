(function () {
	'use strict';

	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ['$http', 'UserService'];
	function SignupController($http, UserService) {
		var reg = this;

		reg.user = {};
		reg.validateDish = function (categoryShortName) {
			var number = categoryShortName.slice(1) - 1;
			reg.completed = true;
			return $http({
					method: "GET",
					url:("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName.slice(0, 1) + "/menu_items/" + number + ".json")
			}).then(function(response) {
				console.log(response.data);
				if (response.data == null) {
					reg.hasSearched = true;
					reg.foundItem = false;
				} else {
					reg.hasSearched = true;
					reg.foundItem = true;
					reg.user.itemDetails = response.data;
					reg.user.itemCategory = categoryShortName.slice(0, 1);
					reg.hasSaved = true;
				}
				return response.data;
			}).catch(function(error) {
				console.log("error");
				reg.foundItem = false;
			})
		};


		reg.submit = function() {
			if (reg.foundItem) {
				UserService.saveUser(reg.user);
			}
		}
		
	}
})();