const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector(".addTask");
//muuttujat tehtävämuuttujien filtteröintiin
const showAllButton = document.querySelector("#showAll");
const showActiveButton = document.querySelector("#showActive");


// Haetaan LocalStoragesta tallennetut "tasks"
// function listSaved() {
//     const data = localStorage.getItem("tasks");
// }

//lisätään tapahtuma kuuntelija
addButton.addEventListener("click",  function() {
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
            updateValue();
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
                updateValue();
            }
        });
        //lisätään "Poista" -nappi
        newTask.appendChild(removeButton);
        
        //lisätään tehtävä listaan
        list.appendChild(newTask);
        updateValue();
        //input-kentän tyhjennys
        input.value = "";
    }
    else {
        alert("Syötetyssä tehtävässä tulee olla vähintään neljä merkkiä");
        input.classList.add("error");
    }
});

//Lasketaan li-elementtien määrä ja näytetään se sivun p id="log" elementissä
const log = document.getElementById("allTasks");
function updateValue() {
    const numberOfTasks = list.getElementsByTagName("li").length;
    const completedTasks = list.querySelectorAll("li.done").length;
    const activeTasks = numberOfTasks - completedTasks; 
    log.innerText = `Aktiiviset tehtävät: ${activeTasks} / ${numberOfTasks}`;
}
input.onchange = updateValue;

//Näytetään kaikki listatut tehtävät
showAllButton.addEventListener("click", function() {
    const tasks = list.querySelectorAll("li");
});

//Näytetään vain aktiiviset tehtävät l. ei niitä jotka merkattu "done"
showActiveButton.addEventListener("click", function() {
    const tasks = list.querySelectorAll("li");
    tasks.forEach(task => {
        if (task.classList.contains("done")) {
            task.style.display = "none";
        } else {
            task.style.display = "";
        }
    });
});
// //Tallennetaan lista LocalStorageen
// function saveTasks() {
//     localStorage.setItem("tasks", list.innerHTML);
// }

// // taustavärin vaihtaminen
// const item = document.querySelectorAll("div");

// function changeColor() {
//  item.classList.toggle("pink");
// }
// item.onclick = changeColor;