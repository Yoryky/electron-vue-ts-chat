import http from "./http";
import {
  getTulingApiUrl
} from "./api";

export const getRobot = (data: any) => {
  return http.post(getTulingApiUrl, data, {
    headers: {
      'Content-type': 'application/json;Charset=UTF-8'
    }
  })
}
