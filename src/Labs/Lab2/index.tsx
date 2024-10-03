import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import Grids from "./Grids";
import "./index.css";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Icons from "./Icons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./SceenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BoostrapForms";
import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
  return (
    
<div id="wd-css-background-colors">
<h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
<p className="wd-bg-color-red wd-fg-color-black">
  This background of this paragraph is red but
  <span className="wd-bg-color-green wd-fg-color-white">
    the background of this text is green and the foreground white
  </span>
</p>
<div/> 


    
<h1 style={{
  backgroundColor: "yellow"}}>
  Block vs inline elements
</h1>
<p style={{
  backgroundColor: "blue",
  color:"white"}}>
  Headings ... width</p>
Normal text renders inline
<br/><br/>
<span style={{
  padding: "10px",
  backgroundColor: "red", color:"white", borderStyle: "solid",
  borderWidth: "10px",
  borderColor: "green"}}>Span elements</span>
<span style={{
  backgroundColor: "red", color:"white",
  paddingLeft: "10px",
  paddingTop: "10px",
  marginTop: "50px",
  border: "solid 10px green"}}>render inline</span>
with the rest of the content


<div id="wd-css-borders">
  <h2>Borders</h2>
  <p className="wd-border-fat wd-border-red wd-border-solid">
    Solid fat red border</p>
  <p className="wd-border-thin wd-border-blue wd-border-dashed">
    Dashed thin blue border</p>
</div>


 id="wd-css-paddings"
  <h2>Padding</h2>
  <div className="wd-padded-top-left wd-border-fat 
      wd-border-red wd-border-solid 
      wd-bg-color-yellow">
    Padded top left
    </div>

    

    <div className="wd-padded-bottom-right wd-border-fat 
      wd-border-blue wd-border-solid 
      wd-bg-color-yellow">
    Padded bottom right
  </div>

  <div className="wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white">
    Padded all around
  </div>
  
  <div id="wd-css-margins">
  <h2>Margins</h2>
  <div
    className="wd-margin-bottom 
      wd-padded-top-left 
      wd-border-fat wd-border-red 
      wd-border-solid 
      wd-bg-color-yellow">
    Margin bottom
  </div>
  <div
    className="wd-margin-right-left 
      wd-padded-bottom-right 
      wd-border-fat wd-border-blue 
      wd-border-solid 
      wd-bg-color-yellow">
    Margin left right
  </div>
  <div
    className="wd-margin-all-around 
      wd-padding-fat wd-border-fat 
      wd-border-yellow 
      wd-border-solid 
      wd-bg-color-blue 
      wd-fg-color-white">
    Margin all around
  </div>
</div>

<div id="wd-css-borders">
  <h3>Rounded corners</h3>
  <p className="wd-rounded-corners-top wd-border-thin 
     wd-border-blue wd-border-solid wd-padding-fat">
    Rounded corners on the top
  </p>

  <p className="wd-rounded-corners-bottom 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Rounded corners at the bottom
  </p>
  <p className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Rounded corners all around
  </p>
  <p className="wd-rounded-corners-inline 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat">
    Different rounded corners
  </p>
</div>
<div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
Instead of changing the look and feel of all the 
elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>

<Dimensions/>
<Positions/>
<Zindex/>

<Float/>

<Grids/>

<Flex/>
  <Icons/>


  <BootstrapGrids/>
  <ScreenSizeLabel/>

  <BootstrapTables/>

  <BootstrapLists/>
    
    
<BootstrapForms/>

<BootstrapNavigation/>
</div>


  );
}
