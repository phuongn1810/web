
export default function Assignment() {
    return (
        <div id="wd-assignments">

        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <h4>Multiple Modules| Not Available until May 6 at 
                12 am| <br/>
                Due May 13 at 11:59pm | 100pts
            </h4>

          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS +BOOTTRAP
            </a>
            <h4>Multiple Modules| Not Available until May 13 at 
                12 am| <br/>
                Due May 20 at 11:59pm | 100pts
            </h4>

            </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT +REACT
            </a>
            <h4>Multiple Modules| Not Available until May 20 at 
                12 am| <br/>
                Due May 27 at 11:59pm | 100pts
            </h4>
        
          </li>
        </ul>
      </div>
  
    );
  }
  
  