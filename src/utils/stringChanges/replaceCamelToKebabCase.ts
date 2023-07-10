export function replaceCamelToKebabCase(word: string) {
	if(!word) return "";
	// Use regex with lookahead to split the word at uppercase letters
	// and convert all matches to lowercase, then join with hyphen
	return word.replace(/(?<!^)(?=[A-Z])/g, "-").toLowerCase();
}
