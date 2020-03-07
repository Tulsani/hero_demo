

function retriever(){
    var rootRef = firebase.database().ref().child("app/customer");
    rootRef.on("child_added",snap =>{
        // alert(snap.val());
        // var name = snap.child("name").val();
        var tid = snap.child("tid").val();
        var status = snap.child("stat").val();
        console.log(name+" "+tid+" "+status);
        if(status=="END"){
            deleter_three(tid);
        }
        switch(status){
            case "Job Card Preparation":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#FCF3CF'>In Progress</td><td> No </td><td> No </td><td> No </td><td> No </td><td> No </td></tr>");
                break;
            case "Washing":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#D5F5E3'>Done</td><td bgcolor='#FCF3CF'> In Progress </td><td> No </td><td> No </td><td> No </td><td> No </td></tr>");
                break;
            case "WorkShop":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#D5F5E3'>Done</td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#FCF3CF'> In progress </td><td> No </td><td> No </td><td> No </td></tr>");
                break;
            case "FI AND PUC":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#D5F5E3'>Done</td><td bgcolor='#D5F5E3'> Dooe </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#FCF3CF'> In Progress </td><td> No </td><td> No </td></tr>");
                break;
            case "POLISHING":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#D5F5E3'>Done</td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#FCF3CF'> In Progress </td><td> No </td></tr>");
                break;
            case "BILLING AND DELIEVERY":
                $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td><td bgcolor='#D5F5E3'>Done</td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#D5F5E3'> Done </td><td bgcolor='#FCF3CF'> In Progress </td></tr>");
                break;
            default:
                console.log("error");
        }
        
        // var table = document.getElementById("values");
        // table.append("<tr><td>"+ tid +"</td><td>"+ name +"</td><td>" + status + "</td></tr>")
        // $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td></tr>");
        
    });
}

function deleter(tokenid){
    var db = firebase.database();
    db.collection().doc(tokenid).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
function deleter_new(){
    firebase.database().ref().child('app/customer/')
}
function deleter_three(tokenid){
    var db = firebase.database();
    var query= db.ref().child("app/customer").orderByChild("tid").equalTo(tokenid);
    query.remove();
}
