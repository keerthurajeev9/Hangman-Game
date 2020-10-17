
class Hangman {
    constructor(word, guess) {
        this.word = word.toLowerCase().split("");
        this.guess = guess;
        this.status = 'Playing'
        this.guessed = [];
    }


    get puzzle() {
        let puzzle = "";
        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += "*";
            }
        });
        return puzzle;
    }
    makeGuess(strings) {
        strings = strings.toLowerCase();
        let isUnique = !this.guessed.includes(strings);
        let isWord = !this.word.includes(strings)
        if (this.status === 'Playing') {
            if (isUnique) {
                this.guessed.push(strings);
            }
            if (isUnique && isWord) {
                this.guess--
            }
        } else {
            console.log('Dont play')
        }
    };
    //Printing the status
    get printStatusMessage() {

        if (this.status === 'Playing') {
            return `The number of guesses left: ${this.guess}`

        } else if (this.status === 'Failed') {
            let joinedWord = this.word.join('')
            return `Failed.The guessed word was ${joinedWord}`
        } else {
            return `Great work!You guessed the word`
        }
    }
    
    //Status setting based on the game conditions
    checkStatus(status) {

        // Approach 0
        const finished = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')
        if (this.guess <= 0) {
            this.status = 'Failed';
        } else if (finished) {
            this.status = 'Finished'

        } else {
            this.status = 'Playing'
        }
    }

}



