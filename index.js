import inquirer from "inquirer";
let myBalance = 90000;
let myPassword = 1996;
let pinAnswer = await inquirer.prompt([
    {
        name: "password",
        type: "number",
        message: "Enter your password",
    },
]);
if (pinAnswer.password === myPassword) {
    console.log("Your Password is correct!!");
    let myMessage = await inquirer.prompt([
        {
            name: "balance",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(myMessage);
    if (myMessage.balance === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your balance is insufficient");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
    }
    else if (myMessage.balance === "check balance") {
        console.log("Your balance is:" + myBalance);
    }
    else if (myMessage.balance === "fast cash") {
        let myCash = await inquirer.prompt([
            {
                name: "cash",
                message: "select your amount",
                type: "list",
                choices: [30000, 40000, 80000, 10000],
            },
        ]);
        myBalance -= myCash.cash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else {
        console.log("Your password is incorrect!!");
    }
}
