const Submit = document.querySelector("#submit")
const View = document.querySelector("#View")
const information = JSON.parse(sessionStorage.getItem('Information')) || []
if (Submit) {
    Submit.addEventListener('click', () => {
        const firstNameInput = document.querySelector("#f_name").value;
        const lastNameInput = document.querySelector('#l_name').value;
        const Emailinput = document.querySelector('#email').value;
            
        information.push({
            firstName:firstNameInput,
            lastName: lastNameInput,
            email:Emailinput,
         })
        sessionStorage.setItem('Information', JSON.stringify(information)) || []
         window.location.href = "userdetails.html";
    })    
}
if(View){
    View.addEventListener('click', () => {
        window.location.href = "userdetails.html"
    })
}
//jcsjfisfdq