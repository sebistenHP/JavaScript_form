document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const myFormData = new FormData(e.target);
    const userData = Object.fromEntries(myFormData);
    console.log(userData); 

    const userJSON = JSON.stringify(userData, null, 2);
    localStorage.setItem("userDataKey", userJSON);
})
