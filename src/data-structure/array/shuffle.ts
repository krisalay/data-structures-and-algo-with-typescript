function shuffle(nums: number[], n: number): number[] {
    let p1 = 1;
    let p2 = n;
    let var1 = nums[p1];
    let var2 = nums[p2];
    while (p1 < 2*n && p2 < 2*n) {
        if (p1 % 2 === 1) {
          nums[p1] = var2;
          ++p1;
          ++p2;
        } else {
          const temp = nums[p1];
          var2 = nums[p2];
          nums[p1] = var1;
          var1 = temp;
          ++p1;
        }
    }
    return nums;
  };

console.log(shuffle([100,200,300,400, 500, 600], 3));


// start t=0, p1=1, p2=3                        [100,200,300,400,500,600]
// start loop
// odd   t=1, p1=1, p2=3, var1=200, var2=400    [100,400,300,400,500,600]         var1=200, var2=400 p1=2,p2=4
// even  t=2, p1=2, p2=4, var1=200, var2=400    [100,400,200,400,500,600]         var1=300, var2=500 p1=3,p2=4
// odd   t=3, p1=3, p2=4, var1=300, var2=500    [100,400,200,500,500,400]         var1=300, var2=600 p1=4,p2=5
// even  t=4, p1=4, p2=5, var1=300, var2=600    [100,400,200,500,300,400]         var1=500, var2=600 p1=5,p2=5
// odd   t=5, p1=5, p2=5, var1=500, var2=600    [100,400,200,500,300,600]         var1=500, var2=400 p1=6,p2=6