function start() {
    let answer = window.prompt('Do you head left, or right?')
    if(answer === 'left') {
        goLeft()
    }   else if(answer === 'right') {
        goRight()
    }
}

function goLeft() {
    let answer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path? (follow/continue)`)
    if(answer === 'back') {
        leftOrRight()
    }
    if(answer === 'follow') {
        followCat()
    }
    if(answer === 'continue') {
        continuePath()
    }

}

function goRight() {
    let answer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if(answer === 'back') {
        leftOrRight()
    }
}

function leftOrRight() {
    start()
}

function followCat() {
    let answer = window.prompt("You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. (stay/alert)")
    if(answer === 'stay') {
        alert("You live happily amongst the cats for the rest of your days.")
    }
    else if(answer === 'alert') {
        alert("After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.")
    }
    else if(answer === 'back') {
        leftOrRight()
    }
}

function continuePath() {
    let answer = window.prompt("You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take? (ladder/staircase)")
    if(answer === 'ladder') {
        alert("After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.")
    }
    else if(answer === 'staircase') {
        alert("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
    }
    else if(answer === 'back') {
        leftOrRight()
    }
}
start()