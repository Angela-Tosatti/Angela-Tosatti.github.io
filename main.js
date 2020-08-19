var repos = JSON.parse(localStorage.getItem('obj'))

var nome = repos.owner.login
var perfilImg = document.createElement('img')
perfilImg.setAttribute('src', repos.owner.avatar_url)
var pessoasSegue = repos.owner.following_url
var desc = repos.owner.description
var colab = repos.owner.collaborators_url
var branches = repos.owner.branches_url
var commits = repos.owner.commits_url
var lingUtil = repos.owner.languages_url

document.getElementById('nome').innerHTML = nome;
document.getElementById('perfilImg').appendChild(perfilImg)
document.getElementById('desc').innerHTML = desc

const requis = new XMLHttpRequest();
requis.open("GET", lingUtil)
requis.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        for (i = 0; i < this.responseText.length; i++) {
            document.getElementById('lingUtil').innerHTML = Object.keys(JSON.parse(this.responseText));
        }
    }
}
requis.send()



const requis2 = new XMLHttpRequest();
requis2.open("GET", commits)
requis2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(commits).innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('commits').innerHTML = 'Sem mensagens'
    }
}

requis2.send()


const requis3 = new XMLHttpRequest();
requis3.open("GET", branches)
requis3.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(branches).innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('branches').innerHTML = 'Sem mensagens'
    }
}
requis3.send()

const requis4 = new XMLHttpRequest();
requis4.open("GET", pessoasSegue)
requis4.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(pessoasSegue).innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('pessoasSegue').innerHTML = 'Sem mensagens'
    }
}
requis4.send()


const requis5 = new XMLHttpRequest();
requis5.open("GET", colab)
requis5.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(colab).innerHTML = JSON.parse(this.responseText)['message']

    } else if (this.status == 404) {
        document.getElementById('colab').innerHTML = 'Sem mensagens'
    }
}
requis5.send()