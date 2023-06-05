import Wrapper from "../../assets/wrappers/DashHomeW";
import ProfilePreview from "./ProfilePreview";
import { IoMdArrowDropup } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { BiFilter } from "react-icons/bi";

export default function DashProfiles() {
  return (
    <Wrapper>
      <section className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Profiles </h1>
          <div className="filter">
            <BiFilter size={20} />
            Filters
          </div>
          <p className="p-top">Displaying results within 3 miles...</p>
        </div>
        <div className="profiles-container">
          <ProfilePreview />
          <ProfilePreview />
          <ProfilePreview />
          <ProfilePreview />
          <ProfilePreview />
        </div>
      </section>
    </Wrapper>
  );
}
