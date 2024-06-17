import { Outlet, useLoaderData } from "@remix-run/react";
import { queryAllAnimations, queryAnimationsByTitle } from "~/apis/gql.apis";
import AnimationsContainer from "~/components/animations-container";
import AnimationListLoaderData from "~/shapes/animations-list-loader-data";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");

  let animations;

  if (searchTerm) {
    animations = await queryAnimationsByTitle(searchTerm);
  } else {
    animations = await queryAllAnimations();
  }

  return {
    animations,
  };
};

function Animations() {
  const animations = useLoaderData<AnimationListLoaderData>().animations;

  return (
    <div>
      <AnimationsContainer animations={animations} />
      <Outlet />
    </div>
  );
}

export default Animations;
