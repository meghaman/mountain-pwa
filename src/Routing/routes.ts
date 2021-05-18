import FounderPage from "../Components/Pages/FounderPage";
import HomePage from "../Components/Pages/HomePage";
import AdminPage from "../Components/Pages/AdminPage";
import { IRouteObject } from "../Interfaces/interfaces";

const baseUrl = "/";

const homePageRoute: IRouteObject = {
  path: `${baseUrl}`,
  key: "homePageRoute",
  component: HomePage,
  defaultRoute: true,
};

const founderPageRoute: IRouteObject = {
  path: `${baseUrl}founder/:id`,
  key: "founderPageRoute",
  component: FounderPage,
  defaultRoute: true,
};

const adminPageRoute: IRouteObject = {
  path: `${baseUrl}admin`,
  key: "adminPageRoute",
  component: AdminPage,
  defaultRoute: true,
};

const routes: IRouteObject[] = [
  homePageRoute,
  founderPageRoute,
  adminPageRoute,
];

export default routes;
