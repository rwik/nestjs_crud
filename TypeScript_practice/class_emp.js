"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emp = /** @class */ (function () {
    function Emp(param1, param2, param3, param4) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.param4 = param4;
        this.fullName = param1;
        this.age = param2;
        this.empId = param3;
        this.sallery = param4;
    }
    Object.defineProperty(Emp.prototype, "_name", {
        set: function (param1) {
            this.fullName = param1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_age", {
        set: function (param2) {
            this.age = param2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emp.prototype, "_empId", {
        set: function (param3) {
            this.empId = param3;
        },
        enumerable: true,
        configurable: true
    });
    Emp.prototype.printDetails = function () {
        console.log("Name is " + this.fullName);
        console.log("Age is " + this.age);
        console.log("Id is " + this.empId);
    };
    return Emp;
}());
exports.Emp = Emp;
var empObj = new Emp("Rwik", 1, 1, 1);
empObj.printDetails();
//# sourceMappingURL=class_emp.js.map