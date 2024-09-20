export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description"cols={50} rows={10}>
          The assignment is available online Submit a link to 
          the landing page of your Web application running on 
          Netlify. The Landing page should include of the following:
          Your full name and section Links to each of the lab assignment 
          Link to the Kanbas application. Links to all relevant source code 
          repositories. The Kanbas application should include a link to Navigate
          back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
      <h4 id="wd-file-upload">Assignment Group <label htmlFor="wd-select-assignment"> </label>
<select id="wd-file-upload">
   <option value="wd-name">ASSIGNMENT</option>
   <option value="wd-name">ASSIGNMENT</option>
</select></h4>

<h4 id="wd-display-grade-as">Display Grade as <label htmlFor="wd-select-assignment"> </label>
<select id="wd-display-grade-as">
   <option value="wd-points">Percentage</option>
   <option value="wd-points">Percentage</option> 
</select></h4>
<h4 id="wd-submission-type">Assignment Group <label htmlFor="wd-select-assignment"> </label>
<select id="wd-submission-type">
   <option value="wd-group">Online</option>
   <option value="wd-group">Online</option>
</select></h4>

<h4 id="wd-group"></h4>
<label>Online Text Entry</label><br/>

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
<br/>
<label htmlFor="wd-assign-toe">Assign Assign to</label><br />
    <input id="wd-assign-to" placeholder="Everyone" /> <br />
    <br/>
    
    <div>
    <label htmlFor="wd-due-date"> Due </label><br/>
    
<input type="date"
      id="wd-due-date"
      value="2024-05-06"/>
 </div>
 <br/>
 <br/>

 <div>
    <label htmlFor="wd-available-from"> Available from </label><br/>
    
<input type="date"
      id="wd-available-from"
      value="2024-05-06"/>
 </div>
 <div>
    <label htmlFor="wd-available-until"> Until </label><br/>
    
<input type="date"
      id="wd-available-until"
      value="2024-05-20"/>
 </div>
     
 <br/>

<button id="wd-Cancel" onClick={() => alert("Cancel")} type="button">
  Cancel
</button>
<button id="wd-Save" onClick={() => alert("Save")} type="button">
  Save
</button>



    </div>
);}
