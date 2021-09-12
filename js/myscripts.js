
th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){
    th[c].addEventListener('click',item(c))
}


function item(c){
    return function(){
        let txt = th[c].innerHTML;
        txt = txt.substring(0, txt.length - 1);
        
        if(th[c].title == "desc"){
            let decAc = true;
            sortTable(c, decAc);
            th[c].title = "asc";
            txt += '&#9660';
        }else{
            decAc = false;
            sortTable(c, decAc);
            th[c].title = "desc";
            txt += '&#9650';
        }
        th[c].innerHTML = txt;
        
    }
}

function sortTable(c, decAc) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableTest");
    switching = true;
    
    while (switching) {
        switching = false;
        rows = table.rows;
    
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[c];
            y = rows[i + 1].getElementsByTagName("TD")[c];

            if(decAc == true){
                if(isNaN(x.innerHTML)){
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }else{
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }else{
                if(isNaN(x.innerHTML)){
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }else{
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            
            
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
  }

 

function buildTablePosts(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].userId}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].body}</td>
                    </tr>`
        table.innerHTML += row;
    }
}
function buildTableAlbums(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].userId}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].title}</td>
                    </tr>`
        table.innerHTML += row;
    }
}
function buildTableTodos(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].userId}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].completed}</td>
                    </tr>`
        table.innerHTML += row;
    }
}
async function getData(x){
   const response = await fetch(`https://jsonplaceholder.typicode.com/${x}`);
   const jsonData = await response.json();
   if(x === 'posts'){
        buildTablePosts(jsonData);
   }else if(x === 'albums'){
        buildTableAlbums(jsonData);
   }else{
        buildTableTodos(jsonData);
   }
   
}
   