
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
  
        <div id="wd-css-borders">
  <p className="wd-border-thin wd-border-black wd-border-solid">
    <span style={{
  paddingLeft: "10px",
  paddingTop: "40px",
  marginTop: "40px",
  }}>A1</span>
    </p>
</div>

<p className="wd-border-thin wd-border-black wd-border-solid wd-padded-top-left">
    <span style={{
  paddingLeft: "0px",
  }}>The assignment is  <span className = "wd-class-selector">available online</span>
  <br/>Submit a link to the landing page of your Web application running on 
  Netlify. <br/>
  The Landing page should include of the following: 
  
  <span style={{
  paddingLeft: "10px",
  }}><ul><li>Your full name and section <br/></li>
  <li>Links to each of the lab assignment 
  <br/></li>
  <li>Link to the Kanbas application. <br/></li>
  <li>Links to all relevant source code 
  repositories. 
  </li></ul></span>

  The Kanbas application should include a link to Navigate
  back to the landing page.</span>
    </p>
        
    <div id="wd-css-point">
  <form>
    <div className="row mb-1">
      <label htmlFor="r1" className="col-sm-2 col-form-label">
        Point </label>
      <div className="col-sm-10">
        <input type="" className="form-control"
      id="input1" value="100" />
      </div>
      
       </div>

    </form>

<br/>
    
    </div>

    <div id="wd-css-assignment">
  <form>
    <div className="row mb-2" >
      <label htmlFor="r2" className="col-sm-2 col-form-label">
        Assignment Group  </label>
      <div className="col-sm-10">
        <select className="form-select">
        <option selected>ASSIGNMENTS</option>
        <option value="1">One</option>
        </select>
      
      </div>
      
       </div>

    </form>

    <form>
    <div className="row mb-3" >
      <label htmlFor="r3" className="col-sm-2 col-form-label">
        Display Grade As  </label>
      <div className="col-sm-10">
        <select className="form-select">
        <option selected>Percentage</option>
        <option value="1">One</option>
        </select>
      
      </div>
      
       </div>

    </form>
    

    </div>

 
    <div id="wd-css-dimensions">
  <div>
    
    <div className="wd-float-right wd-dimension-landscape wd-bg-color-white
                    wd-fg-color-black border black  ">

 <div>
    
   
      <div className="col-sm-15 wd-float-done wd-margin-all-around">
        <select className="form-select">
        <option selected>Online</option>
        <option value="1">One</option>
        </select>
      
 </div>
 
 <div className="wd-float-done wd-margin-all-around me-5">
 <h4 id="wd-group">Online Text Entry</h4>
<input type="checkbox" name="text-entry" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>

<input type="checkbox" name="website-URL" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website-URL</label><br/>

<input type="checkbox" name="media-recordings" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Media-Recordings</label><br/>

<input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student-Annotation</label><br/>

<input type="checkbox" name="file-uploads" id="wd-file-upload	"/>
<label htmlFor="wd-file-upload	y">File-Uploads</label><br/>
</div>
    </div>
    </div>
  </div>
</div>
Submision Type
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

 <div id="wd-css-dimensions">
  <div>
    
    <div className="wd-float-right wd-dimension-landscape wd-bg-color-white
                    wd-fg-color-black border black  ">
       <div id="wd-css-margins-for-text">
  
  </div>

<div id="wd-bs-grid-system">
  <div className="row">
  
    <div className="col-10 bg-white text-black wd-margin-all-around">
      <label htmlFor="wd-assign-to">Assign to</label><br />

    <input id="wd-assign-to" placeholder="Everyone X" /> 

    
    </div>
  </div>
</div>

<div id="wd-bs-grid-system">
  <div className="row">
  
    <div className="col-10 bg-white text-black wd-margin-all-around">
      <div>
    <label htmlFor="wd-due-date"> Due </label><br/>

<input type="date"
      id="wd-due-date"
      value="2024-05-13"/>
 </div>    

    </div>
  </div>
</div>


  <div className="row">

    <div className="col-4 bg-white wd-margin-all-around">
    <div>
    <label htmlFor="wd-due-date"> Available From </label><br/>
    <span style={{
  paddingLeft: "0px",
  paddingTop: "40px",
  marginTop: "100px",
  }}></span>
<input type="date"
      id="wd-due-date"
      value="2024-05-06"/>
 </div>   
      
    </div>
    <div className="col-4 bg-white text-black wd-margin-all-around">
    <div>
    <label htmlFor="wd-due-date"> Until </label><br/>
    <span style={{
  paddingLeft: "0px",
  paddingTop: "40px",
  marginTop: "100px",
  }}></span>
<input type="date"
      id="wd-due-date"
      value=""/>
 </div>   

    </div>
  </div>
 
                    </div> </div> </div>

Assign

 


    </div>
);}
