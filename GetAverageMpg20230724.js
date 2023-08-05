// Create a method that takes a list of vehicles and averages their MPG

// vehicle: { 
//     year: "2020",
//     make: "Toyota",
//     model: "Prius",
//     mpg: 20,
// }

const getAverageMpg = (vehicles) => {

    const averageMpgOfAllVehicls = vehicles.reduce((runningTotal, vehicle) => {
        return runningTotal + vehicle.mpg;
    }, 0) / vehicles?.length ?? 0;

    return averageMpgOfAllVehicls;
}