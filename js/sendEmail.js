function sendMail() {
    console.log("test")
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_nelly123";
    const templateID = "template_01f7e32";
    const publicKey = "Emefx9z3SgqDZvqSI";



    emailjs.send(serviceID, templateID, params, publicKey)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
    return false;
}