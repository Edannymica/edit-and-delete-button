

function loadAddView(wrapper =null){
  
    console.log('location',location.hash)
        switch(location.hash){
            case '#department':
                return addDepartmentView();
                break;
            case '#company':
                return addCompanyView();
                break;
            case '#user':
                return addUserView();
                break;
            case '#computer_brand':
                return addPrintBrandView();
                break;
            case '#computer_type':
                return addPrintTypeView();
                break;
                default:
                    return 
            
        }
    }
    
   
    
    
    function addCompanyView(params){     
        // let dataValue = params ? JSON.parse(params) : null;   
       
        let dataValue = params && JSON.parse(params)
        // console.log("data",params  && JSON.parse(params))
        console.log("data", dataValue);
        
        let button = params ?` <button  class="form-control createcompany" id="check" style="background-color:#9ACD32;color:#fff")' onclick= updateCompany()>Edit Company</button>`
        : `<button  class="form-control createcompany" id="check" style="background-color:#9ACD32;color:#fff")' onclick = insertCompany()>Create Company</button>`
      
        let contentx = `
                        <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
                            <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold"> ${params ? 'Edit Company':'Create New Company'}</div>

                            <div style="margin-bottom:10px;">
                                <label class="text-control;text-sm">Company Name</label><br/>                                
                             
                                <div>
                                   <input type="hidden" id="id"  class="form-control text-sm"value=${params ? dataValue.id : null}>                                
                                   <input type="text" id="company_name" name="company_name" class="form-control text-sm"value=' ${params ? dataValue.names : '' }'>
                                </div>
                            </div>                                                
                            <div style="margin-bottom:10px">                                
                                <div>                                  
                                    ${button}                                  
                                </div>
                            </div>    
                        </div>
        
                        `                      
                        
                          
       if( document.getElementById('companyWrapper')){
            document.getElementById('companyWrapper').innerHTML=contentx      
       }      
        
    }
    function insertCompany() {
        let names = document.querySelector('#company_name').value;
        let operation = "Add";
      
        if (names !== '') {
          $.ajax({
            url: "functions/insertupdate.php",
            method: 'POST',
            // dataType: 'json',
            data: { names, operation },
            success: function(data) {
              if (data?.status) {
                alert(data?.message);
              } else {
                // Check if the company already exists
                if (data?.message === "Company already exists") {
                  alert("Company already exists.");
                } else {
                  alert("Data Insertion Failed.");
                }
              }
            },
            error: function(xhr, Obj, err) {
              console.log(err);
            }
          });
        } else {
          alert("All fields are required");
        }
      }

    // function insertCompany(){
    //     // alert("are you working")
    //     let names = document.querySelector('#company_name').value
       
    //     let operation ="Add"

        

    //     if(names !=''){
    //         $.ajax({
    //             url:"functions/insertupdate.php",
    //             method:'POST',
    //             dataType:'json',
    //             data:{names,operation},
    //             success:function(data){
    //                     if(data?.status){
    //                         alert(data?.message)
    //                     }
    //             },
    //             error:function(xh,Obj,err){
    //                 console.log(err)
    //             }
    //         })

    //         alert("extremely sucesfull")

    //     }
    //     else{
    //         alert("All fields are required")
    //     }


    // }
 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    function addDepartmentView(params){
       
        let content = `
                        <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
                            <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Create New Department</div>
                            <div style="margin-bottom:10px;">
                                <label class="text-control;text-sm">Department name</label>
                                <div>
                                    <input type="text" value='${params? params?.department_name:''}' id="names" class="form-control text-sm department_name" placeholder="Department name"/>
                                </div>
                            </div>
                            <div style="margin-bottom:10px">
                            
                                <div>
                                    <select id='company_names' class="form-control departmentWrapper company_department" placeholder="Select Company">
                                         
                                                                                             
                                    </select>
                                </div>
                            </div>
                            <div style="margin-bottom:10px">
                                
                                <div>
                                   <button class="form-control createdepartment" style="background-color:#9ACD32;color:#fff" onclick=insertDepartment()>${params ? 'Edit Department':'Create Department'}</button>
                                </div>
                            </div>
    
                        </div>
        
                        `
        
        document.getElementById('departmentWrapper').innerHTML=content
        displayCompany(document.querySelector('#company_names'))
    
    } 
//  function displayCompany(companyNameHTML){
        
//         //let names = document.querySelector('#names').value       
//         let operation ="Show"

        

        
//             $.ajax({
//                 url:"functions/insertupdate.php",
//                 method:'POST',
//                 dataType:'json',
//                 data:{operation},
//                 success:function(data){
//                     console.log(data?.data)
//                         if(data?.status){
//                            let dataset = '<option value="">Select Company</option>';
//                            data.data.forEach((d,index)=>{
//                             dataset += `<option key=${index} value=${d.id}>${d.names}</option>` 
//                            })
//                            console.log(dataset)
//                            companyNameHTML.innerHTML = dataset;


                          
//                         }
//                 },
//                 error:function(xh,Obj,err){
//                     console.log(err)
//                 }
//             })
//     }

    function insertDepartment(){
        // alert("are you working")
        let names = document.querySelector('#names').value
        let company_names = document.querySelector('#company_names').value
       
        let operation ="Add"

        

        if(names !=''){
            $.ajax({
                url:"functions/department.php",
                method:'POST',
                dataType:'json',
                data:{names,company_names,operation},
                success:function(data){
                        if(data?.status){
                            alert(data?.message)
                        }
                },
                error:function(xh,Obj,err){
                    console.log(err)
                }
            })

            // alert("extremely sucesfull")

        }
        else{
            alert("All fields are required")
        }


    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function addUserView(params){
        
        let content = `
                        <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
                            <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Create New User</div>
                            <div style="margin-bottom:10px;">
                                <label class="text-control;text-sm">First name</label>
                                <div><input type="text" value='${params? params.first_name:''}' class="form-control first_name text-sm" placeholder=" Firstname"/></div>
                            </div>
                            <div style="margin-bottom:10px;">
                                <label class="text-control;text-sm">Last name</label>
                                <div><input type="text" value='${params? params.last_name:''}' class="form-control last_name text-sm" placeholder="Lastname"/></div>
                            </div>
                            <div style="margin-bottom:10px">
                                <label class="text-control;text-sm">Company</label>
                                <div>
                                    <select id='company_names' class="form-control departmentWrapper company_department" placeholder="Select Company">
                                         
                                                                                             
                                    </select>
                                </div>
                            </div>
                            <div style="margin-bottom:10px">
                                <label class="text-control;text-sm">Department</label>
                                <div>
                                    <select class="form-control department" placeholder="Select Department">
                                        <option>Select Department</option>
                                    </select>
                                </div>
                            </div>
                            <div style="margin-bottom:10px">
                                
                                <div>
                                   <button class="form-control createuser" style="background-color:#9ACD32;color:#fff">${params ? 'Edit User':'Create User'}</button>
                                </div>
                            </div>
    
                        </div>`
                        if(document.getElementById('userWrapper')){
                            document.getElementById('userWrapper').innerHTML=content
                            // createUserEndpoint(params);
                        }
                        displayCompany(document.querySelector('#company_names'))
                        
    }
    
    function insertUser(){
        // alert("are you working")
        let names = document.querySelector('#names').value
        let company_names = document.querySelector('#company_names').value
       
        let operation ="Add"

        

        if(names !=''){
            $.ajax({
                url:"functions/department.php",
                method:'POST',
                dataType:'json',
                data:{names,company_names,operation},
                success:function(data){
                        if(data?.status){
                            alert(data?.message)
                        }
                },
                error:function(xh,Obj,err){
                    console.log(err)
                }
            })

            // alert("extremely sucesfull")

        }
        else{
            alert("All fields are required")
        }


    }
    function displayCompany(companyNameHTML){
        
        //let names = document.querySelector('#names').value       
        let operation ="Show"

        

        
            $.ajax({
                url:"functions/insertupdate.php",
                method:'POST',
                dataType:'json',
                data:{operation},
                success:function(data){
                    console.log(data?.data)
                        if(data?.status){
                           let dataset = '<option value="">Select Company</option>';
                           data.data.forEach((d,index)=>{
                            dataset += `<option key=${index} value=${d.id}>${d.names}</option>` 
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
    function createUserEndpoint(params){
        console.log('params',params)
        let dataset = '<option value="">Select Company</option>'
        resolver( xhr({ url: `${BASE_URL}app/dynamic_read/company/id,company_name,created_at`, methodType: 'GET' }), data => {
            if(data){
                console.log(data)
                data.forEach((element,index) => {
                    const isSelected = element.id === params?.company_id ? 'selected' : '';
                    dataset+= `<option value=${element.id} ${isSelected}>${element.company_name}</option>`
                });
    
                document.querySelector('.company_department').innerHTML = dataset
            }
        })
        
        if(document.querySelector('.company_department')){
    
            // if(params && document.querySelector('.company_department').value !="" ){
            //     console.log('searched')
            //     let dataset = '';
            //         let company_id = document.querySelector('.company_department').value
            //         alert(company_id)
            //         resolver( xhr({ url: `${BASE_URL}app/company/getdepartments/${company_id}`, methodType: 'GET' }), data => {
            //             if(data.status){
                           
            //                 data.data.forEach((element,index) => {
            //                     const isSelected = element.id === params.department_id ? 'selected' : '';
            //                     dataset+= `<option value=${element.id} ${isSelected}>${element.department_name}</option>`
            //                 });
                
            //                 document.querySelector('.department').innerHTML = dataset
            //             }
            //         })
            // }
    
    
    
            document.querySelector('.company_department').addEventListener('change',function(){
                let dataset = '';
                let company_id = document.querySelector('.company_department').value
               
                resolver( xhr({ url: `${BASE_URL}app/company/getdepartments/${company_id}`, methodType: 'GET' }), data => {
                    if(data.status){
                       
                        data.data.forEach((element,index) => {
                          
                            dataset+= `<option value=${element.id}>${element.department_name}</option>`
                        });
            
                        document.querySelector('.department').innerHTML = dataset
                    }
                })
            })
        }
        if(document.querySelector('.createuser')){
            document.querySelector('.createuser').addEventListener('click',function(){
               
                let department_id = document.querySelector('.department').value
                let company_id = document.querySelector('.company_department').value
                let first_name = document.querySelector('.first_name').value
                let last_name= document.querySelector('.last_name').value
    
                if(department_id == null || department_id == ""){
                    alert('Department name is required')
                    return false
                }
                if(company_id == null || company_id == ""){
                    alert('Company name is required')
                    return false
                }
                if(first_name == null || first_name == ""){
                    alert('First name is required')
                    return false
                }
                if(last_name == null || last_name == ""){
                    alert('Last name is required')
                    return false
                }
                document.querySelector('.createuser').innerHTML="Please wait"
                document.querySelector('.createuser').disabled = true;
                //printer_user_id
                let url;
                let method;
                
                if(params){
                 url = `${BASE_URL}printeruser/${params.printer_user_id}`
                 method = "PUT"
                }
                else{
                 url = `${BASE_URL}printeruser`
                 method = "POST"
                }
                // alert(company_name)
                fetch(url,{
                    method:method, 
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning':'79867',
                      },
                      body:JSON.stringify({department_id,company_id,first_name,last_name})
            
                })
                .then((response)=>response.json())
                .then(result=>{
                    
                    document.querySelector('.createuser').innerHTML="Create User"
                    document.querySelector('.createuser').disabled = false;
                    document.querySelector('.department').value="";
                    document.querySelector('.company_department').value=""
                    document.querySelector('.first_name').value=""
                    document.querySelector('.last_name').value=""
    
                    if(result.status == "Request was successful"){
                        Toastify({
                            text: result.status,
                            duration: 3000,
                            destination: "https://github.com/apvarun/toastify-js",
                            newWindow: true,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "right", // `left`, `center` or `right`
                            stopOnFocus: true, // Prevents dismissing of toast on hover
                            style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                            },
                            onClick: function(){} // Callback after click
                          }).showToast();
                    }
                    
                    
                }
                  )
                .catch(err=>{
                    Toastify({
                        text: err,
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    document.querySelector('.createuser').innerHTML="Create Department"
                    document.querySelector('.createuser').disabled = false;
                        console.log(err)
                    })
            })
        }
        
       
        
    }
    function addPrintBrandView(params){
        let content = `
        <div style="width:50%; display:flex;justify-content:left;flex-direction:column ">
            <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Create Computer Brand</div>
            <div style="margin-bottom:10px;">
                <label class="text-control;text-sm">Computer Brand</label>
                <div><input type="text" value='${params ? params?.printer_brand:''}' class=" form-control text-sm printer_brand" placeholder="Computer brand"/></div>
            </div>
          
            <div style="margin-bottom:10px">
                <div>
                   <button class="form-control createbrand" style="background-color:#9ACD32;color:#fff">${params ? 'Edit Printer Brand':'Create Printer Brand'}</button>
                </div>
            </div>
    
        </div>
    
        `
    
    // document.getElementById('departmentWrapper').innerHTML=content
    document.getElementById('printerBrandWrapper').innerHTML=content
    createBrandEndpoint(params)
    }
    
    function createBrandEndpoint(params){
        
    
        if(document.querySelector('.createbrand')){
            document.querySelector('.createbrand').addEventListener('click',function(){
               
                let computer_brand = document.querySelector('.printer_brand').value
               
    
                if(computer_brand == null || computer_brand == ""){
                    alert('Computer Brand name is required')
                    return false
                }
               
                document.querySelector('.createbrand').innerHTML="Please wait"
                document.querySelector('.createbrand').disabled = true;
                let url;
               let method;
    
               if(params){
                url = `${BASE_URL}brand/${params.id}`
                method = "PUT"
               }
               else{
                url = `${BASE_URL}brand`
                method = "POST"
               }
               
                // alert(company_name)
                fetch(url,{
                    method:method, 
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning':'79867',
                      },
                      body:JSON.stringify({computer_brand})
            
                })
                .then((response)=>response.json())
                .then(result=>{
                    
                    document.querySelector('.createbrand').innerHTML="Create Printer Brand"
                    document.querySelector('.createbrand').disabled = false;
                    document.querySelector('.printer_brand').value="";
                  
                    if(result.status == "Request was successful"){
                        Toastify({
                            text: result.status,
                            duration: 3000,
                            destination: "https://github.com/apvarun/toastify-js",
                            newWindow: true,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "right", // `left`, `center` or `right`
                            stopOnFocus: true, // Prevents dismissing of toast on hover
                            style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                            },
                            onClick: function(){} // Callback after click
                          }).showToast();
                    }
                    
                    
                }
                  )
                .catch(err=>{
                    Toastify({
                        text: err,
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    document.querySelector('.createuser').innerHTML="Create Department"
                    document.querySelector('.createuser').disabled = false;
                        console.log(err)
                    })
            })
        }
        
       
        
    }
    function addPrintTypeView(params){
        let content = `
        <div style="width:50%; display:flex;justify-content:left;flex-direction:column">
            <div style="margin-top:0px;margin-bottom:20px;color:#3792cb;font-weight:bold">Create Computer Type</div>
            <div style="margin-bottom:10px;">
                <label class="text-control;text-sm">Computer Type</label>
                <div><input type="text" value='${params ? params?.printer_type:''}' class=" form-control text-sm printer_type" placeholder="Computer type"/></div>
            </div>
          
            <div style="margin-bottom:10px">
                <div>
                   <button class="form-control createtype" style="background-color:#9ACD32;color:#fff">${params ? 'Edit Computer Type':'Create Computer Type'}</button>
                </div>
            </div>
    
        </div>
    
        `
    
    
    document.getElementById('printerTypeWrapper').innerHTML=content
    createTypeEndpoint(params)
    }
    function createTypeEndpoint(params){
        
    
        if(document.querySelector('.createtype')){
            document.querySelector('.createtype').addEventListener('click',function(){
               
                let printer_type = document.querySelector('.printer_type').value
               
    
                if(printer_type == null || printer_type == ""){
                    alert('Printer Type name is required')
                    return false
                }
               
                document.querySelector('.createtype').innerHTML="Please wait"
                document.querySelector('.createtype').disabled = true;
    
                let url;
               let method;
    
               if(params){
                url = `${BASE_URL}brandtype/${params.id}`
                method = "PUT"
               }
               else{
                url = `${BASE_URL}brandtype`
                method = "POST"
               }
               
                // alert(company_name)
                fetch(url,{
                    method:method, 
                    headers: {
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning':'79867',
                      },
                      body:JSON.stringify({printer_type})
            
                })
                .then((response)=>response.json())
                .then(result=>{
                    
                    document.querySelector('.createtype').innerHTML="Create Printer Type"
                    document.querySelector('.createtype').disabled = false;
                    document.querySelector('.printer_type').value="";
                  
                   
    
                    if(result.status == "Request was successful"){
                        Toastify({
                            text: result.status,
                            duration: 3000,
                            destination: "https://github.com/apvarun/toastify-js",
                            newWindow: true,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            position: "right", // `left`, `center` or `right`
                            stopOnFocus: true, // Prevents dismissing of toast on hover
                            style: {
                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                            },
                            onClick: function(){} // Callback after click
                          }).showToast();
                    }
                    
                    
                }
                  )
                .catch(err=>{
                    Toastify({
                        text: err,
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                    document.querySelector('.createuser').innerHTML="Create Department"
                    document.querySelector('.createuser').disabled = false;
                        console.log(err)
                    })
            })
        }
        
       
        
    }
    
    
    