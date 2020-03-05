function updateStore(){
    var trackid = document.getElementById("trackid").value; 
    var status = document.getElementById("status").value;
    var db = firebase.database();

    var query= db.ref().child("app/customer").orderByChild("tid").equalTo(trackid);
    // if(query){
    console.log(query)
    query.once("child_added", function(snapshot) {
      snapshot.ref.update({ stat: status})
      window.alert("User Id has been updated")  
    },(err)=>{ if(err){ 
        console.log("error in updating  "+ err);
    }
        else{
            console.log("been there done tha");
        }

});
// }
// else{
//     console.log("not done");
// }
}