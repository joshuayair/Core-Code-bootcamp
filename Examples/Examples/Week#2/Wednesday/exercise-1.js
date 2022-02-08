function dutyFree(normPrice, discount, hol){
return Math.floor(1 / (normPrice * discount / 100) * hol);
}