const generateRoutes = routeNamesArray => {
  const routesObject = {};
  routeNamesArray.forEach(route => {
    routesObject[route] = route;
  });
  return routesObject;
};

const ROUTE_LIST = ['Todo', 'DummyScreen'];

const Routes = generateRoutes(ROUTE_LIST);

export default Routes;
