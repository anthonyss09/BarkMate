import Wrapper from "../../assets/wrappers/DashHomeW";
import ProfilePreview from "./ProfilePreview";
import { BiFilter } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { selectUsersData, useGetProfilesQuery } from "./UsersSlice";
import { useEffect, useState } from "react";
import FiltersDropDown from "../../components/FiltersDropDown";
import BeatLoader from "react-spinners/BeatLoader";

export default function DashProfiles() {
  const currentUser = useSelector(selectCurrentUser);
  const { filters } = useSelector(selectUsersData);
  const distance = filters.distance;
  const { data, error, isLoading, refetch } = useGetProfilesQuery({
    distance,
    coordinates: currentUser.location.coordinates,
    currentUserName: currentUser.firstName,
  });

  const [showFilters, setShowFilters] = useState(false);
  const [requesting, setRequesting] = useState(false);
  console.log(data);

  const handleClick = () => {
    setShowFilters(!showFilters);
  };

  const filterOptions = ["1 mile", "2 miles", "3 miles", "4 miles", "5 miles"];

  useEffect(() => {
    // refetch();
  }, [distance]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let content;
  if (isLoading) {
    content = (
      <BeatLoader color="lightBlue" size={25} className="beat-loader" />
    );
  } else if (data.filteredMatches.length < 1) {
    content = (
      <div className="no-matches">
        Currently no matches in your area, try expanding your search.
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
          profileName={match.profileName}
          currentUser={currentUser}
          requesting={requesting}
          setRequesting={setRequesting}
        />
      );
    });
  }

  return (
    <Wrapper>
      {requesting && (
        <BeatLoader size={35} color="lightBlue" className="beat-loader" />
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
