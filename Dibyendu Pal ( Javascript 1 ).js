function passingValue()
{
    var dropdownText = document.getElementById("selectName").value;
    localStorage.setItem("ddvalue", dropdownText);
    return true;
}

function work()
{
    var workText = document.getElementById("workDetails").value;
    localStorage.setItem("workValue", workText);
    return true;
}

function getAlert()
{
    const fileAvalable =document.getElementById("file-choosing")
    const folderAvalable = document.getElementById("folder-choosing")
    if(fileAvalable.files.length > 0 || folderAvalable.files.length > 0){
        alert("Your files are successfully Submited")
    }else{
        alert("Error! You did not submited any files")
    }

        
}

document.getElementById("result").innerHTML = localStorage.getItem("ddvalue");
document.getElementById("workContent").innerHTML = localStorage.getItem("workValue");

function myFunc()
{
    passingValue();
    work();

}