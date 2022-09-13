const deleteBtn = document.querySelectorAll(".fa-xmark")
const awayTeam = document.querySelectorAll(".team .away-team")


Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', deleteResult)
})

async function deleteResult() {
    const resultId = this.parentNode.dataset.id
    try{
        const res = await fetch('results/deleteResult', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'resultIdFromJS': resultId
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

