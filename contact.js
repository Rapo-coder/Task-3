
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


let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let organizationInput = document.getElementById("organization");

function clearError(input, errorField) {
  errorField.innerHTML = "";
}
function showError(input, errorField) {
  if (input.value.trim() === "") {
errorField.innerHTML = `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is Required`;
  }
}

nameInput.oninput= function()
{
  let errorField = document.getElementById("name-error");
  errorField.innerHTML = "";
}
 
emailInput.oninput = function()
{
  let errorField = document.getElementById("email-error");
  errorField.innerHTML = "";
}
 
organizationInput.oninput = function() 
{
  let errorField = document.getElementById("organization-error");
  errorField.innerHTML = "";
}
