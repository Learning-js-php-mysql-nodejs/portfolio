import { lazy } from "react";

//lazy-loaded Layouts
const DashboardLayout = lazy(() =>
  import("../layouts").then((module) => ({ default: module.DashboardLayout }))
);


// lazy-loaded Pages
const lazyLoad = (moduleName) =>
  lazy(() =>
    import("../pages").then((module) => ({ default: module[moduleName] }))
  );


const Dashboard = lazyLoad("Dashboard");
const ContactUs = lazyLoad("ContactUs");
const Project = lazyLoad("Project");

// creating route objects
const createRoute = (path, element, isPrivate = false) => ({
  path,
  element,
  isPrivate,
});

export const routeConfigs = [
  {
    layout: DashboardLayout,
    children: [
      createRoute("/", Dashboard),
      createRoute("project", Project, true),
      createRoute("contact-us", ContactUs, true),
    ],
  },

];
