
function clear() 
{
    document.getElementById("contactForm").reset();
}

function updatePromotionCode() 
{
    let stateDropdown = document.getElementById("state");
    let promotionCode = document.getElementById("promotion-code");
     if (stateDropdown.value !== "state") {
        let selectedState = stateDropdown.options[stateDropdown.selectedIndex].text;
        promotionCode.value = `${selectedState} - PROMO`;
    }

}
 
function displayGreeting() 
{
    let genderRadios = document.getElementsByName("gender");
    for (const radio of genderRadios) {
        if (radio.checked) {
            if (radio.value === "male") {
                alert("Hello Sir");
            } else if (radio.value === "female") {
                alert("Hello Lady");
            }
            return;
        }
    }    
}
document.getElementsByClassName("side").innerHTML="Name is Required";
function validateForm() {

    const requiredFields = ["name", "email", "organization"];
    let missingFields = [];
    var c=1;
    for (const fieldId of requiredFields) {
        const fieldValue = document.getElementById(fieldId).value;
        console.log(fieldId);
       
        if (fieldValue.trim() === "") {
            missingFields.push(fieldId);
           document.getElementById(c).innerHTML="Name is Required";
           c+=1;
        }
        else{document.getElementById(c).innerHTML="*";
              c+=1;}
        
        
    }
 
    if (missingFields.length > 0) {
        alert("Please fill all the required fields below");
        return;
    }

    const email = document.getElementById("email").value;
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid Email Address");
        return;
    }

    alert("Thanks for submitting");
}
 