function SendMail() {
    var params= {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_78lnoik", "template_2i6jz17", params).then(function(res){
        swal("Success!", "Message sent Successfully!", "success");  
        document.getElementById("fullName").value="";
        document.getElementById("email_id").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
    })
}