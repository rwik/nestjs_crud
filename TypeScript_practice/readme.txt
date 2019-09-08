Enable tslint. Linting warns you about potential issues.

To compile
rwik@Sapiens:~/Desktop/vault/nestjs_crud/TypeScript_practice$ tsc app.ts
rwik@Sapiens:~/Desktop/vault/nestjs_crud/TypeScript_practice$ node app.js 
Hi Rwik!

To generate sourcemap 
tsc --sourceMap true app.ts

Sourcemap maps between typescript with javascript. Used for debugging

you may add tslint.json ,specify rules, to get warnings properly.

Grunt is a js task runner. Can be used for task automation. you may add grunt rules in grunfile.js.

Jasmine is a unit testing framework. 
suite: is what is going to be tested.
specs: One or more expectations and assertions that are true or false.
Jasmine init #to start Jasmine


Error1 :
Accessors are only available when targeting ECMAScript 5 and higher.
sol:
tsc --sourceMap true class_emp.ts --target es5

Error2 :
Incomplete: No specs found
Sol: 
Add spec path in json
  "spec_files": [
    "**/emp-spec.js"

    



