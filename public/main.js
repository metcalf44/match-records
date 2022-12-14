const deleteBtn = document.querySelectorAll("#deleteResult")
const deletePlayerBtn = document.querySelectorAll("#deletePlayer")
const awayTeam = document.querySelectorAll(".team .away-team")

// adding scorer ids
const scorerBtn = document.querySelector("#scorer-btn")
const scorerDropdown = document.querySelector("#scorer-dropdown")
let scorerInput = document.querySelector("#scorer-input")

// adding assist ids
let assistBtn = document.querySelector("#assist-btn")
let assistDropdown = document.querySelector("#assist-dropdown")
let assistInput = document.querySelector("#assist-input")

// button to add players from the database to result page(scorers)
// had to use ?. (chaining) as it reads btn as null 
    scorerBtn?.addEventListener("click", () => {
           let addScorer = scorerInput.value += scorerDropdown.value + ", "
           return addScorer
    })

// button to add players from the database to result page(assists)
    assistBtn?.addEventListener("click", () => {
        let addAssist = assistInput.value += assistDropdown.value + ", "
        return addAssist
    })

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteResult)
})

async function deleteResult() {
    const resultId = this.parentNode.dataset.id
    try{
        const res = await fetch('/results/deleteResult', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'resultIdFromJSFile': resultId
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

Array.from(deletePlayerBtn).forEach((el) => {
    el.addEventListener('click', deletePlayer)
})

async function deletePlayer() {
    const playerId = this.parentNode.dataset.id
    try {
        const res = await fetch('/players/deletePlayer', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'playerIdFromJSFile': playerId
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

// item text refers to the text clicked on page
// its then stored in the body as itemFromJS
// server.js then has the key: value (awayTeam: req.body.itemFromJS)
async function change() {
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const res = await fetch('change', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJSFile': itemText
            })
        })
    const data = await res.json()
    console.log(data)
    location.reload()

    } catch(err) {
        console.log(err)
    }
}

