let add = document.querySelector("#add");

let text = document.querySelector("#text");

let followers = document.querySelector("#followers");

let flag = 0;

add.addEventListener("click", function () {
    if (flag == 0) {
        followers.textContent="Followed by 405 "
        add.innerHTML= "Add friend"
        text.textContent = "Stranger";
        add.style.color="blue";
        text.style.color= "red";
        text.style.backgroundColor= "#FFFFF0"
        flag = 1;
    }else{
        followers.textContent="Followed by 406 "
        add.innerHTML= "Remove";
        add.style.color="red";
        text.textContent="Friend";
        text.style.color= "green";
        text.style.backgroundColor= "#FCF8DD"
        flag = 0;
    }
})

