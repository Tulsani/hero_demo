

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
        
        // var table = document.getElementById("values");
        // table.append("<tr><td>"+ tid +"</td><td>"+ name +"</td><td>" + status + "</td></tr>")
        $("#values").append("<tr><td>"+ tid +"</td><td>" + status + "</td></tr>");
        
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
