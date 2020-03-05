function reload_page()
{
	window.location.reload();
}
function addStore(){
    var trackid = document.getElementById("trackid").value;
    var cusname = document.getElementById("cusname").value;
    var cusvehicle = document.getElementById("cusvehicle").value;
    var status = document.getElementById("status").value;

    
    var rootRef = firebase.database().ref();
    var storesRef = rootRef.child('app/customer');
    var newStoreRef = storesRef.push();
    newStoreRef.set({
    "tid":trackid,
    "name":cusname,
    "vehicle":cusvehicle,
    "stat":status
    },(err)=>{
        if(err){
            console.log("unable to send data");
        }
        else{
            console.log("sent successfully");
            reload_page();  
            alert("Added new Customer");
        }
    });
  }
