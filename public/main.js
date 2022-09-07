const deleteBtn = document.querySelectorAll(".fa-xmark")
const score = document.querySelectorAll(".fa-futbol")
const awayTeam = document.querySelectorAll(".away-team")

Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', deleteResult)
})

// Array.from(score).forEach((element) => {
//     element.addEventListener('click', showScorer)
// })

Array.from(awayTeam).forEach((element) => {
    element.addEventListener('click', change)
})

async function deleteResult() {
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteResult', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
        })
    const data = await response.json()
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
                'itemFromJS': itemText
            })
        })
    const data = await res.json()
    console.log(data)
    location.reload()

    } catch(err) {
        console.log(err)
    }
}

