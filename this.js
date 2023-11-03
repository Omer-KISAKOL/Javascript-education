const asya = {
    name: "Asya",
    funct: function () {
        console.log(this === asya);
        setTimeout(function() {
            console.log(this === asya);
            console.log(this === window);
        }, 2500 );
    }
}

console.log(asya.funct());