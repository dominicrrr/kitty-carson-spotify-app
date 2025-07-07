import { createRoute } from "@/types/route"
import type { Route } from "@/types/route"

export const routes: Record<string, Route> = {
  home: createRoute("Home", "/home"),
  about: createRoute("About", "/about"),
  login: createRoute("Login", "/login"),
  more: createRoute("more", "/more")
}
