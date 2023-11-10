window.onload = function () {
    var fileupload = document.getElementById("FileUpload1");
    var button = document.getElementById("btnFileUpload");
    var inputField = document.getElementById('resume');

    button.onclick = function () {
    fileupload.click();
    };

    fileupload.onchange = function () {
      inputField.value = fileupload.files[0].name;
    };
  };
 
  // Submit success function
  function myFunction() {
    alert("Submitted successfully");
  }