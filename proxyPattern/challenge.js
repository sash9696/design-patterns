import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
	firstName: "John",
	lastName: "Doe",
	username: "johndoe",
	age: 42,
	email: "john@doe.com",
};

const proxyUser = new Proxy(user, {
	get: (target, property) => {
		return `${new Date()} | The value of ${property}} is ${Reflect.get(
			target,
			property
		)}`;
	},
	set: (target, property, value) => {
		if (property == "email") {
			if (!isValidEmail(value)) {
				console.log("Please provide a valid email.");
				return false;
			}
		}
		if (property == "username") {
			if (value.length < 3) {
				throw new Error("Please use a longer username.");
			} else if (!isAllLetters(value)) {
				throw new Error("You can only use letters");
			}
		}
		if (property == "age") {
			if (typeof value !== number) {
				throw new Error("Please provide a valid age.");
			}
			if (value < 18) {
				throw "User cannot be younger than 18.";
			}
		}
		return Reflect.set(target, property, value);
	},
});

console.log(proxyUser.firstName);

proxyUser.email =  "peter@yahoo.com";
console.log(proxyUser.email);

