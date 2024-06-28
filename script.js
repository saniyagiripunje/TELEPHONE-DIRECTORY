const deptdivs = document.querySelectorAll('.button');
const tableContainer = document.querySelector('#table-container');

for (const dept of deptdivs) {
    
    dept.addEventListener('click', (e) => {
        switch (e.target.id) {
            
            case 'one': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th> MOBILE NO.</th></tr><tr><td>1</td><td>saniya</td><td>dgm</td><td>1244</td><td>9106368768</td></tr><tr><td>2</td><td>arohi</td><td>gm</td><td>1254</td><td>8762342893</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;

            case 'two': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>atashi</td><td>gm</td><td>1256</td><td>1234567898</td></tr><tr><td>2</td><td>diksha</td><td>dgm</td><td>1243</td><td>8762345651</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;
            
            case 'three': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>noshita</td><td>dgm </td><td>1287</td><td>4512978362</td></tr><tr><td>2</td><td>prisha</td><td>gm</td><td>1267</td><td>7612349887</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;

            case 'four': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>rijul</td><td>gm</td><td>1234</td><td>7451238532</td></tr><tr><td>2</td><td>arnav</td><td>dgm</td><td>1290</td><td>8761234578</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;

            case 'five': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>devesh</td><td>dgm</td><td>1287</td><td>987634572</td></tr><tr><td>2</td><td>sarthik</td><td>gm</td><td>1256</td><td>1234567872</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;

            case 'six': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>shruti</td><td>gm</td><td>1243</td><td>5623563222</td></tr><tr><td>2</td><td>aanshi</td><td>dgm</td><td>1287</td><td>9876543234</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;

            case 'seven': tableContainer.innerHTML = '<table class="table table-striped table-bordered"><tbody><tr><th>S.NO.</th><th>NAME</th><th>DESIGNATION</th><th>OFFICE</th><th>MOBILE NO.</th></tr><tr><td>1</td><td>maaviah</td><td>dgm</td><td>1245</td><td>4567234874</td></tr><tr><td>2</td><td>ritvij</td><td>gm</td><td>1223</td><td>4323987641</td></tr></tbody></table>';
            document.getElementById("default_template").style.display="none"; 
            break;
        }
    })

}    

// Set default active tab
document.getElementById('none').click();

