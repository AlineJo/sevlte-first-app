<script>
	
	//1- using destructuring acheive the following:
	//  A-extract "make" and "color" into their own variables
	//  B- how would rename the variable "color" to "carColor" during destructuring.
	//  C- get the whole object except property "make"
	const car = {
		make: 'Toyota',
		model: 'Camry',
		year: 2023,
		features: {
			color: 'red',
			transmission: 'automatic',
			fuelType: 'gasoline',
		},
	};
	
	
	
	
	
	
	
	
	//2-clone/copy the above object
	
	
	
	
	//3-in the following function the the desired diff is 1000 ms. in order to acheive this write "waitOneSecond" to block the code for one second.
	
	(async function () {
		const startTime = Date.now();
		//await waitOneSecond();
		const endTime = Date.now();
		const diff= endTime - startTime; 
		console.log(`3 - Time difference: ${diff} ms`)
	})()
	
	
	
	
	//4-Consider the scenario where we want a sum function that can handle the following two types of invocation:
//sum(2,4)
//sum(2)(4)
//Both invocations should return the same result, 6 in this case.
	
	
	
	
	//5-Your task is to create a JavaScript function that transforms this list into an object. In the resulting object, each key should be a car make (e.g., 'Toyota', 'Honda', 'Nissan'), and each value should be a list of car objects of that make.
	//utilize array reduce for this.
	
	const cars = [
		{ make: 'Toyota', model: 'Camry', year: 2023 },
		{ make: 'Honda', model: 'Accord', year: 2022 },
		{ make: 'Toyota', model: 'Corolla', year: 2024 },
		{ make: 'Nissan', model: 'Sentra', year: 2022 },
		{ make: 'Honda', model: 'Civic', year: 2023 },
		{ make: 'Nissan', model: 'Altima', year: 2023 }
	];
	
	
	//6-utilize recursion to write a function that print the value of each item in the tree. It should do this in a depth-first way, meaning it prints an item's value, then it prints the values of all that item's children, from left to right, before moving on.
	
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'D',
          children: []
        },
        {
          value: 'E',
          children: []
        }
      ]
    },
    {
      value: 'C',
      children: [
        {
          value: 'F',
          children: []
        },
        {
          value: 'G',
          children: []
        }
      ]
    }
  ]
};



	
	

	
//7- in the forEach loop we are updating the retrieved users notified property to true and this update is reflected in the user API data because it shows in the second retrieve.
	//A- prevent changes in the retreived "users" data from reflecting in the source code.
	//B- getUserAPIMock is tightly coupled with sendEmailToUsers. How would you decouple them and why is it sometimes necessary to decouple functionalities? 
	
const getUserAPIMock = () => {
    const users = {
        1: { id: 1, name: 'Ahmed', email: 'Ahmed@example.com', notified:false },
        2: { id: 2, name: 'Said', email: 'Said@example.com',notified:false }
    };
    return {
			get:(id)=>users[id],
			markAsNotified:(id)=>users[id].notified = true,
		}
}

const sendEmailToUsers = (userIds) => {
	  const printUsers=(users)=>console.log(users.map((user)=>(`${user.name} is ${user.notified?"notified":"not notified"}`)).join(", "))
	
	  const userAPI = getUserAPIMock()
		
		//first user data retreive
    const users = userIds.map(userAPI.get);
	
    printUsers(users)
	  users.forEach((user)=>{
		   console.log(`Sending email to ${user.email}...`)
		   user.notified=true
	  });
	
	  //second user data retreive
		const usersUpdated = userIds.map(userAPI.get)
		printUsers(usersUpdated)
		
}


sendEmailToUsers([1,2]);

	
	
	
	
	
	
</script>

