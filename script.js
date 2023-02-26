

let mobile=document.getElementById("mobile");
let badcolor ="red";
mobile.addEventListener("click", function check(){
    if(mobile.value>10 && mobile.value<10){
        mobile.style.backgroundColor =badcolor ;
        alert("Enter valid mobile number")
    }
})

let submit=document.getElementById("#form-submit");

submit.addEventListener("click",function messages(){
    alert("Got your mail. We will reach you soon :)")
})

function resetform(){
    document.getElementById("reset").reset();
}



// let display=document.getElementById("form-submit");
// display.addEventListener("click",function messages(){
//     alert("Hey we got your mail .We will get to you soon :) ")
    
// })

// function sendmail(){

//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "aasifimraan3019@gmail.com",
//         Password : "naveenajillu",
//         To : 'zaheer.abbas090@gmail.com',
//         From : document.getElementById("form-email").value,
//         Subject : "New form",
//         Body : "Enquiry"
//     }).then(
//       message => alert(message)
//     );

// }

// function submitForm() {
    
//     var frm = document.getElementById('form-submit')[0];
//     frm.submit(); // Submit the form
//     frm.reset();  // Reset all form data
//     return false; // Prevent page refresh
//  }
