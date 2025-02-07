import { composeMiddleware } from "./middlewares/chain";
import { AuthMiddleware } from "./middlewares/auth-middleware";

const middlewares = [AuthMiddleware];

export default composeMiddleware(middlewares);

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
