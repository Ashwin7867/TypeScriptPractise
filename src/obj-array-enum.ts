enum Role {ADMIN="ADMIN", READ_ONLY_USER="READ_ONLY_USER"};

const person  = {
    name : "asshwin",
    age : 20,
    hobbies : ["sports","biking"],
    roles : Role.ADMIN
}

let favouriteActivities : any[];
favouriteActivities= [1]

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.roles===Role.ADMIN){
    console.log("Apporva","admin")
}