import Modules from "../Modules";
import Status from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top">
          <Status />
        </td>
      </tr>
    </table>
  );
}
