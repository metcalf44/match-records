const deleteBtn = document.querySelectorAll(".fa-xmark")

Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', deleteItem)
})

async function deleteItem() {
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const res = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'resultFromJS': itemText
            })
        })
    const data = await res.json()
    console.log(data)
    location.reload()

    } catch(err) {
        console.error(err)
    }
}

