// function disp_details(id:number,name:string,mail_id:string='defaultemail') 
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(132, "ravi");
disp_details(333, "ramesh", "ramesgh@xyz.com");
