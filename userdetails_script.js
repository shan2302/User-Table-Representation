// const information = []

// const user_information = []
const userdetails= () => {
    const tableBody = document.querySelector('#myTableBody');
    const information1 = JSON.parse(sessionStorage.getItem('Information')) || []
    // user_information.push(...information1)
if(information1 ){
    information1.forEach(user => {
        const row = document.createElement('tr');
        // row.appendChild(document.createTextNode(user))
        // document.querySelector("#mytableBody").appendChild(row);
        row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>`;
        console.log(row);
        console.log(tableBody);
        tableBody.appendChild(row);
        console.log("YAHA dusra page ka ",information1);
    });
}
};
document.addEventListener('DOMContentLoaded', userdetails);