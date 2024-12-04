describe('public', function() {
	it ('should load if public', function() {
		expect(function() {
			angular.module('public');
		}).not.toThrow();
	});
});

describe('SignupController', function () {
	var reg;
	var $httpBackend;
	var UserService;

	console.log('testing');

	beforeEach(function() {
		console.log('injections');

		module('public');
		module('ngMock');

		inject(function($injector, $controller) {
			console.log('injections');
			$httpBackend = $injector.get('$httpBackend');
			UserService = $injector.get('UserService');
			reg = $controller('SignupController');

		});
	});

	it('test', function() {
		console.log($httpBackend);
		user = {
			description: "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
			name: "Orange Chicken",
			price_large: 9.75,
			short_name: "L1"
		}
		$httpBackend.whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/0.json').response(user);
		$httpBackend.flush();
	});

});

