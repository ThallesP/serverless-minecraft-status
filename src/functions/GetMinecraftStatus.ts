import { APIGatewayProxyHandler } from "aws-lambda";
import { status } from "minecraft-server-util";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { address } = event.pathParameters;

  const statusData = await status(address);

  return {
    statusCode: 200,
    body: JSON.stringify(statusData),
  };
};
