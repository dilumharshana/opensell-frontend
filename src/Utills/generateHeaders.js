/**
 * Header object for api calls
 * @param token = Access token for append headers
 * @returns = Headers object
 */

export const generateHeaders = (token) => {
  return {
    html: {
      contentType: "application/html",
      Authorization: `bearer ${token}`,
    },
    json: {
      contentType: "application/json",
      Authorization: `bearer ${token}`,
    },
    formData: {
      contentType: "multipart/form-data",
      Authorization: `bearer ${token}`,
    },
  };
};
