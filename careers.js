window.onload = function () {
    var fileupload = document.getElementById("FileUpload1");
    var button = document.getElementById("btnFileUpload");
    button.onclick = function () 
    {
        fileupload.click();
    };
    
};

//submit successfully
function myFunction() 
{
    alert("submitted successfully");
}