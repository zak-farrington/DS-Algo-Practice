
// Two nested loops algorithmic complexity is O(n^2)
// | x\y | 0 | 1 | 2 | 3 |
// |-----|---|---|---|---|
// | 0   |   | x | x | x |
// | 1   |   |   | x | x |
// | 2   |   |   |   | x |
// | 3   |   |   |   |   |

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    var highestProfit = 0;
    for(var x = 0; x < prices.length; x++) {
        var buyDayPriceValue = prices[x];

        for(var y = x+1; y < prices.length; y++) {
            var sellPriceDayValue = prices[y];
            if(sellPriceDayValue > buyDayPriceValue)
            {
                var currentProfit = sellPriceDayValue - buyDayPriceValue;
                if(highestProfit == 0 || currentProfit > highestProfit) {
                    highestProfit = currentProfit;
                }
            }
        }
    }

    return highestProfit;
};