let num1:number = 1

function varDeclaration() {
    let num2:number = 2

    if (num2 > num1) {
        let num3:number = 3
        num3++
    }

    while (num1 < num2) {
        let num4:number = 4;
        num1++;
    }

    console.log("num1: " + num1)
    console.log("num2: " + num2)
    console.log("num3: " + num3) //Compile error
    console.log("num4: " + num4) //Compile error
}

varDeclaration()