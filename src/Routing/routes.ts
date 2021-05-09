import homePage from "../Components/Pages/HomePage";
import { IRouteObject } from "../Interfaces/interfaces";

const baseUrl = "/";

const homePageRoute: IRouteObject = {
  path: `${baseUrl}`,
  key: "homePageRoute",
  component: homePage,
  defaultRoute: true,
};

const routes: IRouteObject[] = [homePageRoute];

export default routes;
