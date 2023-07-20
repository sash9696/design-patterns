// With the Proxy pattern, we don't want to interact with this object directly.
// Instead, a Proxy object intercepts the request, and (optionally) forwards
// this to the target object - the person object in this case.

const person = {
	name: "John",
	age: 30,
	city: "Delhi",
};

// const proxyPerson = new Proxy(person, {
//     get: (target, prop) => {
//         // console.log(target, prop)
//         console.log(`The value of ${prop} is ${target[prop]}`);
//         return target[prop];
//     },
//     set: (target, prop, value) => {
//         console.log(target, prop)
//         console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
//         target[prop] = value;
//         return true;
//     }
// })
// proxyPerson.name

//better way and readibilty is ti use inbuilt Reflect object

const proxyPerson = new Proxy(person, {
	get: (target, prop) => {
		return Reflect.get(target, prop);
	},
	set: (target, prop, value) => {
		return Reflect.set(target, prop, value);
	},
});
console.log(proxyPerson.name);

// Control: Proxies make it easy to add functionality when interacting with 
// a certain object, such as validation, logging, formatting, notifications,
//  debugging.

// Long handler execution: Executing handlers on every object interaction 
// could lead to performance issues.

