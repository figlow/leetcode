/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let count = 0;
    for(let i=0,l=prices.length;i<=l;i++){
        for(let j=i;j<=l-1;j++){
            if(prices[j+1]>prices[j]){
                count+=prices[j+1]-prices[j]
                i=j
               
            }
            else{
        
                i=j;
                break

            }
        }
    }
    return count;

};
let price=[7,1,5,3,6,4]
let a = maxProfit(price)
console.log(a)
//贪心算法 leetcode 122题
