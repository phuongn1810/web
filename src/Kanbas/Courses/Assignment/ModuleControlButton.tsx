import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckMark from "./GreenCheckMark";
import { FaPlus } from "react-icons/fa";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <FaPlus className ="fs-10"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}