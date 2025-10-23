const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector(".addTask");

//lisätään tapahtuma kuuntelija
button.addEventListener("click",  () => {
    const taskText = input.value;

    // validoitaan Input-kenttä ja luodaan uusi <li> -elementti
    if (taskText.length > 3) {
        const newTask = document.createElement("li");
        newTask.textContent =taskText;
        
        //luodaan "Valmis" -nappi
        const doneButton = document.createElement("button");
        doneButton.textContent = "Valmis";
        doneButton.classList.add("doneButton");

        //lisätään tapahtumakuuntelija "Valmis" -napille
        doneButton.addEventListener("click", function() {
        //selaimeen alert tehtävän suorittamisesta
            alert("Tehtävä valmis!");
            newTask.classList.toggle("done");
        });
        //lisätään "Valmis" -nappi
        newTask.appendChild(doneButton);

        //luodaan "Poista" -nappi
        const removeButton = document.createElement("button");
        removeButton.textContent = "Poista";
        removeButton.classList.add("removeButton");

        //lisätään tapahtumakuuntelija "Poista" -napille
        removeButton.addEventListener("click", function() {
            const confirmRemove = confirm("Haluatko varmasti poistaa tehtävän listalta?");
            if (confirmRemove) {
                newTask.remove();
            }
        });
        //lisätään "Poista" -nappi
        newTask.appendChild(removeButton);
        
        //lisätään tehtävä listaan
        list.appendChild(newTask);
        //input-kentän tyhjennys
        input.value = "";
    }
    else {
        alert("Syötetyssä tehtävässä tulee olla vähintään neljä merkkiä");
        input.classList.add("error");
    }
});



// // taustavärin vaihtaminen
// const item = document.querySelectorAll("div");

// function changeColor() {
//  item.classList.toggle("pink");
// }
// item.onclick = changeColor;