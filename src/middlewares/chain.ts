import { NextRequest, NextResponse } from "next/server";

export function composeMiddleware(middlewares: Function[]) {
  return async function (request: NextRequest) {
    let response: NextResponse | undefined;

    const runner = async (index: number): Promise<NextResponse | undefined> => {
      if (index < middlewares.length) {
        const next = async () => runner(index + 1);
        return middlewares[index]({ request, next });
      }
      return undefined;
    };

    response = await runner(0);
    return response ?? NextResponse.next();
  };
}
