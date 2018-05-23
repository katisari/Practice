var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].name);
console.log(users[0]);

var result = "";
for (var i = 0; i < users.length; i ++){
    results = users[i].name + ' - ' + users[i].age;
    console.log(results);
    results = "";
}
