// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,would you like to learn some python today?
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let personName: string = "Eric";
// console.log(`Hello ${personName},would you like to learn some python today?`);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName: string = "kelash";
// in lowercase
// console.log("lowercase:",personName.toLowerCase());
// in uppercase
// console.log("uppercase:",personName.toUpperCase());
// title case
// console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));
4;
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said,"${quote}"`);
5.;
// let quote: string = "A person who never made a mistake never tried anything new.";
// let famous_person: string = "Abert Einstein";
// let message: string = `${famous_person} once said,"${quote}"`;
// console.log(message);
6.;
// let personName: string = "\t\n   Kelash Kumar \n\t";
// console.log("Original:", personName);
// console.log("Stripped:", personName.trim());
7.;
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
8.;
// let favriteNumber: number = 8;
// console.log(`My favourite number is ${favriteNumber}.`);
9.;
// author[kelash kumar]
// date[Monday,febuary 12 ,2024]
// task 9: printing my favourite number.
// let favriteNumber: number = 8;
// revelling my favourite number in a message format.
// console.log(`My favourite number is ${favriteNumber}.`);
10;
// let names : string [] = ["Kelash","Abdullah","Rehman","Sawai" ];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// let names : string [] = ["Kelash","Abdullah","Rehman","Sawai" ];
// let message: string = "do you like to play cricket?";
// console.log(names[0] +" " + message);
// console.log(names[1] +" " + message);
// console.log(names[2] +" " + message);
// console.log(names[3] +" " + message);
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation : string [] = ["Honda motorcycle","Audi","Honda city"];
// transportation.map((items) => console.log(`I would like to own a ${items}`));
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestArr : string [] = ["Raja","Parkash","Mohan lal"];
// guestArr.map((items) => (console.log(`Dear ${items} , you are invited to the dinner`)));
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// let guestArr : string [] = ["Raja","Parkash","Mohan lal"];
// let canNotAttend = "Raja";
// console.log(canNotAttend + " " + "can not attend the dinner.")
// let newGuest = "Kelash"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, you are invited to the dinner.`))
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// part 1
// let guestArr : string [] = ["Raja","Parkash","Mohan lal","Jai"];
// let canNotAttend = "Parkash"
// let newGuest = "Kelash"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, Ifound a bigger dinner table so I am invited more peoples.`));
// part 2 began
// let gestBeg : string = "Bhawesh"
// guestArr.unshift(gestBeg)
// console.log(guestArr)
// part 3 middle
// let middleGuest : string = "Jaswant"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,3,middleGuest)
// console.log(guestArr)
// part 4 append
// guestArr.push("moolchand")
// console.log(guestArr)
// part 5
// guestArr.map((items) =>
// console.log(`Dear ${items}, you are invited in the more people list on dinner`));
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
// let guests : string [] = ["Raja","Parkash","Mohan lal","Jai","Bhawesh"];
// Informing that only two people can be invited
// console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guests untill only two people can be invited
// while(guests.length > 2){
//     const removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner`);
// }
// let guests : string [] = ["Raja","Parkash"];
// //  printing invitations to the remaining two guests
//    guests.forEach((guest) =>{
//        console.log(`Dear, ${guest}, you are still invited to the dinner.`);
//    });
// //    removing the last two names from the list
//       guests.pop();
//       guests.pop();
//     //  printing the final list to the confirm it is empty
//     console.log("final guest list:", guests);
//     18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let placesToVisit: string [] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// console.log("Original order:", placesToVisit);
// console.log("Alphabetical order:", [...placesToVisit].sort());
// console.log("Original order after sorting:", placesToVisit);
// console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// console.log("Original order after reverse sorting:", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Back to original order:", placesToVisit);
// placesToVisit.sort();
// console.log("Sorted in alphabetical order:", placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted IN reverse alphabetical order:", placesToVisit);
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
// let invitations: string [] = ["Raja","Parkash"]
// let count_invitations: number = invitations.length
// console.log(`${count_invitations} people will come to the dinner`)
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
// let countries: string []=["America","England","Japan","India"]
// console.log("list of countries")
// console.log(countries)
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let person:{name: string, fname: string, age: number } = {name:"Fatima", fname:"female", age:28}
// console.log(person)
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// const days: string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// console.log(days{7})
// console.log(days[6])
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car = "subaru";
// console.log("Is car == 'subaru'? predict true")
// console.log(car == 'subaru')
// console.log("is car != 'Honda city'? predict true")
// console.log(car != 'Honda city')
// console.log("is car == 'subaru'? predict false")
// console.log(car == 'subaru')
// console.log("is car == 'SUBARU'? predict false")
// console.log(car == 'SUBARU')
// console.log("is car.length == 6? predict true")
// console.log(car.length == 6)
// console.log("is car.length !== 10? predict true")
// console.log(car.length !== 10)
// console.log("is 10 > 45 ? predict false")
// console.log(10 > 45)
// console.log("is 3 <= 2 ? predict false")
// console.log(3 <= 2)
// console.log("is 72 > 83 ? predict false")
// console.log(72 > 83)
// console.log("is car =='subaru'&& car.length ==6? predict true")
// console.log(car == 'subaru' && car.length == 6)
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var name_1 = "Deewan";
var name_2 = "Deewan kelash";
var name_3 = " kelash kumar";
// if(name_1 == name_3){
//     console.log("names are equal")
// } else{
//     console.log("names are not equal")
// }
// if(name_1 != name_2){
//     console.log("names are equal")
// } 
// if(name_1 != name_3){
// console.log("names are equal")
// } 
var age_1 = 18;
var age_2 = 22;
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { colour: "silver", year: "2024" });
console.log(mycar);
