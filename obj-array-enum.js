"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY_USER"] = "READ_ONLY_USER";
})(Role || (Role = {}));
;
var person = {
    name: "asshwin",
    age: 20,
    hobbies: ["sports", "biking"],
    roles: Role.ADMIN
};
var favouriteActivities;
favouriteActivities = [1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.roles === Role.ADMIN) {
    console.log("Apporva", "admin");
}
