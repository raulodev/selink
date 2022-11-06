
const btn = document.querySelector("#add_btn");
btn.addEventListener("click", () => {
    const description = document.querySelector("#description").value;
    const url = document.querySelector("#url").value;

    const new_data = {
        description: description,
        url: url,
    };

    var data = localStorage.getItem("selink");
    var data = JSON.parse(data);

    if (data == null) {
        var data = [];
        localStorage.setItem("selink", "[]");
    }

    data.unshift(new_data);

    const jsonData = JSON.stringify(data);

    localStorage.setItem("selink", jsonData);

    recharge_data();
});

function recharge_data() {
    var data = localStorage.getItem("selink");
    var data = JSON.parse(data);

    if (data == null) {
        var data = [];
        localStorage.setItem("selink", "[]");
    }

    const n = document.querySelector("#list");
    Array.from(n.childNodes).forEach((child) => {
        n.removeChild(child);
    });

    for (let i = 0; i < data.length; i++) {
        const d = data[i]["description"];
        const u = data[i]["url"];

        const input = document.createElement("a");
        input.textContent = d;
        input.href = u;
        input.className='text-blue-400 font-semibold text-xl underline'

        const btn_delete = document.createElement("button");
        btn_delete.textContent = "-";
        btn_delete.id = i;
        btn_delete.className='ml-4 mt-1 bg-blue-400 w-8 h-8 p-1 text-center text-white rounded font-bold'
        btn_delete.onclick = del_btn;

        const li = document.createElement("li");
        li.id = i;
        li.appendChild(input);
        li.appendChild(btn_delete);

        const list = document.querySelector("#list");
        list.appendChild(li);
    }
}

function del_btn(e) {
    const id = `${e.composedPath()[0].id}`;

    var data = localStorage.getItem("selink");
    var data = JSON.parse(data);

    data.splice(JSON.parse(id), 1);

    const jsonData = JSON.stringify(data);
    localStorage.setItem("selink", jsonData);

    recharge_data()
}
recharge_data();