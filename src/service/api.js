// this file contains the instance of api call

import { axiosInstance } from "./axiosUtility";


// https://bitbns.com/jugApi/coinParams.json
// https://bitbns.com/order/getTickerWithVolume/

export const api = async function ({
  method = "get",
  api,
  body,
  params = {},
  status = false,
  token = "",
  baseURL = "normal",
  endPoint = "",
  timeout = 30 * 1000,
  headersType,
}) {
  return await new Promise(async (resolve, reject) => {
    let APIInstance = axiosInstance;
    // setting token

    APIInstance.defaults.timeout = timeout;
    let arg = body ? [body, { params }] : [{ params }];
    // //console.log("arg", arg);
    APIInstance[method](
      `${getMicroServiceURL(baseURL, endPoint)}${api}`,
      ...arg
    )
      .then((data) => {
        // debugger;
        resolve(statusHelper(status, data));
      })
      .catch((error) => {
        if (error?.response) {
          reject(statusHelper(status, error));
        } else {
          reject(error);
        }
      });
  });
};

const statusHelper = (status, data) => {
  try {
    if (status) {
      return {
        status: data?.status,
        ...data?.data,
      };
    } else {
      return data?.data;
    }
  } catch (e) {
    return e;
  }
};

let getMicroServiceURL = (baseURL, endPoint) => {
  let finalURL = "";
  // //console.log(baseURL, "15s45ds5d4s5d");
  switch (baseURL) {
    case "normal":
      finalURL = "/jugApi";
      break;
    case "order":
        finalURL = "/order";
        break;
    default:
      break;
  }

  return  process.env.REACT_APP_BASE_URL + finalURL
  
};
