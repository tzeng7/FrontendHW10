(function() {
	'use strict';

	angular.module('public')
	.controller('InfoController', InfoController)

	InfoController.$inject = ['UserService']

	function InfoController(UserService) {
		var info = this;

	    info.data = UserService.getUser();

		if (!info.data) {
			info.signedUp = false;
		} else {
			info.signedUp = true;
		}
	}
})();