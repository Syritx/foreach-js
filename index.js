function start() {
    word = "hello";
    characters = [word.length];
    characters = Array.from(word)

    // foreach loop
    characters.forEach(chr => {
        console.log(chr)
    });
}

start();