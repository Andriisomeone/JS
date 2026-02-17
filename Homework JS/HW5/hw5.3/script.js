const cylinderArea = (r, h) => {
    return 2 * Math.PI * r * (r + h);
};


let r = 5;
let h = 10;


let result = cylinderArea(r, h);


console.log("Площа поверхні циліндра:", result);
