import axios from "axios";
import { appConstants } from "../Constants/appConstants";
import { generateHeaders } from "../Utills/generateHeaders";

export default class Api {
  instance = null;
  token = null;
  stateHandler = null;

  constructor() {
    if (!Api.instance) {
      Api.instance = this;
    }

    return Api.instance;
  }

  /**
   * Headers objects with authentication token
   */
  headers = {};

  /**
   * Api class instance getter
   * @_Note - Use this method to get the current instance of the Api class from where you want
   */
  getApi() {
    if (!Api.instance) Api.instance = new Api();
    return Api.instance;
  }

  /**
   *  Api class auth token and state handler method setter for current instance
   *  @_Important - This method should be only calls at useSetApiSettings.ts file
   */
  createApi(token, stateHandler) {
    this.token = token && token;
    this.stateHandler = stateHandler && stateHandler;
    this.headers = token && generateHeaders(token);
  }

  //----------------------------- API CALL METHODS --------------------------------

  /**
   * GET METHOD
   * @param endpoint = end point of the api
   * @param params  = parameters for pass with get call
   * @param headerType = header type of the api call ( html / json / formData)
   * @returns = api call response
   */

  async get(endpoint, params, headerType = appConstants.json) {
    try {
      const { data: response } = await axios.get(endpoint, {
        headers: Api.headers?.[headerType],
        params: params,
      });
      return response;
    } catch (error) {
      console.log(error);
      this.errorHandle(error);
    }
  }

  /**
   * POST METHOD
   * @param endpoint = end point of the api
   * @param params  = parameters for pass with get call
   * @param body  = data object to sent as body of the post api call
   * @param headerType = header type of the api call ( html / json / formData)
   * @returns = api call response
   */

  async post(endpoint, body, headerType = appConstants.json) {
    try {
      const { data: response } = await axios.post(endpoint, body, {
        headers: Api.headers?.[headerType],
      });
      return response;
    } catch (error) {
      this.errorHandle(error);
    }
  }

  /**
   * PUT METHOD
   * @param endpoint = end point of the api
   * @param params  = parameters for pass with get call
   * @param body  = data object to sent as body of the post api call
   * @param headerType = header type of the api call ( html / json / formData)
   * @returns = api call response
   */

  async put(endpoint, body, headerType = appConstants.json) {
    try {
      const { data: response } = await axios.put(endpoint, body, {
        headers: Api.headers?.[headerType],
      });
      return response;
    } catch (error) {
      this.errorHandle(error);
    }
  }

  /**
   * PATCH METHOD
   * @param endpoint = end point of the api
   * @param params  = parameters for pass with get call
   * @param body  = data object to sent as body of the post api call
   * @param headerType = header type of the api call ( html / json / formData)
   * @returns = api call response
   */

  async patch(endpoint, body, headerType = appConstants.json) {
    try {
      const { data: response } = await axios.patch(endpoint, body, {
        headers: Api.headers?.[headerType],
      });
      return response;
    } catch (error) {
      this.errorHandle(error);
    }
  }

  //   errorHandle = (error) => {
  //     if (error?.response) {
  //       if (error.response.status === FORBIDDEN_CODE) {
  //         userSessionDelete();
  //       } else {
  //         addToaster({
  //           status: "error",
  //           title: "Error",
  //           message: "Something went wrong !",
  //         });
  //       }
  //     } else {
  //       addToaster({
  //         status: "error",
  //         title: "Error",
  //         message: "Something went wrong !",
  //       });
  //     }
  //   };
}
