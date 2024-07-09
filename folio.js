function sendemail(){
  
    Email.send({
        Host : "smtp.gmail.com",
        Username : "laxmipriyasasi@gmail.com",
        Password : "priya",
        To : 'laxmipriyasasi@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new form ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}