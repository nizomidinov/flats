let right = document.getElementById("right-b")
let slider = document.getElementsByClassName("slider")[0]
let slide_index = 0
let max_slides = slider.children.length
let left = document.getElementById("left-b")
let comment_left = document.getElementById("comment-left")
let comment_right = document.getElementById("comment-right")
let comment_counter = 0
let comment_pairs = document.getElementsByClassName("all-comm")
let call_me = document.getElementsByClassName("call-me")[0]
let modal = document.getElementsByClassName("modal")[0]

right.onclick = function () {
    slide_index++
    if (slide_index >= max_slides) {
        slide_index = 0
    }
    slider.style.transform = `translateX(-${slide_index * 100 / slider.children.length}%)`
}

left.onclick = function () {
    slide_index--
    if (slide_index < 0) {
        slide_index = max_slides - 1
    }
    slider.style.transform = `translateX(-${slide_index * 100 / slider.children.length}%)`
}

comment_right.onclick = function () {
    comment_right.style.pointerEvents = "none"
    let visible = document.getElementsByClassName("visible")[0]
    visible.classList.remove("opaque")
    setTimeout(function () {
        visible.classList.remove("visible")
        comment_counter++
        if (comment_counter > comment_pairs.length - 1) {
            comment_counter = 0
        }
        comment_pairs[comment_counter].classList.add("visible")
        setTimeout(function () {
            comment_pairs[comment_counter].classList.add("opaque")
            comment_right.style.pointerEvents = "auto"
        }, 10)
    }, 300)
}

comment_left.onclick = function () {
    comment_left.style.pointerEvents = "none"
    let visible = document.getElementsByClassName("visible")[0]
    visible.classList.remove("opaque")
    setTimeout(function () {
        visible.classList.remove("visible")
        comment_counter--   
        if (comment_counter < 0) {
            comment_counter = comment_pairs.length - 1
        }
        comment_pairs[comment_counter].classList.add("visible")
        setTimeout(function () {
            comment_pairs[comment_counter].classList.add("opaque")
            comment_left.style.pointerEvents = "auto"
        }, 10)
    }, 300)
}

call_me.onclick = function () {
    modal.style.display = "block"
}

modal.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}

// Модальное окно для CALL ME
// убрать двойку в 31 строчке для комментов
// кнопку влево сделать
// добавить ховер для кнопки call me в модальном окне