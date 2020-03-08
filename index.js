function reload_page()
{
    window.location.reload();
    
}
setInterval(retriever, 12000);
var arr = [""];

function addStore(){

    
    // retriever();

    console.log(arr);

    var trackid = document.getElementById("trackid").value;
    // var cusname = document.getElementById("cusname").value;
    // var cusvehicle = document.getElementById("cusvehicle").value;
    // var status = document.getElementById("status").value;
	if(trackid == "" || trackid == null || arr.includes(trackid)){
	window.alert("enter a unique token no.");
	}
    else{	
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;

    // var e = document.getElementById("ddlVehicle");
    // var cusvehicle = e.options[e.selectedIndex].text;

    
    var rootRef = firebase.database().ref();
    var storesRef = rootRef.child('app/customer');
    var newStoreRef = storesRef.push();
    newStoreRef.set({
    "tid":trackid,
    // "name":cusname,
    // "vehicle":cusvehicle,
    "stat":strUser
    },(err)=>{
        if(err){
            console.log("unable to send data");
        }
        else{
            console.log("sent successfully"); 
            alert("Added new Customer");
            reload_page(); 		 
        }
    });
    }
  }


  function retriever(){
    var rootRef = firebase.database().ref().child("app/customer");
    rootRef.on("child_added",snap =>{
        // alert(snap.val());
        // var name = snap.child("name").val();
        var tid = snap.child("tid").val();
        var status = snap.child("stat").val();
        console.log(tid+" "+status);
        arr.push(tid);
        console.log(arr);
        
    });
}
