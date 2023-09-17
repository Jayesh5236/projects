// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
import { john, peter } from "./4-names.js";
import sayHi from "./5-utils.js";

sayHi("Susan");
sayHi(john);
sayHi(peter);
