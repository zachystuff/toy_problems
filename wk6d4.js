var intake = {
    day: "monday",
    donuts: 5,
    next: {
        day: "tuesday",
        donuts: 3,
        next: {
            day: "wednesday",
            donuts: 9,
            next: {
                day: "thursday",
                donuts: 17,
                next: null
            }
        }
    }
}


function countAllDonuts(node) {

    //create total variable
    let total = 0;
    //base cases
    if(node.donuts) {
        total += node.donuts
    }

    if(node.next) {
        total += countAllDonuts(node.next);
    }

    //return total variable
    return total;
}

console.log(countAllDonuts(intake));