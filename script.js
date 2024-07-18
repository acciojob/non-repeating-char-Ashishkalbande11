function firstNonRepeatedChar(s) {
 // Write your code here\
	let map = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i)) === 1) {
            return s.charAt(i);
        }
    }
    
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
