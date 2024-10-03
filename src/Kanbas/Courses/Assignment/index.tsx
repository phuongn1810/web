
import { FaPlus } from "react-icons/fa6";
import {BsGripVertical} from "react-icons/bs"
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckMark from "./GreenCheckMark";
import ModuleControlButton from "./ModuleControlButton";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";


export default function Assignment() {
    return (



      
        <div id="wd-assignments">

        <input id="wd-search-assignment"
        className= "bs-list-group-border-color float-left"
               placeholder="Search..." />
               
   
<button id="wd-add-assignment-group"
        className="btn btn-lg bs-btn-color me-1 border-gray">
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} /> 
         Group </button>

       <button id="wd-add-assignment-group"
        className="btn btn-lg btn-danger me-1">
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
          Assignment </button>

          <br/> <br/> <br/> 

      
          <ul id="wd-modules" className="list-group rounded-0 w-100">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" />
    
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          Assignments </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              Assignments </a>
          </li>
          
          </ul>
        
        <ModuleControlButton/>
        <ul className="wd-rounded-corners-all-around>
    wd-border-thin, wd-border-white, wd-border-solid
    wd-padding, wd-margin-all-around, me-2
    float-end" >
   40% of Total 
        </ul> 
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          
          <a className="wd-assignment-link"
      href="#/Kanbas/Courses/1234/Assignments/123">
      A1 
    </a>

          
          <ul className="wd-class-selector">Multiple Modules | 
          <span className = "wd-class">
           Not Available until May 6 at
               12 am | <br/>
               Due May 13 at 11:59pm | 100pts
               </span>
</ul>
          <LessonControlButtons /> 
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link"
      href="#/Kanbas/Courses/1234/Assignments/123">
      A2 
    </a> <ul className="wd-class-selector">Multiple Modules | 
          <span className = "wd-class">
           Not Available until May 13 at
               12 am | <br/>
               Due May 20 at 11:59pm | 100pts
               </span>
               </ul>

               <LessonControlButtons /> 
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link"
      href="#/Kanbas/Courses/1234/Assignments/123">
      A3
    </a> <ul className="wd-class-selector">Multiple Modules | 
          <span className = "wd-class">
           Not Available until May 20 at
               12 am | <br/>
               Due May 27 at 11:59pm | 100pts
               </span>
               </ul>
               <LessonControlButtons /> 

          </li>
      </ul>
    </li>
      </ul>

      </div>
  
    );
  }
  
  