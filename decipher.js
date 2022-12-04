function decipher(code, key){
    for(let i = 0; i < code.length; i++){
        code[i] -= parseInt(key.toString()[i % key.toString().length]);}
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	var answer = "";
	for(let i = 0; i < code.length; i++){
		answer += alphabet[code[i] - 1];}
	return answer;
}

console.log("deciphering the code 20,12,18,30,21 using the key 1939 gives us :",decipher([20, 12, 18, 30, 21], 1939));
console.log("deciphering the code 14,30,11,1,20,17,18,18 using the key 1990 gives us :",decipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log("deciphering the code 6,4,1,3,9,20 using the key 100 gives us :",decipher([6, 4, 1, 3, 9, 20], 100));