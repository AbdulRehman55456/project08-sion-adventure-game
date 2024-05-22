import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Please Select Your Opponent",
        choices: ["charsi", "powdri", "naswari"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "powdri") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do",
                choices: ["attack", "powder ki pouri", "run for your life"],
            },
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you lose, better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulations you win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "powder ki pouri") {
            p1.fuelincrease();
            console.log(`you take powder ki pouri your energy portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("You lose, better luck next time");
            process.exit();
        }
    }
    if (opponent.select === "charsi") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do",
                choices: ["attack", "charse ki pouri", "run for your life"],
            },
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you lose, better luck next time");
                    process.exit();
                }
            }
            if (num === 1) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulations you win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "charse ki pouri") {
            p1.fuelincrease();
            console.log(`you take charse ki pouri your energy portion  fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("You lose, better luck next time");
            process.exit();
        }
    }
    if (opponent.select === "naswari") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do",
                choices: ["attack", "naswar ki pouri", "run for your life"],
            },
        ]);
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you lose, better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("congratulations you win");
                    process.exit();
                }
            }
        }
        if (ask.opt === "naswar ki pouri") {
            p1.fuelincrease();
            console.log(`you take naswar ki pouri portion your fuel is ${p1.fuel}`);
        }
        if (ask.opt === "run for your life") {
            console.log("You lose, better luck next time");
            process.exit();
        }
    }
} while (true);
