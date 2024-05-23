let btnNext = document.querySelector(".next")
let btnBack = document.querySelector(".back")

let container = document.querySelector(".container")
let list = document.querySelector(".container .list")
let thumb = document.querySelector(".container .thumb")


btnNext.onclick = () => moveItensOnClick("next")
btnBack.onclick = () => moveItensOnClick("back")

function moveItensOnClick(type) {
    let ListItems = document.querySelectorAll(".list .list-item")
    let ThumbItems = document.querySelectorAll(".thumb .thumb-item")


    if (type === "next") {
        list.appendChild(ListItems[0])
        thumb.appendChild(ThumbItems[0])
        container.classList.add("next")
    } else {
        list.prepend(ListItems[ListItems.length - 1])
        thumb.prepend(ThumbItems[ListItems.length - 1])
        container.classList.add("back")
    }

setTimeout(() => {
    container.classList.remove("next")
    container.classList.remove("back")
}, 3000);

}