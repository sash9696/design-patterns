import logger from "./logger.js";
import Observable from "./observable.js";



document.getElementById("my-button").addEventListener("click", () => {
    Observable.notify("Clicked!"); // Notifies all subscribed observers
  });