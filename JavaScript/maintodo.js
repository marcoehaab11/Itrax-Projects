var data=[];

function add(){
   var x =document.getElementById("task").value;
    data.push(x);
    console.log(data);
}

function view(){
    var res ="";
    for(var x=0 ;x<data.length;x++)
    {
        res += "<div onclick='remove(" + x + ")'> My task is "+data[x]+"<br> </div>";                     //to much important +=
    }
    document.getElementById("list").innerHTML=res;      
}

function remove(x)
{
    data.splice(x,1);
    view();
}