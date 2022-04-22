let watch = document.getElementById("watch")

function insert(num) {
    var n1 = watch.innerHTML
    watch.innerHTML = n1 + num

}

function clean() {
    watch.innerHTML = ""
}

function calculate() {


    if (watch.innerHTML) {
        watch.innerHTML = eval(watch.innerHTML)
    } else {
        console.log("error");
    }

}
