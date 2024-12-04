(function () {
	'use strict';

	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ['SignupService', 'UserService'];
	function SignupController(SignupService, UserService) {
		var reg = this;

		reg.user = {};

		reg.validateDish = function () {
			var favorite = reg.user.favoritedish;

			SignupService.validateDish(favorite).then(function(result) {
				reg.hasSearched = true;
				console.log(reg.hasSearched);

				if (result) {
                	reg.foundItem = true;
                	reg.user.itemDetails = result;
                    reg.user.itemCategory = favorite.slice(0, 1);
                    reg.user.itemDescription = result.description;
                    console.log(reg.foundItem);
				}
                else {
                    reg.foundItem = false;
                }
			})
		}

		reg.submit = function() {
			if (reg.foundItem) {
				UserService.saveUser(reg.user);
				reg.hasSaved = true;
			}
		}
		
	}
})();