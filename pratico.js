const req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/Angela-Tosatti/repos")
req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        const obj = JSON.parse(this.responseText)

        for (var i = 0; i < obj.length; i++) {
            document.getElementById('tabela').innerHTML += "<tr><td> Nome: " + obj[i].name + " </td>  <td>Linguagem: " + obj[i].language + "</td><td><img src='" + obj[i].language + ".png' width='40px' height='40px'></img><td><a target='_blank'href='" + obj[i].html_url + "'>Link: " + obj[i].html_url + "</a></td> <td>Clonar: <button  onclick='copyToClipboard(this)'> " + obj[i].clone_url + "</button></td>" + "<td><a href='dados.html' target='_blank' onclick='envia(" + JSON.stringify(obj[i]) + ")'><img src='dados.png' width='35px'></img></a></td></td></tr>"
        }

    }

}
req.send()


function envia(obj) {
    localStorage['obj'] = JSON.stringify(obj)
}

function copyToClipboard(botao) {
    var input = document.createElement("input");
    input.value = botao.innerText;
    console.log(botao.innerText)
    input.id = "input";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
}