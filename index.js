document.getElementById("lists");
document.getElementById("button");


//データの操作
document.addEventListener("click", async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //dom操作
    users.forEach(function (user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    })


})
window.addEventListener("load", async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //dom操作
    users.forEach(function (user) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);


    })
})
