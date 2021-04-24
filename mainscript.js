$('#button1').click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos"
    }).done(function (data) {
        console.log(data);
        //Display the table
        var table = document.getElementById('myTable');
        var output = "";
        $('#myTable')
            .append(data.map(function (val) {
              if(val.completed== true){
              output+="<tr>\n";
              output += "<th scope=\"row\">" + val.id + "</th>\n";
              output += "<td>" + val.title + "</td>\n" ;
             
                output += "<td>" + "<input type = 'checkbox' checked disabled > "  +"</td>\n" ;
              
    
              output += "</tr>\n";
              }
              else{
                output+="<tr>\n";
              output += "<th scope=\"row\">" + val.id + "</th>\n";
              output += "<td>" + val.title + "</td>\n" ;
             
                output += "<td>" + "<input type = 'checkbox' > "  +"</td>\n" ;
              
    
              output += "</tr>\n";
              }
            }));
            table.innerHTML+=output;
    });
    $('#button1').hide();
    //pop up alert box
    let count = 0;
$("#myTable").on("change", ":checkbox", function () {
  var status=this.checked;
  var promise = new Promise(function (resolve,reject) {
    if(status === true)
    count++ ;
    else
    if(status ===false)
    count--;
    console.log(count,status);
    if (count == 5) {
        resolve("Congrats! 5 Tasks have been completed successfully!");
    }
    else
    if(count>5)
    {
      
      reject(" 5 Tasks are already done. Total Tasks done : ")
    }
});
promise
    .then(function (test) {
        alert(test);
       
    })
    .catch(function(done){
      alert(done + count);
   
    })
});

});
//animation
var myVar;

function myFunction() {
myVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}