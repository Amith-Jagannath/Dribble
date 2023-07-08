import React from "react";
import { getUserProjects } from "@/libs/actions";
import { UserProfile } from "@/common.types";
import ProfilePage from "@/app/components/ProfilePage";
type Props = {
  params: { id: string };
};
const UserProfile = async ({ params }: Props) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };
  console.log(result);
  if (!result?.user) {
    return <p>FAiled to fetch user info</p>;
  }
  return <ProfilePage user={result?.user} />;
};

export default UserProfile;
