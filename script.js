function mincost(arr) { 
    let ans = 0;
    
    // FIX: Change loop condition from == 1 to > 1
    while (arr.length > 1) {
        const minValue1 = Math.min(...arr);
        const minIndex1 = arr.indexOf(minValue1);
        arr.splice(minIndex1, 1);
        
        const minValue2 = Math.min(...arr);
        const minIndex2 = arr.indexOf(minValue2);
        arr.splice(minIndex2, 1);
        
        let temp = (minValue1 + minValue2);
        arr.push(temp);
        ans += temp;
    }
	
    return ans;
}

module.exports = mincost;