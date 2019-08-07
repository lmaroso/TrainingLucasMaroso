const generateRoutes = routeNamesArray => {
  const routesObject = {};
  routeNamesArray.forEach(route => {
    routesObject[route] = route;
  });
  return routesObject;
};

const TAB_ROUTE_LIST = ['Todo', 'Books'];
const STACK_ROUTE_LIST = ['Home'];

const Routes = generateRoutes(TAB_ROUTE_LIST, STACK_ROUTE_LIST);

export default Routes;
