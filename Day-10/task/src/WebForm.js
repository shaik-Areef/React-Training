import './webForm.css';
import react, { useState } from 'react';
function Webform() {
    const [data, setData] = useState({
    })

    const eventHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleChecked = (event) => {
        setData({ ...data, [event.target.name]: event.target.checked })
    }



    const onclickHandler = async (event) => {
        event.preventDefault();
        console.log(event);
        await fetch("http://localhost:3000/data", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        }).then(res => {
            if (res.status === 201) {
                console.log("data Submitted Successfully")
                setData({
                    Title: "",
                    Route: "",
                    Select_DocType: "",
                    Module: "",
                    Is_Standard: "",
                    Published: "",
                    Login_Requiied: "",
                    Route_to_Success_Link: "",
                    Allow_Edit: "",
                    Allow_Multiple: "",
                    Show_As_Grid: "",
                    Allow_Delete: "",
                    Allow_Print: "",
                    Allow_Comments: "",
                    Ahow_Attachments: "",
                    Allow_Incomplete_Forms: "",
                });
            }

        }).catch(err => {
            console.log("Error", err)

        })



    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>Web Form1</h1>
                </div>
                <div className='col-md-6'>
                    <input type='button' className={"btn btn-primary"} onClick={onclickHandler} value='Save' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <label>Title </label>
                    <input type='test' className="form-control" name='Title' value={data.Title} onChange={eventHandler} />
                    <label>Route</label>
                    <input type='test' className="form-control" name='Route' value={data.Route} onChange={eventHandler} />
                    <label>Select DocType </label>
                    <select type='test' className="form-control" name='Select_DocType' value={data.Select_DocType} onChange={eventHandler}>
                        <option value="">select</option>
                        <option value=".txt">.txt</option>
                        <option value=".Doc">.Doc</option>
                        <option value=".PDF">.PDF</option>
                        <option value=".Zip">.Zip</option>
                    </select>
                    <label>Module </label>
                    <input type='test' className="form-control" name='Module' value={data.Module} onChange={eventHandler} />
                </div>
                <div className='col-md-6'>
                    <div className="form-check">
                        <input type='checkbox' id="isStandard" className={"form-check-input"} name='Is_Standard' checked={data.Is_Standard} onChange={handleChecked} />
                        <label className="form-check-label" htmlFor="Is_Standard" >Is Standard</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Published" className={"form-check-input"} name='Published' checked={data.Published} onChange={handleChecked} />
                        <label className="form-check-label" htmlFor="Published" >Published</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Login_Required" className={"form-check-input"} name='Login_Required' checked={data.Login_Required} onChange={handleChecked} />
                        <label className="form-check-label" htmlFor="Login_Required"  >Login Required</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Route_to_Success_Link" className={"form-check-input"} name='Route_to_Success_Link' checked={data.Route_to_Success_Link} onChange={handleChecked} />
                        <label className="form-check-label" htmlFor="Route_to_Success_Link"  >Route to Success Link</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Allow_Edit" className={"form-check-input"} name='Allow_Edit' checked={data.Allow_Edit} onChange={handleChecked} />
                        <label className="form-check-label" htmlFor="Allow_Edit" >Allow Edit</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Allow_Edit" className={"form-check-input"} name='Allow_Multiple' checked={data.Allow_Multiple} onChange={handleChecked} />
                        <label className="form-check-label" >Allow Multiple</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' id="Allow_Edit" className={"form-check-input"} name='Show_as_Grid' checked={data.Show_as_Grid} onChange={handleChecked} />
                        <label className="form-check-label" >Show as Grid</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' className={"form-check-input"} name='Allow_Delete' checked={data.Allow_Delete} onChange={handleChecked} />
                        <label className="form-check-label" >Allow Delete</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' className={"form-check-input"} name='Allow_Print' checked={data.Allow_Print} onChange={handleChecked} />
                        <label className="form-check-label" >Allow Print</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' className={"form-check-input"} name='Allow_Comments' checked={data.Allow_Comments} onChange={handleChecked} />
                        <label className="form-check-label" >Allow Comments</label>
                    </div>
                    <div className="form-check">

                        <input type='checkbox' className={"form-check-input"} name='Show_Attachments' checked={data.Show_Attachments} onChange={handleChecked} />
                        <label className="form-check-label" >Show Attachments</label>
                    </div>
                    <div className="form-check">
                        <input type='checkbox' className={"form-check-input"} name='Allow_Incomplete_Forms' checked={data.Allow_Incomplete_Forms} onChange={handleChecked} />
                        <label className="form-check-label" >Allow Incomplete Forms</label>
                    </div>
                </div>
            </div>
        </div >
    )
} export default Webform