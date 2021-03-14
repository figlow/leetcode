/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let a = 0;
    let b = height.length-1;
    let c = 0;
    while(a!=b){
    if(height[a]<height[b]){
       if(c<height[a]*(b-a))
          c=height[a]*(b-a)
        a++
    }
    else
    {
        if(c<height[b]*(b-a))
          c=height[b]*(b-a)
        b-- 

    }
    }
    return c

};
//盛最多水的容器 双指针解