var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    
    while (p2 >= 0) {
    console.log(`START: p1: ${p1}, p2: ${p2}, p: ${p}`);
    
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            console.log("p1 decrease", p1);
            p1--;
        } else {
            nums1[p] = nums2[p2];
            console.log(`nums1[${p}] = nums2[${p2}]`);
            p2--;
            console.log("p2 decrease", p2);
        }


        p--;
        console.log(`END: p1: ${p1}, p2: ${p2}, p: ${p}`);
        console.log(`new nums1`, nums1);
        console.log("==================")
    }
};