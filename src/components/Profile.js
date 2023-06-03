import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../redux/slices/users/usersSlices";
import DateFormatter from "../utils/dateFormatter";
import NavbarAfterLogin from "./NavbarAfterLogin";

export default function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  const state = useSelector((state) => state?.users);
  const { loading, appError, serverError, profile } = state;

  return (
    <div>
      <NavbarAfterLogin />
      <div>
        <img></img>
        <div>
          <span>
            {profile?.firstname} {profile?.lastname}
          </span>
          <span>
            {profile?.expenses?.length + profile?.incomes?.length} Records
            Created
          </span>
          <p>{profile?.email}</p>
          {profile?.createdAt && (
            <p>Date Joined : {DateFormatter(profile?.createdAt)}</p>
          )}
          <button type="button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
