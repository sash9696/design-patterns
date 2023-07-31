import Observable from "./observable.js";

function logger(data) {
	console.log(`${Date.now()} ${data}`);
}

function logger2(data) {
	console.log(`got data: ${data} `);
}
function logger3(data) {
	console.log(`${new Date()} ${data}`);
}
function logger4(data) {
	console.log(`logging data: ${data}`);
}
Observable.subscribe(logger);
Observable.subscribe(logger2);
Observable.subscribe(logger3);
Observable.subscribe(logger4);

export default logger;
