import Wrapper from "../../assets/wrappers/DashHomeW";
import ProfilePreview from "./ProfilePreview";
import { BiFilter } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { selectUsersData, useGetProfilesQuery } from "./UsersSlice";
import { useEffect, useState } from "react";
import FiltersDropDown from "../../components/FiltersDropDown";
import DotLoader from "react-spinners/DotLoader";
import { selectAlertsInfo } from "../alerts/alertsSlice";

export default function DashProfiles() {
  const currentUser = useSelector(selectCurrentUser);
  const { filters } = useSelector(selectUsersData);
  const distance = filters.distance;
  const { data, isLoading } = useGetProfilesQuery({
    distance,
    coordinates: currentUser.location.coordinates,
    currentUserName: currentUser.firstName,
  });
  const { overflowHidden } = useSelector(selectAlertsInfo);

  const [showFilters, setShowFilters] = useState(false);
  const [requesting, setRequesting] = useState(false);
  console.log(data);

  const handleClick = () => {
    setShowFilters(!showFilters);
  };

  const filterOptions = [
    "1 mile",
    "2 miles",
    "3 miles",
    "4 miles",
    "5 miles",
    "6 miles",
    "7 miles",
    "8 miles",
    "9 miles",
    "10 miles",
  ];

  useEffect(() => {
    // refetch();
  }, [distance]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let content;
  if (isLoading) {
    content = (
      <div className="alert-conatiner">
        <DotLoader color="lightBlue" size={85} className="beat-loader" />
      </div>
    );
  } else if (data.filteredMatches.length < 1) {
    content = (
      <div className="no-matches">
        Currently no matches in your area, try expanding your search proximity.
      </div>
    );
  } else {
    content = data.filteredMatches.map((match, index) => {
      return (
        <ProfilePreview
          key={index}
          firstName={match.firstName}
          aboutUs={match.aboutUs}
          profileImageUrl={match.profileImageUrl}
          id={match._id}
          sample={match.sample}
          city={match.city}
          profileName={match.profileName}
          currentUser={currentUser}
          requesting={requesting}
          setRequesting={setRequesting}
          timeNeeded={match.timeNeeded}
          timeAvailable={match.timeAvailable}
        />
      );
    });
  }

  return (
    <Wrapper>
      {requesting && (
        <div className="alert-container">
          {" "}
          <DotLoader size={85} color="lightBlue" className="beat-loader" />
        </div>
      )}
      <section className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Profiles </h1>
          <div className="filter" onClick={handleClick}>
            <BiFilter size={20} />
            Filters
          </div>
          {showFilters && (
            <FiltersDropDown
              filterOptions={filterOptions}
              handleClick={handleClick}
              filter="distance"
              filterPrompt="select distance"
            />
          )}
        </div>

        <div
          className={`profiles-container ${
            isLoading ? "background-white" : ""
          }`}
        >
          {content}
        </div>
      </section>
    </Wrapper>
  );
}
