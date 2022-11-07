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
        input.className='text-blue-400 font-semibold text-xl'
        
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        iconSvg.setAttribute('fill','none')
        iconSvg.setAttribute('viewBox','0 0 24 24')
        iconSvg.setAttribute('stroke-width','1.5')
        iconSvg.setAttribute('stroke','currentColor')
        iconSvg.setAttribute('class','w-6 h-6')

        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
        iconPath.setAttribute('stroke-linecap','round')
        iconPath.setAttribute('stroke-linejoin','round')
        iconPath.setAttribute('d','M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0')

        iconSvg.appendChild(iconPath)
        
        const btn_delete = document.createElement("button");
        btn_delete.id = i;
        btn_delete.className='ml-4 mt-1 border text-blue-500 hover:text-white border-blue-400 border hover:border-white hover:bg-blue-400  p-1 text-center text-white rounded font-bold'
        btn_delete.appendChild(iconSvg)
        btn_delete.onclick = del_btn;

        const li = document.createElement("li");
        li.id = i;
        li.className='text-center border mb-4 p-1 w-auto rounded'
        li.appendChild(input);
        li.appendChild(btn_delete);

        const list = document.querySelector("#list");
        list.appendChild(li);
    }
}

function del_btn(e) {
    
    const id = e.composedPath()[1].id;
    var data = localStorage.getItem("selink");
    var data = JSON.parse(data);

    data.splice(id, 1);

    const jsonData = JSON.stringify(data);
    localStorage.setItem("selink", jsonData);

    recharge_data()
}
recharge_data();

function control_nav() {
    
    const nav = document.getElementById('nav')
    const links = document.getElementById('links')
    const btn = document.getElementById('control-nav')
    
    if (nav.className=='hidden'){

        btn.innerText='→'
        nav.className='grid grid-cols-3 md:grid-cols-2  w-full bg-gradient-to-tr from-blue-500 to-blue-600 p-4 fixed shadow-md'
        links.className='pt-36 mx-4'
        
    } else {
        
        nav.className='hidden'
        links.className='pt-4 mx-4'
        btn.innerText='←'

    }
}