setTimeout(ApresentarModal, 250)
function ApresentarModal (){
    document.querySelector(".modal").style.display =
    "block";

    document.querySelector(".modal a")
    .addEventListener("click", function(){
        document.querySelector(".modal").style.display = "none";
    })
}
