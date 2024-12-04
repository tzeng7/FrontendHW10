(function() {
	'use strict';

	angular.module('public')
	.service('UserService', UserService);

	function UserService() {
		var service = this;
		var data = null;

		service.saveUser = function(user) {
			data = user;
		}

		service.getUser = function() {
			return data;
		}
	}
})();