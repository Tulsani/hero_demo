

function retriever(){
    var rootRef = firebase.database().ref().child("app/customer");
    rootRef.on("child_added",snap =>{
        // alert(snap.val());
        var name = snap.child("name").val();
        var tid = snap.child("tid").val();
        var status = snap.child("stat").val();
        console.log(name+" "+tid+" "+status);
        
        // var table = document.getElementById("values");
        // table.append("<tr><td>"+ tid +"</td><td>"+ name +"</td><td>" + status + "</td></tr>")
        $("#values").append("<tr><td>"+ tid +"</td><td>"+ name +"</td><td>" + status + "</td></tr>");
        
    });
}
