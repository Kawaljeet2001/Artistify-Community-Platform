import React from "react";
import SettingsMenu from "../components/Settings/SettingsMenu";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import ProfileSettings from "../components/Settings/ProfileSettings";
import SocialSettings from "../components/Settings/SocialSettings";
import SettingsHeader from "../components/Settings/SettingsHeader";

const Settings = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  React.useEffect(() => {
    document.title = "Artistify - Profile"
  } , [])
  return (
    <div className="bg-darkBlack flex justify-center py-8 min-h-screen">
      <div className="w-11/12 lg:w-9/12 grid grid-cols-8 gap-6 mt-10">
        <SettingsMenu url={url} />
        <div className="col-span-8 lg:col-span-5">
          <SettingsHeader data={location.pathname} />
          <Switch>
            <Route path={`${path}/profile`} exact>
              <ProfileSettings />
            </Route>
            <Route path={`${path}/social`}>
              <SocialSettings />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Settings;
