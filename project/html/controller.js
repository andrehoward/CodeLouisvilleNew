		$http.get('/contactlist').then(function(response){
        console.log("recibí los datos: "+response.data);
        $scope.contactList = response.data;
		
		
	
	Person1 ={
			Name: 'Tim,
			email: 'tim@gmail.com',
			number: (502)555-5555,
			};
			
	Person2 ={
			Name: 'Tom,
			email: 'tom@gmail.com',
			number: (502)555-5555,
			};
			
	Person3 ={
			Name: 'ann,
			email: 'ann@gmail.com',
			number: (502)555-5555,
			};
			
			var contactlist = [person1, person2, person3];
			$scope.contactlist = contactlst;
			
			
			
			
			)
);
