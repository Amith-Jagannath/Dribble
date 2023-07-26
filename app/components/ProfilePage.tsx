import { ProjectInterface, UserProfile } from "@/common.types";
import Image from "next/image";

import Link from "next/link";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import { getCurrentUser } from "@/libs/session";

type Props = {
  user: UserProfile;
};

const ProfilePage = async ({ user }: Props) => {
  const session = await getCurrentUser();
  console.log(session);
  console.log("yes");
  console.log(user);

  return (
    <section className="flexCenter flex-col max-w-10xl w-full mx-auto paddings">
      <section className="flexBetween max-lg:flex-col gap-10 w-full">
        <div className="flex items-start flex-col w-full">
          <Image
            src={user?.avatarUrl}
            width={100}
            height={100}
            className="rounded-full"
            alt="user image"
          />
          <p className="text-4xl font-bold mt-10">{user?.name}</p>

          {session?.user.email === user.email ? (
            user?.description ? (
              <p className="text-2xl  md:mt-10 mt-2 max-w-lg">
                {user?.description}
              </p>
            ) : (
              <Link className="mt-5" href="/update-profile">
                Tell us more about yourself
              </Link>
            )
          ) : user?.description ? (
            <p className="text-2xl  md:mt-10 mt-2 max-w-lg">
              {user?.description}
            </p>
          ) : (
            ""
          )}

          {/* <p className="text-2xl  md:mt-10 mt-2 max-w-lg">
            {user?.description}
          </p>
          <Link href="/update-profile">Tell us more about yourself</Link> */}
          <div className="flex mt-8 gap-5 w-full flex-wrap">
            {/* <Button
            title="Follow"
            leftIcon="/plus-round.svg"
            bgColor="bg-light-white-400 !w-max"
            textColor="text-black-100"
          /> */}

            <button className="bg-black px-4 py-2 rounded-lg">
              <Link
                href={user?.githubUrl || ""}
                target="_blank"
                className="text-white"
              >
                Github
              </Link>
            </button>

            <button className="bg-cyan-600 px-4 py-2 rounded-lg">
              <Link
                href={user?.linkedinUrl || ""}
                target="_blank"
                className="text-white"
              >
                LinkedIn
              </Link>
            </button>
          </div>
        </div>

        {user?.projects?.edges?.length > 0 ? (
          <Image
            src={user?.projects?.edges[0]?.node?.image}
            alt="project image"
            width={739}
            height={554}
            className="rounded-xl object-contain"
          />
        ) : (
          <Image
            src="/profile-post.png"
            width={739}
            height={554}
            alt="project image"
            className="rounded-xl"
          />
        )}
      </section>

      <section className="flexStart flex-col lg:mt-28 mt-16 w-full">
        <p className="w-full text-left text-lg font-semibold">Recent Work</p>

        <div className="profile_projects">
          {user?.projects?.edges?.map(
            ({ node }: { node: ProjectInterface }) => (
              <ProjectCard
                key={`${node?.id}`}
                id={node?.id}
                image={node?.image}
                title={node?.title}
                name={user.name}
                avatarUrl={user.avatarUrl}
                userId={user.id}
              />
            )
          )}
        </div>
      </section>
    </section>
  );
};

export default ProfilePage;
