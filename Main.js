var GuestList=[];

function submit(){
    var guestname=document.getElementById("Name1").value;
    GuestList.push(guestname);

    console.log(guestname);
    console.log(GuestList)
    var length_of_names = GuestList.length
    console.log(length_of_names);
    document.getElementById("Displayname").innerHTML = GuestList.toString();
    
}
function sorting(){
    GuestList.sort();
    var i = GuestList.join("<br>");
    console.log(GuestList);
    document.getElementById("sorted").innerHTML = i.toString();

}
function show(){
    var i = GuestList.join("<br>");
    console.log(GuestList);
    document.getElementById("show").innerHTML = i.toString();
    
}
function searching(){
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j = 0;j < GuestList.length;j++){

        if(s==GuestList[j]){
            found = found+1;
           
          
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}