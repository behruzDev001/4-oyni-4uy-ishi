let age = prompt("Enter your age:");
if (isNaN(age)) {
    alert("Invalid input. Please enter a number.");
} else {
    age = Number(age);
    if (age < 18) {
        alert("You are a minor.");
    } else if (age >= 18 && age <= 60) {
        alert("You are an adult.");
    } else {
        alert("You are a senior citizen.");
    }
}

let choice = prompt("Enter a number from 1 to 4: \n1: Breakfast \n2: Lunch \n3: Dinner \n4: Snack");

if (isNaN(choice)) {
    alert("Invalid input. Please enter a number.");
} else {
    choice = Number(choice);
    switch (choice) {
        case 1:
            alert("You chose Breakfast.");
            break;
        case 2:
            alert("You chose Lunch.");
            break;
        case 3:
            alert("You chose Dinner.");
            break;
        case 4:
            alert("You chose Snack.");
            break;
        default:
            alert("Invalid choice. Please choose a number between 1 and 4.");
    }
}