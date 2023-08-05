function grid_paths(m, n) {
    // if (!Number.isInteger(m) || !Number.isInteger(n)) {
    //     throw new Error("Both m and n must be integers");
    // }
    // if (m <= 0 || n <= 0) {
    //     throw new Error("Both m and n must be greater than 0");
    // }
    if(m <= 1 || n <= 1) {
        return 1;
    }
    else {
        return grid_paths(m, n - 1) + grid_paths(m - 1, n);
    }
}


console.log(grid_paths(5,50));