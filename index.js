function reload_page()
{
	window.location.reload();
}
function addStore(){
    var trackid = document.getElementById("trackid").value;
    // var cusname = document.getElementById("cusname").value;
    // var cusvehicle = document.getElementById("cusvehicle").value;
    // var status = document.getElementById("status").value;
	if(trackid == "" || trackid == null){
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
