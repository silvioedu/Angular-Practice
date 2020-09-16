var num1:number = 1

function varDeclaration() {
    var num2:number = 2

    if (num2 > num1) {
        var num3:number = 3
        num3++
    }

    while (num1 < num2) {
        var num4:number = 4;
        num1++;
    }

    console.log("num1: " + num1)
    console.log("num2: " + num2)
    console.log("num3: " + num3)
    console.log("num4: " + num4)
}

varDeclaration()