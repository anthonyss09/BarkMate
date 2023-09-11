import Wrapper from "../../assets/wrappers/DashHomeW";
import ProfilePreview from "./ProfilePreview";
import { BiFilter } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { selectUsersData, useGetProfilesQuery } from "./UsersSlice";
import { useEffect, useState } from "react";
import FormDropDown from "../auth/FormDropDown";
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
    content = <BeatLoader color="silver" size={25} className="beat-loader" />;
  } else if (!data.filteredMatches.length) {
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
          profileImageName={match.profileImageName}
          id={match._id}
          profileName={match.profileName}
          currentUser={currentUser}
        />
      );
    });
  }

  return (
    <Wrapper>
      <section className="dash-main">
        <div className="dash-header">
          <h1 className="dash-page-name">Profiles </h1>
          {/* <p className="p-top">
            Profiles within {distance}
            <br /> mile{distance > 1 && "s"}...
          </p> */}
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

        <div className="profiles-container">{content}</div>
      </section>
    </Wrapper>
  );
}
