const API = window.location.origin.replace("3000", "3000");

async function updateList() {
    const res = await fetch(API + "/servers");
    const servers = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    servers.forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        list.appendChild(li);
    });
}

async function start() {
    const name = document.getElementById("serverName").value;

    await fetch(API + "/start", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ name })
    });

    updateList();
}

async function stop() {
    const name = document.getElementById("serverName").value;

    await fetch(API + "/stop", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ name })
    });

    updateList();
}

updateList();
