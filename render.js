
// HTTP Request
// function xhr(args = {}) {
// 	const $args = { data: {}, dataType: 'json', methodType: 'POST', contentType: 'application/x-www-form-urlencoded; charset=UTF-8' }
// 	param = $.extend( $args, args )
//     return $.ajax( {
//         url : param.url,
//         method : param.methodType,
//         data: param.data,
//         dataType : param.dataType,
// 		headers: {
// 			'Content-Type': param.contentType,
			
// 		},  
//         beforeSend: () => {
//             if ( param.before && typeof(param.before) === "function" ) param.before()
//         },
//         progress: event => {
//             if ( param.progress && typeof(param.progress) === "function" ) param.progress(event)
//         }        
//     } )
// }function resolver( promise, callback ) {
//     promise.then(
//         data => callback(data),
//         error => console.log( 'something went wrong', error )
//     )
// }

// let loading = true
let wrapper_settings = document.getElementById('wrapper')


let activeComponent = 'Company'





function renderSettings(){

    let content = `
                    <div style="width:100%;height:100%;">
                        <div style="width:100%;display:flex;flex-direction:row;align-items:center">
                            <div style="width:60px;height:60px;border-radius:30px;background-color:#fff;display:flex;justify-content:center;align-items:center">
                                <img src="images/computer.png" style="width:50%"/>
                            </div>
                            <div style="margin-left:8px">
                               <div style="font-size:13px"> COMPUTER MANAGER</div>
                               <div style="font-weight:bold">COMPUTER MANAGER</div>
                               <div style="font-size:12px">Computers are managed via this module</div>
                            </div>
                        </div>




                        
                        <div style="width:100%;display:flex;flex-direction:row;margin-top:3%">
                            <div style="width:20%;height:100%;padding:20px">
                                <div style="width:100%;height:100%;border-radius:5px;padding-top:20px;padding-bottom:20px;cursor:pointer" class="menu-settings">

                                    <div style="width:100%;height:30px;margin-bottom:5px;">
                                      Company
                                    </div>

                                    <div style="width:100%;height:30px;margin-bottom:5px">
                                        Department
                                    </div>

                                    <div style="width:100%;height:30px;background-color:#fff;margin-bottom:5px">
                                     Users
                                    </div>

                                    <div style="width:100%;height:30px;background-color:#fff;margin-bottom:5px">
                                        Computer Brand
                                    </div>
                                    
                                    <div style="width:100%;height:30px;background-color:#fff;margin-bottom:5px">
                                         Computer Type
                                    </div>
                                    
                                </div>
                            </div>
                            <div style="width:70%;height:100%;padding-top:40px" id="segment"/>
                               
                            

                        </div>
                       
                        
                    
                    </div>
    
                    `
        wrapper_settings.innerHTML=content
        Switcher('Company')
        document.querySelector('.menu-settings').children[0].classList.add('activeSettings')
        checkActive();
}

function editSettings(){
    console.log('EditSettings')
}

function removeURL(){
    // Get the current URL
    var url = window.location.href;

    // Check if the URL contains a hash variable
    if (url.indexOf("#") !== -1) {
    // Remove the hash variable
    var cleanUrl = url.substring(0, url.indexOf("#"));
        console.log(cleanUrl)
    // Replace the current URL without the hash variable
    window.history.replaceState({}, document.title, cleanUrl);
    }
}

function checkActive(){
    if(document.querySelector('.menu-settings')){
        document.querySelector('.menu-settings').addEventListener('click',function(e){
            let selected = e.target.textContent.trim()
            
           let children =  document.querySelector('.menu-settings').children;
           for(let i=0;i<children.length;i++){
                if(children[i].textContent.trim() == selected ){
                    
                    children[i].classList.add('activeSettings');
                   // CompanyView(children[i].textContent.trim())
                   //children[i].textContent.trim()+`View`+(children[i].textContent.trim());
                   removeURL()
                   Switcher(children[i].textContent.trim())
                   console.log(children[i].textContent.trim())
                   
                    
                }
                else{
                    children[i].classList.remove('activeSettings');
                }
           }
        })
    }
    

}

function Switcher(data){

    // console.log('Received data:', data);

    switch(data){
        case 'Company':
            return CompanyView('Company');
        case 'Department':
            return DepartmentView('Department');
        case 'Users':
            return UserView('User');
        case 'Computer Brand':
            return BrandView('Brand');
        case 'Computer Type':
            return TypeView('Type');
        default:
            console.log(data)
    }
}








//COMPANY


// function CompanyView(param){
//     let content = `<div>
                        
//                         <div style="margin-top:0px;width:100%" id="companyWrapper">
//                             <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
                            
//                                 <div class="addDepartment" style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:10px">
//                                     <img src="images/plus.svg" style="width:10%;margin-right:10px"/>                                    
//                                     <a style="color:white;" href='#company'> Add Company</a>
//                                 </div>
                               
//                             </div>
//                             <table class="table "  style="width:100%">
//                             <thead>
//                             <tr>
//                                 <th scope="col">id</th>
//                                 <th scope="col">Company name</th>
                              
//                                 <th scope="col">Created at</th>
//                                 <th scope="col">Actions</th>
                                
//                             </tr>
//                             </thead>
//                             <tbody id="company-tbody">
                          
//                             </tbody>
//                         </table>
//                         </div>
    
//                     </div>
                
                   
// 		<br />
// 		<br />
                    
                    
                    
                    
                    
//                     `
//     document.getElementById('segment').innerHTML=content
//     displaycompany(document.querySelector('#company-tbody'))
//     // company(content);
// }
function CompanyView(param) {
    let content = `

    
	  
	          <body>
                    <div>
                        <div style="margin-top:0px;width:100%" id="companyWrapper">
                        <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
                            <div class="addDepartment" style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:10px">
                            <img src="images/plus.svg" style="width:10%;margin-right:10px"/>
                            <a style="color:white;" onClick="addCompanyView()"> Add Company</a>
                            </div>
                        </div>
                        <table class="table   table table-striped" id="company-table" style="width:100%">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Company name</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                        </table>
                        </div>
                    </div>
   
    `;
    document.getElementById('segment').innerHTML = content;
    displaycompany($('#company-table'));
  }


// function displaycompany(companyNameHTML){              
//     let operation ="Show"        
//     $.ajax({
//         url:"functions/company.php",
//         method:'POST',
//         dataType:'json',
//         data:{operation},
        
//         success:function(data){
//             console.log(data?.data)
//             if(data?.status){
//                 let dataset = '';
//                 data.data.forEach((d,index)=>{
//                 dataset += `<tbody key=${index} value=${d.id}>
                               
//                                 <td>${d.id}  </td>  
//                                 <td>${d.names}  </td>                                                                                                             
//                                 <td>${d.created_at}  </td>
//                                 <td>
//                                     <button class='btn btn-primary edit' onClick="editCompany('${companyNameHTML}','${d.names}',${d.id})" id='' data-attr=''>Edit</button>

//                                     <button class='btn btn-danger delete' onClick="deleteCompany(${d.id})" id=''>Delete</button>
//                                 </td>
                                
//                             </tbody>` 
//                 })
//                 console.log(dataset)
//                 companyNameHTML.innerHTML = dataset;


                
//             }
//         },
//         error:function(xh,Obj,err){
//             console.log(err)
//         }
//     })
// }


// function displaycompany() {
//                 let operation = "Show";
//                $('#company-table').DataTable({
//                   pageLength:5,
//                   lengthMenu: [5, 10, 25, 50, 100],// Add the available options for entries per page
//                   processing: true,
//                   serverSide: true,
//                   order:[],
//                   retrieve: true,
//                   ajax:( {
//                     url: "functions/company.php",
//                     method: 'POST',
                    
                   
//                     data: {
//                       operation: operation
//                     }
// }),
         
//                 });

//                 document.querySelector('#company-table').addEventListener('click',function(e){
//                     if(e.target.classList.contains("edited")){
//                     console.log(e.target.id)
//                     addCompanyView(e.target.id)
//                 }
//                 })
//               }
              

function displaycompany(companyNameHTML) {
                
                $('#company-table').DataTable({
                    lengthMenu: [
                        [5,10, 25, 50, -1],[5,10, 25, 50, 'All']],
                   
                    ajax: 'functions/company.php',
                    type: 'POST',
                   
                    columns: [
                        { data: 'id' },
                        { data: 'names' },
                        { data: 'created_at' },
                     
                        { "data": null,
                             "render": function(data, type, row) {

                            //    return `<button class='btn btn-primary edited' id="('${companyNameHTML}', '${row.names}', '${row.id}', '${row.created_at})"  data-attr="('${companyNameHTML}', '${row.names}', ${row.id})">Edit</button> <button class="btn btn-danger delete" onClick="deleteCompany(${row.id})">Delete</button>`;
                            //    return `<button class='btn btn-primary edited' id='edit-${row.id}' data-attr='${companyNameHTML},${row.names},${row.id},${row.created_at}'>Edit</button> <button class="btn btn-danger delete" onClick="deleteCompany(${row.id})">Delete</button>`;
                           
                            //    return `<button class='btn btn-primary edited' id='${row.id},${row.names},${row.created_at}', data-attr='${companyNameHTML},${row.names},${row.id},${row.created_at}'>Edit</button> <button class="btn btn-danger delete" onClick="deleteCompany(${row.id})">Delete</button>`;  
                                return ` <button class='btn btn-primary edit' onClick=" addCompanyView()('${companyNameHTML}','${row.names}',${row.id})" id='' data-attr=''>Edit</button>`  
                                 }
                           }    
                    ]
                });
        

                //     document.querySelector('#company-table').addEventListener('click',function(e){
                //     if(e.target.classList.contains("edited")){
                //     console.log(e.target.id)
                //     addCompanyView(e.target.id)
                // }
                // })
              }
              


function editCompanyView(html,company_name,id,){

    // let company_name = document.querySelector('#company_name').value;
    
      
    let content= `
    
                    <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
                        <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Edit Company</div>
                            <div style="margin-bottom:10px;">


                                <input type="hidden" id="id"  class="form-control text-sm"value=${id}>
                          

                                <label class="text-control;text-sm">Company Name</label><br/>
                                <input type="text" id="company_name" name:"company_name" class="form-control text-sm"value=${company_name}>
                                </div>
                              
                        </div>
                          <div style="margin-bottom:10px">
                                
                                <div>
                                   <button class="form-control createcompany" style="background-color:#9ACD32;color:#fff" onclick=addCompanyView()>${company_name ? 'Edit Company':'Edit Company'}</button>
                                </div>
                            </div>
    
                     </div>`
    
    
    document.querySelector('#segment').innerHTML =content
}






function updateCompany(){
    // alert("i am here")

    let C_name= document.querySelector('#company_name').value;
    let id = document.querySelector('#id').value; // Assuming the id is stored in a data-id attribute
       
        let operation ="Edit"

        

        if(C_name !=''){
            $.ajax({
                url:"functions/company.php",
                method:'POST',
                // dataType:'json',
                data:{C_name,operation,id},
                success:function(data){
                        if(data?.status){
                            alert(data?.message)
                        }
                },
                error:function(xh,Obj,err){
                    console.log(err)
                }
            })

           

        }
        else{
            alert("All fields are required")
        }


}

// function deleteCompany(id) {
   
//      let operation ="delete";
//     if (confirm("Are you sure you want to delete this company?")) {
        
//       $.ajax({
//         url: "deletee.php",
//         method: 'POST',
//         // dataType:'json',
//         data: {operation, id },
//         success: function(data) {
//           if (data?.status) {
//             // Remove the deleted row from the DataTable
//             // $('#company-table').DataTable().row(function(idx, data, node) 
//             let dataTable = $('#company-table').DataTable();
//             dataTable.row(function(idx, data, node)
//             {
//               return data[0] === id;
//             }).remove().draw();
//             dataTable.ajax.reload();
//             console.log("Company deleted successfully!");
//           } else {
//             console.log("Unable to delete successfully!");
//             console.error("Error deleting company:", data.message);
           
//           }
//         },
//         error: function(xhr, Obj, err) {
//           console.error("Error deleting company:", err);
//         }
//       });
//     }
//   }
 
// $(document).on('click', '.delete', function(){
//     let operation ="delete"
//     var id = $(this).attr("id");
//     var dataTable = $('#company-table').DataTable();
    
//     if(confirm("Are you sure you want to delete this user?"))
//     {
//         $.ajax({
//             url:"deletee.php",
//             method:"POST",
//             data:{id, operation},
//             success:function(data)
//             {
//               console.log("Reached the url");
//                 dataTable.ajax.reload();
//             },
//             error: function(xhr, status, error) {
//       console.log("Error reaching the url: " + error);
//   }
            
//         });
//     }
//     else
//     {
//         return false;   
//     }
// });

$(document).on('click', '.delete', function() {
    let operation = "delete";
    var id = $(this).attr("id");
    var dataTable = $('#company-table').DataTable();

    if(confirm("Are you sure you want to delete this user?")) {
        $.ajax({
            url: "deletee.php",
            method: "POST",
            data: {id, operation},
            success: function(data) {
                console.log("Reached the url");
                var response = JSON.parse(data);
                if (response.status) {
                    alert(response.message);
                    dataTable.ajax.reload();
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                console.log("Error reaching the url: " + error);
            }
        });
    } else {
        return false;
    }
});















//Department

function DepartmentView(param){
    let content = `<div>
                        
                        <div style="margin-top:0px;width:100%" id="departmentWrapper">
                            <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
                            
                                <div class="addDepartment" style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:10px">
                                    <img src="images/plus.svg" style="width:10%;margin-right:10px"/>                                    
                                    <a style="color:white;" onClick="addDepartmentView()"> Add Department</a>
                                </div>
                               
                            </div>
                            <table class="table" id="department-table" style="width:100%">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Department name</th>
                                <th scope="col">Company</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                        
                        </table>
                        </div>
    
                    </div>`
    document.getElementById('segment').innerHTML=content
    displayDepartments(document.querySelector('#department-tbody'))
   
    
}

// function displayDepartments(companyNameHTML){              
//     let operation ="Show"        
//     $.ajax({
//         url:"functions/department.php",
//         method:'POST',
//         dataType:'json',
//         data:{operation},
//         success:function(data){
//             console.log(data?.data)
//             if(data?.status){
//                 let dataset = '';
//                 data.data.forEach((d,index)=>{
//                 dataset += `<tbody key=${index} value=${d.id}>
                               
                              
//                                   <td>${d.id}  </td>    
//                                  <td>${d.names}  </td>                                                       
//                                 <td>${d.named}  </td>                                                           
//                                 <td>${d.created_at}  </td>
//                                 <td><button class='btn btn-primary edit' onClick=" editDepartments('${companyNameHTML}','${d.names}',${d.id})" id='' data-attr=''>Edit</button>
//                                     <button class='btn btn-danger delete' id=''>Delete</button>
//                                 </td>
                                
//                             </tbody>` 
//                 })
//                 console.log(dataset)
//                 companyNameHTML.innerHTML = dataset;


                
//             }
//         },
//         error:function(xh,Obj,err){
//             console.log(err)
//         }
//     })
// }

function displayDepartments() {
    // let operation = "Show";
   $('#department-table').DataTable({
      pageLength:5,
      lengthMenu: [5, 10, 25, 50, 100],// Add the available options for entries per page
      processing: true,
      serverSide: true,
      order:[],
      retrieve: true,
      ajax:( {
        url: "functions/department.php",
        method: 'POST',
        
        dataType: 'json',
        // data: {
        //   operation: operation
        // }
}),

    });

    document.querySelector('#department-table').addEventListener('click',function(e){
        if(e.target.classList.contains("edited")){
        console.log(e.target.id)
        addDepartmentView(e.target.id)
    }
    })
  }

// function editDepartments(html,department_name,id){
//     console.log(department_name,id)
      
//     let content= `
    
//                     <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
//                         <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Edit Department</div>
//                             <div style="margin-bottom:10px;">


//                                 <input type="hidden" id="id"  class="form-control text-sm"value=${id}>
                          

//                                 <label class="text-control;text-sm">Department Name</label><br/>
//                                 <input type="text" id="department_name" name:"department_name" class="form-control text-sm"value=${department_name}>
//                                 </div>
                              
//                         </div>
//                           <div style="margin-bottom:10px">
                                
//                                 <div>
//                                    <button class="form-control createcompany" style="background-color:#9ACD32;color:#fff" onclick=updateDepartment()>${department_name ? 'Edit Department':'Create Department'}</button>
//                                 </div>
//                             </div>
    
//                      </div>`
    
    
//     document.querySelector('#segment').innerHTML =content
// }

// function updateDepartment(){
//     // alert("i am here")

//     let D_name= document.querySelector('#department_name').value;
//     let id = document.querySelector('#id').value; // Assuming the id is stored in a data-id attribute
       
//         let operation ="Edit"

        

//         if(D_name !=''){
//             $.ajax({
//                 url:"functions/department.php",
//                 method:'POST',
//                 // dataType:'json',
//                 data:{D_name,operation,id},
//                 success:function(data){
//                         if(data?.status){
//                             alert(data?.message)
//                         }
//                 },
//                 error:function(xh,Obj,err){
//                     console.log(err)
//                 }
//             })

//             alert("extremely sucesfull")

//         }
//         else{
//             alert("All fields are required")
//         }


// }




















//User
function UserView(params){
    
    let content = `<div>
                        
                        <div style="margin-top:0px;width:100%" id="userWrapper">
                            <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
                            
                                <div class="addUser"  style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:10px">
                                    <img src="images/plus.svg" style="width:10%;margin-right:10px"/>  
                                    
                                    <a style="color:white;" href='#user'> Add User</a>
                                </div>
                            </div>
                            <table class="table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th scope="col">id</th>
                                  <th scope="col">username</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Company</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody id="user-tbody">
                        
                            </tbody>
                        </table>
                        </div>

                    </div>`

document.getElementById('segment').innerHTML=content
displayUser(document.querySelector('#user-tbody'))


}

function displayUser(companyNameHTML){              
    let operation ="Show"        
    $.ajax({
        url:"functions/user.php",
        method:'POST',
        dataType:'json',
        data:{operation},
        success:function(data){
            console.log(data?.data)
            if(data?.status){
                let dataset = '';
                data.data.forEach((d,index)=>{
                dataset += `<tbody key=${index} value=${d.id}>
                            
                                <td>${d.id}  </td>    
                                 <td>${d.username}  </td>                                                       
                                <td>${d.firstname}  </td>                                                           
                                <td>${d.lastname}  </td>
                                <td>${d.department}  </td>    
                                 <td>${d.company}  </td>                                                                                                              
                                <td>${d.created_at}  </td>
                                <td>
                                    <button class='btn btn-primary edit' id='' data-attr=''>Edit</button>
                                    <button class='btn btn-danger delete' id=''>Delete</button>
                                </td>
                                
                            </tbody>` 
                })
                console.log(dataset)
                companyNameHTML.innerHTML = dataset;


                
            }
        },
        error:function(xh,Obj,err){
            console.log(err)
        }
    })
}






//COMPUTER BRAND

function BrandView(params){
    let content = `<div>
                        
    <div style="margin-top:0px;width:100%" id="printerBrandWrapper">
        <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
        
            <div class="addBrand" style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center">
                <img src="images/plus.svg" style="width:10%;margin-right:10px"/>  
               
                <a style="color:white;" href='#computer_brand'> Add Brand</a>
            </div>
        </div>
        <table class="table table-striped" style="width:100%">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Computer Brand</th>
            <th scope="col">Created at</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody id="brand-tbody">
      
        </tbody>
    </table>
    </div>

</div>`
document.getElementById('segment').innerHTML=content
displayBrand(document.querySelector('#brand-tbody'))
}

function displayBrand(companyNameHTML){              
    let operation ="Show"        
    $.ajax({
        url:"functions/brand.php",
        method:'POST',
        dataType:'json',
        data:{operation},
        success:function(data){
            console.log(data?.data)
            if(data?.status){
                let dataset = '';
                data.data.forEach((d,index)=>{
                dataset += `<tbody key=${index} value=${d.id}>
                            
                                <td>${d.id}  </td>    
                                 <td>${d.names}  </td>                                                                                                    
                                <td>${d.created_at}  </td>
                                <td>
                                    <button class='btn btn-primary edit' id='' data-attr=''>Edit</button>
                                    <button class='btn btn-danger delete' id=''>Delete</button>
                                </td>
                                
                            </tbody>` 
                })
                console.log(dataset)
                companyNameHTML.innerHTML = dataset;


                
            }
        },
        error:function(xh,Obj,err){
            console.log(err)
        }
    })
}



//COMPUTER TYPE


function TypeView(params){
    let content = `<div>
                        
    <div style="margin-top:0px;width:100%" id="printerTypeWrapper">
        <div style="width:100%;display:flex;flex-direction:row;justify-content:flex-end;align-item:center">
        
            <div class="addType" style="width:20%;height:35px;background-color:#3792cb;padding:10px;border-radius:10px;color:#fff;display:flex;justify-content:center;align-items:center;margin-bottom:10px">
                <img src="images/plus.svg" style="width:10%;margin-right:10px"/>  
                
                <a style="color:white;" href='#computer_type'> Add Brand Type</a>
            </div>
        </div>
        <table class="table table-striped" style="width:100%">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Computer Name</th>
            <th scope="col">user</th>
            <th scope="col">Dept.</th>
            <th scope="col">Os</th>
            <th scope="col">Hard disk</th>
            <th scope="col">Cpu</th>
            <th scope="col">RAM</th>
            <th scope="col">IP</th>
            <th scope="col">Mac Address</th>
            <th scope="col">Notes</th>
            <th scope="col">HDD/SSD</th>
               <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody id="type-tbody">
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        ...
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>           
      
        </tbody>
    </table>
    </div>

</div>`
document.getElementById('segment').innerHTML=content
displayType(document.querySelector('#type-tbody'));


}

function displayType(companyNameHTML){              
    let operation ="Show"        
    $.ajax({
        url:"functions/type.php",
        method:'POST',
        dataType:'json',
        data:{operation},
        success:function(data){
            console.log(data?.data)
            if(data?.status){
                let dataset = '';
                data.data.forEach((d,index)=>{
                dataset += `<tbody key=${index} value=${d.id}>
                            
                                <td>${d.id}  </td>    
                                 <td>${d.computer_name}  </td>                                                                                                    
                                <td>${d.user_id}  </td>
                                <td>${d.dept_id}  </td>    
                                 <td>${d.os_id}  </td>                                                                                                    
                                <td>${d.hard_disk}  </td>
                                <td>${d.cpu_id}  </td>    
                                 <td>${d.ip}  </td>                                                                                                    
                                <td>${d.mac_address}  </td>
                                 <td>${d.ram}  </td>
                                  <td>${d.notes}  </td>
                                 









                                <td>
                                    <button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                    <button class='btn btn-danger delete' id=''>Delete</button>
                                    
                                </td>


                             
                                                          
                            </tbody>` 
                })
                console.log(dataset)
                companyNameHTML.innerHTML = dataset;
            


                
            }
        },
        error:function(xh,Obj,err){
            console.log(err)
        }
    })
}
























async function printertype(content){
    let allprintertypes =[];
    let dataset=""
    await resolver( xhr({ url: `${BASE_URL}app/dynamic_read/printer_type/id,printer_type,created_at`, methodType: 'GET' }), data => {
           
        if(data){
            data.forEach((element,index) => {
                dataset += `<tr>
                                <td>${index +1 }</td>
                                <td>${element.printer_type}</td>
                                <td>${element.created_at}</td>
                                <td><img src="images/icons8-edit.svg" data-element='${JSON.stringify(element)}' onclick="editBrandType(this)" style="width:20px;height:20px;margin-right:5px;cursor:pointer"/><img src="images/delete.svg" style="width:20px;height:20px;cursor:pointer" onclick="deleteBrandType(${element.id})"/></td>
                            </tr>`
            });
        }
        allprintertypes.push(data)
        let NotFound =`<div style="width:50%">
                        <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center">
                            <img src="images/not-found.svg" style="width:60%"/>

                        </div>
                        <div  style="display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:18px;margin-top:10px">
                            <div style="font-size:15px;margin-top:5px"> NO COMPUTER TYPE</div>
                            
                            <div class="addType" style="cursor:pointer;width:40%;height:40px;margin-top:10px;font-size:13px;color:#fff;background-color:#3792cb;border-radius:10px;display:flex;justify-content:center;align-items:center">
                                    <img src="images/plus.svg" style="width:10%;margin-right:10px"/>ADD COMPUTER TYPE
                            </div>
                            <div style="font-size:14px;color:#666666;margin-top:10px">Got a large number of printer type to add? <span style="color:#3792cb">import instead</span></div>

                        </div>
                    </div>`
                    if(document.getElementById('printerTypeWrapper')){
                        
                        document.getElementById('printerTypeWrapper').innerHTML = allprintertypes[0].length == 0?  NotFound:content
                    }
                    if( document.getElementById('type-tbody')){
                        
                        document.getElementById('type-tbody').innerHTML = allprintertypes[0].length > 0  && dataset
                    }

                    addType() 
    } )

    
                   
}
async function printerbrand(content){
    let allcomputerbrand =[];
    let dataset = "";
    await resolver( xhr({ url: `http://localhost:8000/api/app/dynamic_read/printer_brand/id,printer_brand,created_at`, methodType: 'GET' }), data => {
           
       

            if(data){
                data.forEach((element,index) => {
                    dataset += `<tr>
                                    <td>${index + 1 }</td>
                                    <td>${element.printer_brand}</td>
                                    <td>${element.created_at}</td>
                                    <td><img src="images/icons8-edit.svg" data-element='${JSON.stringify(element)}' onclick="editBrand(this)" style="width:20px;height:20px;margin-right:5px;cursor:pointer"/><img src="images/delete.svg" style="width:20px;height:20px;cursor:pointer" onclick="deleteBrand(${element.id})"/></td>
                                </tr>`
                });
            }
            let NotFound =`<div style="width:50%">
            <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center">
                <img src="images/not-found.svg" style="width:60%"/>

            </div>
            <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:18px;margin-top:10px">
                <div style="font-size:15px;margin-top:5px"> NO COMPUTER BRAND</div>
                
                <div class="addBrand" style="cursor:pointer;width:40%;height:40px;margin-top:10px;font-size:13px;color:#fff;background-color:#3792cb;border-radius:10px;display:flex;justify-content:center;align-items:center">
                        <img src="images/plus.svg" style="width:10%;margin-right:10px"/>ADD COMPUTER BRAND
                </div>
                <div style="font-size:14px;color:#666666;margin-top:10px">Got a large number of printer brand to add? <span style="color:#3792cb">import instead</span></div>

            </div>
        </div>`
        allcomputerbrand.push(data)
        if(document.getElementById('printerBrandWrapper')){
            document.getElementById('printerBrandWrapper').innerHTML = allprinterbrand[0].length == 0?  NotFound:content
        }
        if( document.getElementById('brand-tbody')){
            document.getElementById('brand-tbody').innerHTML = allprinterbrand[0].length > 0  && dataset
        }
        addBrand()
        
    } )

   
                   
}

function addDepartment(wrapper_settings){
    document.querySelector('.addDepartment').addEventListener('click',function(){
        window.location = "#department"
        //renderAddComponent(wrapper_settings)
    })
   
}
// function addCompany(wrapper_settings){
//     if(document.querySelector('.addCompany')){
       
//         document.querySelector('.addCompany').addEventListener('click',function(){
//             window.location = "#company"
//             //renderAddComponent(wrapper_settings)
//         })
//     }
   
   
// }
function addUser(wrapper_settings){
    document.querySelector('.addUser').addEventListener('click',function(){
        window.location = "#user"
        //renderAddComponent(wrapper_settings)
    })
   
}
function addBrand(wrapper_settings){
  
    document.querySelector('.addBrand').addEventListener('click',function(){
        
        window.location = "#printer_brand"
        //renderAddComponent(wrapper_settings)
    })
   
}
function addType(wrapper_settings){
    document.querySelector('.addType').addEventListener('click',function(){
        window.location = "#printer_type"
        //renderAddComponent(wrapper_settings)
    })
   
}
document.getElementById('companyWrapper')

function loaderView(){

    if(loading){
        let loaderDiv = document.getElementById('loader');
        loaderDiv.classList.remove('hide');
        loaderDiv.classList.add('overlay');

        
    }

   
}


// function deleteCompany(id){
    
//     let deleteShare = window.confirm("Are you sure?")
   
//     if(deleteShare){
//         fetch(`${BASE_URL}company/${id}`,{
//             method:'DELETE', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning':'852121547852',
//                 'Accept':'application/json'
//               },
//               body:JSON.stringify({id})
    
//         })
//         .then((response)=>response.json())
//         .then(result=>{
//             if(result.status == "Request was successful"){
//                 Toastify({
//                     text: result.status,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//                   CompanyView()
               
//             }
//             else{
//                 Toastify({
//                     text: result.data,
//                     duration: 3000,
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #ff0000)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();

//             }
    
//         }
//           )
//         .catch(err=>{
//             Toastify({
//                 text: err,
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "right", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function(){} // Callback after click
//               }).showToast();
           
              
//             })
//     }

   
// }

// function deleteDepartment(id){
    
//     let deleteShare = window.confirm("Are you sure?")

//     if(deleteShare){
//         fetch(`${BASE_URL}department/${id}`,{
//             method:'DELETE', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning':'79867'
//               },
              
    
//         })
//         .then((response)=>response.json())
//         .then(result=>{
//             if(result.status == "Request was successful"){
//                 Toastify({
//                     text: result.status,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//                   DepartmentView()
               
//             }
//             else{
//                 Toastify({
//                     text: result.data,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #ff0000)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//             }
    
//         }
//           )
//         .catch(err=>{
//             Toastify({
//                 text: err,
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "right", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function(){} // Callback after click
//               }).showToast();
           
              
//             })
//     }

   
// }

// function deleteBrand(id){
    
//     let deleteShare = window.confirm("Are you sure?")

//     if(deleteShare){
//         fetch(`${BASE_URL}brand/${id}`,{
//             method:'DELETE', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning':'79867'
//               },
//               body:JSON.stringify({id})
    
//         })
//         .then((response)=>response.json())
//         .then(result=>{
//             if(result.status){
//                 Toastify({
//                     text: result.status,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//                   BrandView()
               
//             }
    
//         }
//           )
//         .catch(err=>{
//             Toastify({
//                 text: err,
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "right", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function(){} // Callback after click
//               }).showToast();
//               BrandView()
           
              
//             })
//     }

   
// }

// function deleteBrandType(id){
    
//     let deleteShare = window.confirm("Are you sure?")

//     if(deleteShare){
//         fetch(`${BASE_URL}brandtype/${id}`,{
//             method:'DELETE', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning':'79867'
//               },
//               body:JSON.stringify({id})
    
//         })
//         .then((response)=>response.json())
//         .then(result=>{
//             if(result.status){
//                 Toastify({
//                     text: result.status,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//                   TypeView();
                  
               
//             }
    
//         }
//           )
//         .catch(err=>{
//             Toastify({
//                 text: err,
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "right", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function(){} // Callback after click
//               }).showToast();
           
              
//             })
//     }

   
// }

// function deleteUser(id){
//     let deleteShare = window.confirm("Are you sure?")

//     if(deleteShare){
//         fetch(`${BASE_URL}printeruser/${id}`,{
//             method:'DELETE', 
//             headers: {
//                 'Content-Type': 'application/json',
//                 'ngrok-skip-browser-warning':'79867'
//               },
//               body:JSON.stringify({id})
    
//         })
//         .then((response)=>response.json())
//         .then(result=>{
//             if(result.status){
//                 Toastify({
//                     text: result.status,
//                     duration: 3000,
//                     destination: "https://github.com/apvarun/toastify-js",
//                     newWindow: true,
//                     close: true,
//                     gravity: "top", // `top` or `bottom`
//                     position: "right", // `left`, `center` or `right`
//                     stopOnFocus: true, // Prevents dismissing of toast on hover
//                     style: {
//                       background: "linear-gradient(to right, #00b09b, #96c93d)",
//                     },
//                     onClick: function(){} // Callback after click
//                   }).showToast();
//                   UserView()
               
//             }
    
//         }
//           )
//         .catch(err=>{
//             Toastify({
//                 text: err,
//                 duration: 3000,
//                 destination: "https://github.com/apvarun/toastify-js",
//                 newWindow: true,
//                 close: true,
//                 gravity: "top", // `top` or `bottom`
//                 position: "right", // `left`, `center` or `right`
//                 stopOnFocus: true, // Prevents dismissing of toast on hover
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 },
//                 onClick: function(){} // Callback after click
//               }).showToast();
           
              
//             })
//     }
// }







var search = location.hash.replace('#','');
var _push = url=>{
    history.pushState(null,null,url);
    loadUrl(document.location.href);
}

window.onpopstate = e => loadUrl(document.location.href);

const loadUrl = url => url === location.origin + location.pathname ? renderSettings() :renderAddComponent();
const openEntry = search != "" ? _push(document.location.href):''


loadUrl(document.location.href);







