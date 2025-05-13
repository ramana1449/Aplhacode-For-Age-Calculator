function calculateAge() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").innerText = "Please select your date of birth.";
        return;
    }
    
    const birthDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById("result").innerText = "Your age is " + age + " years.";
}
