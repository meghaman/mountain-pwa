import homePage from "../Components/Pages/HomePage";
import MapLeaflet from "../Components/Pages/MapLeaflet";
import mapPage from "../Components/Pages/MapPage";
import { IRouteObject } from "../Interfaces/interfaces";

const baseUrl = "/";

const homePageRoute: IRouteObject = {
  path: `${baseUrl}`,
  key: "homePageRoute",
  component: homePage,
  defaultRoute: true,
};

const mapPageRoute: IRouteObject = {
  path: `${baseUrl}map`,
  key: "mapPageRoute",
  component: MapLeaflet,
  defaultRoute: true,
};

const routes: IRouteObject[] = [homePageRoute, mapPageRoute];

export default routes;
