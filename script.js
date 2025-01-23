function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("Name is required");
        return false;
    }

    if(age == ""){
        alert("Age is required");
        return false;
    }
    else if(age < 1){
        alert("Age must be POSITIVE number");
        return false;
    }

    if(address == ""){
        alert("Address is required");
        return false;
    }

    if(email == ""){
        alert("Email is required");
        return false;
    }
    else if(!email.includes("@")){
        alert("Invalid email address");
        return false;
    }

    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        people = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";

    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });
}