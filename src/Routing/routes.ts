import FounderPage from "../Components/Pages/FounderPage";
import homePage from "../Components/Pages/HomePage";
import { IRouteObject } from "../Interfaces/interfaces";

const baseUrl = "/";

const homePageRoute: IRouteObject = {
  path: `${baseUrl}`,
  key: "homePageRoute",
  component: homePage,
  defaultRoute: true,
};

const founderPageRoute: IRouteObject = {
  path: `${baseUrl}founder/:id`,
  key: "founderPageRoute",
  component: FounderPage,
  defaultRoute: true,
};

const routes: IRouteObject[] = [homePageRoute, founderPageRoute];

export default routes;
