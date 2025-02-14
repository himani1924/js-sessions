// Define an interface User with the following properties: 
// id(number), name(string), email(string), age(number optional)
interface User{
    id : number,
    name : string,
    email : string,
    age? : number
}



// Create a class UserManager with:
class UserManager{
    // A private array users: User[] to store user data.
    private users: User[] = [];
    // A method addUser(user: User): void that adds a new user.
    addUser(user: User){
        this.users.push(user);
    }
    // A method removeUser(id: number): void that removes a user by ID.
    removeUser(id:number){
        for(let i=0;i<this.users.length;i++){
            if(this.users[i].id === id){
                this.users.splice(i, 1);
                break;
            }
        }
    }
    // A method getUser(id: number): User | undefined that retrieves a user by ID.
    getUser(id:number): User | undefined{
        for(let user of this.users){
            if(user.id === id){
                return user;
            }
        }
    }
    // A method getAllUsers(): User[] that returns all users.
    getAllUsers(): User[]{
        return this.users;
    }

    getAllUserGreet=()=>{
        for(let user of this.users){
            let {name} = user;
            console.log(`Hello, ${name}!`);
        }

    }
    getUserGreet = (name: string = "Guest"): string => {
        return `Hello, ${name}!`;
    }
    // Create a function printUserDetails(user: User): void that logs user details using object destructuring.
    printUserDetails(user: User): void{
        let {id, name, email, age} = user;
        console.log(`ID: ${id}, Name: ${name}, Email: ${email}, Age: ${age}`);
    }

}
let user1: User ={
    id: 1,
    name: "Himani",
    email: "himani@example.com",
    age: 22
}
let user2: User ={
    id: 2,
    name: "Lakshit",
    email: "lakshit@example.com",
    age: 23
}
let user3: User ={
    id: 3,
    name: "Neha",
    email: "neha@example.com",
    age: 20
}

var users = new UserManager();
users.addUser(user1);
users.addUser(user2);
console.log(users);

users.removeUser(1);
console.log(users);

users.addUser(user3)
console.log(users.getAllUsers()); 

console.log(users.getUser(3));
console.log('------------------------------------');
users.getAllUserGreet()
console.log('------------------------------------');
console.log(users.getUserGreet("Himani"));
console.log(users.getUserGreet());
console.log('------------------------------------');
users.printUserDetails(user1);



// Use Arrow Functions & Default Parameters
// Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
