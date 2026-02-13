const modalPage = document.getElementById('modal-page');
let displayModal = false;
const closeBtn = document.getElementById('closeModal');
const groupeNameParts = document.getElementById('we-are')
const data = [
    {
        id:1,
        nom:"RANDRIANANTENAINA",
        prenom:"Nomentsoa Patrick",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.Patrick-p25s.github.com",
        numero:"038 89 45 215",
        email:"nomp6836@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    {
        id:2,
        nom:"TOTOZAFY",
        prenom:"Jean Brindo",
        description:"Je suis Jean Brindo, un administrateur système et réseau, venant d'Antalaha",
        github:"https://www.toto.github.com",
        numero:"038 89 45 215",
        email:"brindtoto@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    {
        id:3,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    {
        id:4,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    {
        id:5,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },{
        id:6,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },{
        id:7,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },{
        id:8,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    {
        id:9,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },{
        id:10,
        nom:"RANDRIANANTSOA",
        prenom:"Steeve Edith",
        description:"Je suis Nomentsoa Patrick, un développeur Full-Stack et scientifique de donnée, venant de Tsiroanomadidy",
        github:"https://www.edit.github.com",
        numero:"038 89 45 215",
        email:"edit-emit@gmail.com",
        age:"18",
        langage:"PHP, Javascript, Python"
    },
    

    
]
const groupeName = ['GROUPE A', "LES 10 FANTAST", 'LES COURAGEUX', "LES SOLIDAIRES"]
let index = 0;

function modalDisplay(val){
    if(val){
        modalPage.style.display = 'block'
    }else{
        modalPage.style.display = 'none';
    }
}
function showModal(ID){
    const id_act = ID + 1
    console.log(ID);
    displayModal = true;
    if (displayModal){
        modalPage.style.display = "block";
    }
}
closeBtn.onclick = function close(){
    displayModal = false;
    modalDisplay(displayModal);
}
