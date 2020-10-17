//Using async and await

const getPuzzle = async(count) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)
    if(response.status===200){
        let asyncdata = await response.json()
        return asyncdata.puzzle
    }
    else{
        throw new Error('Unable to find the link')
    }
}



