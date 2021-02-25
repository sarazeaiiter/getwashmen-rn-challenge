import axios from "axios";
import { get } from "lodash";

import { isNullOrUndefined } from "./type-guards";

const serverURL = "http://localhost:9000";

export type ApiGETResponse<T> = T | string;
export const getRequest = async <T>(
  path: string,
  params?: { [key: string]: string | number }
): Promise<ApiGETResponse<T>> => {
  try {
    const rawData = await axios.get<T>(`${serverURL}${path}`, { params });
    const serverData = get(rawData, 'data', null);
    const serverStatus = get(rawData, 'status', 400);
    const errorMessage = get(rawData, 'statusText', '');
    if (isNullOrUndefined(serverData) || serverStatus !== 200) {
      return errorMessage
    }
    return serverData;
  } catch (err) {
    const errorMessage = get(err, 'message', '');
    return errorMessage
  }
};
