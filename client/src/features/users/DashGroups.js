import Wrapper from "../../assets/wrappers/DashHomeW";
import { BiFilter } from "react-icons/bi";
import GroupPreview from "./GroupPreview";

export default function DashGroups() {
  return (
    <Wrapper>
      <section className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Groups</h1>
          <div className="header-buttons">
            {" "}
            <div className="filter header-button">
              <BiFilter size={20} />
              Filters
            </div>
          </div>
          <p className="p-top">Displaying results within 3 miles...</p>
        </div>
        <div className="profiles-container">
          <GroupPreview />
          <GroupPreview />
          <GroupPreview />
          <GroupPreview />
        </div>
      </section>
    </Wrapper>
  );
}
