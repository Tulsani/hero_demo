function updateStore(){



    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;

    console.log(strUser);



    var trackid = document.getElementById("trackid").value; 
    // var status = document.getElementById("status").value;
    if(trackid=="" || trackid == null){
    window.alert("enter token number to be updated");
    }
    else{	
    var db = firebase.database();

    var query= db.ref().child("app/customer").orderByChild("tid").equalTo(trackid);
    // if(query){
    console.log(query)
    query.once("child_added", function(snapshot) {
      snapshot.ref.update({ stat:strUser})
      window.alert("User Id has been updated") 
      reload_page()
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
}

function reload_page()
{
	window.location.reload();
}
