//basic implementation
// Implementation
// We can export a singleton Observer object, which contains a notify,
// subscribe, and unsubscribe method.

const observers = [];

export default Object.freeze({
    notify: (data) => {
        observers.forEach((observer) => {
            observer(data);
        })
    },
    subscribe: (func) => {
        observers.push(func);
    },
    unsubscribe: (func) => {
        [...observers].forEach((observer,index) => {
            if(observer === func){
                observers.splice(index,1);
            }
        })
    }
});
// We can use this observable throughout the entire application, making 
//it possible to subscribe functions to the observable