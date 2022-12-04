function blood(x,y){
    const AP = ["A+","AB+"];
    const BP = ["B+","AB+"];
    const ABP = ["AB+"];
    const OP = ["O+","A+","B+","AB+"];
    const AN = ["A-","A+","AB-","AB+"];
    const BN = ["B-","B+","AB-","AB+"];
    const ABN = ["AB-","AB+"];
    const ON = ["O-","O+","A-","A+","B-","B+","AB-","AB+"];

    if (x == "A+" && AP.includes(y)){
        return true;}
    if (x == "B+" && BP.includes(y)){
        return true;}
    if (x == "AB+" && ABP.includes(y)){
        return true;}
    if (x == "O+" && OP.includes(y)){
        return true;}
    if (x == "A-" && AN.includes(y)){
        return true;}
    if (x == "B-" && BN.includes(y)){
        return true;}
    if (x == "AB-" && ABN.includes(y)){
        return true;}
    if (x == "O-" && ON.includes(y)){
        return true;}
    else {return false;}
}
console.log("use capital letters");
console.log("it is possible for O+ to donate to A+ : ", blood("O+", "A+"));
console.log("it is possible for A- to donate A+ : ", blood("A-", "B-"));
console.log("it is possible for O+ to donate O : ", blood("A-", "AB+"));
