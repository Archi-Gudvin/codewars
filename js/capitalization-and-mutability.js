function capitalizeWord(word) {
    word = word[0].toUpperCase() + word.substring(1);
    return word;
}

console.log(capitalizeWord('word'));