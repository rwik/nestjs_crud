export class Emp{
    fullName : string
    age : Number
    empId: Number
    sallery: Number
    constructor(public param1:string,public param2:Number,public param3:Number,public param4:Number,)
    {
        this.fullName = param1
        this.age = param2
        this.empId = param3
        this.sallery = param4
    }
    set _name(param1:string){
        this.fullName = param1
    }
    set _age(param2:Number){
        this.age = param2
    }
    set _empId(param3:Number){
        this.empId = param3
    }
    printDetails(){
        console.log("Name is "+this.fullName)
        console.log("Age is "+this.age)
        console.log("Id is "+this.empId)
    }
}

let empObj  = new Emp("Rwik",1,1,1)
empObj.printDetails()
