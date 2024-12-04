describe('signup', function () {

  var signup;
  var $httpBackend;

  beforeEach(function () {
    module('public');

    console.log('added public');
    inject(function ($injector) {
    	console.log('hello');
      signup = $injector.get('SignupService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('should return orange chicken', function() {
  	user = {
  		description: 'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra',
		name: "Orange Chicken",
		price_large: 9.75,
		short_name: "L1"
  	}
    $httpBackend.whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/0.json').respond(user);
    signup.validateDish("L1").then(function(response) {
    	console.log(response);	
      expect(response).toEqual(user);
    });
    $httpBackend.flush();
  });

  it('should return null', function() {
  	$httpBackend.whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/a/menu_items/0.json').respond(null);

  	signup.validateDish("a1").then(function(response) {
  		console.log(response);
  		expect(response).toEqual(null);
  	});
  	$httpBackend.flush();
  });

});
