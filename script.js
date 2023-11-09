function firstChar(text) {
  // your code here
	if (s.length === 0) {
        return '';
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            return s[i];
        }
    }

    return '';
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
