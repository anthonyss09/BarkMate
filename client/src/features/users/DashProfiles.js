import Wrapper from "../../assets/wrappers/DashHomeW";
import ProfilePreview from "./ProfilePreview";
import { BiFilter } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useGetProfilesQuery } from "./extendedApiSlice";

export default function DashProfiles() {
  const { location } = useSelector(selectCurrentUser);
  const distance = 4827;
  const { data, error, isLoading, refetch } = useGetProfilesQuery({
    distance,
    coordinates: location.coordinates,
  });
  console.log(data);
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
