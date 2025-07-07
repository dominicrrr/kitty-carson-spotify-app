export type Route = {
    path: string; 
    name: string;
}

export function createRoute(name: string, path: string): Route {
  return { name, path }
}
