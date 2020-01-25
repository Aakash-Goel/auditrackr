/* eslint-disable prefer-promise-reject-errors */

import axios from 'axios';
import _merge from 'lodash/merge';
import _cloneDeep from 'lodash/cloneDeep';
import _pathOr from 'lodash/fp/pathOr';

const APITimeout = 30000;

const getApiData = response => {
  let responseData;
  if (response.data && response.data.data) {
    responseData = _pathOr(null, 'data.data', response);
  } else if (response.data && response.data.data === null) {
    responseData = null;
  } else {
    responseData = _pathOr(null, 'data', response);
  }

  return responseData;
};

const getApiErrorData = response => {
  let errorData = {};

  if (response.data && response.data.errors) {
    errorData.statusCode = _pathOr(
      null,
      'data.errors[0].extensions.code',
      response
    );
    errorData.error = _pathOr(null, 'data.errors[0].path[0]', response);
    errorData.message = _pathOr(null, 'data.errors[0].message', response);
  } else {
    errorData = null;
  }

  return errorData;
};

const transformApiResponse = (
  axiosResponse,
  identifier,
  message = null,
  code = null
) => {
  const axiosStatus = _pathOr(null, 'status', axiosResponse);
  const axiosStatusText = _pathOr(null, 'statusText', axiosResponse);
  const axiosData = identifier === 'success' ? getApiData(axiosResponse) : null;
  const axiosError =
    identifier === 'success'
      ? getApiErrorData(axiosResponse)
      : {
          statusCode: axiosStatus,
          error: axiosStatusText,
          message: axiosStatusText,
        };
  const axiosHeaders = _pathOr(null, 'headers', axiosResponse);
  const axiosConfig = _pathOr(null, 'config', axiosResponse);
  const axiosMessage = message;

  const transformResponse = _cloneDeep({
    response: {
      data: axiosData,
      error: axiosError,
      statusCode: axiosStatus,
      statusText: axiosStatusText,
      headers: axiosHeaders,
      axiosErrorMessage: axiosMessage,
      timeout: code === 'ECONNABORTED',
      config: axiosConfig,
    },
  });

  return transformResponse;
};

/**
 * method to trigger ajax call as per provided config i.e. an object of url, custom headers and etc.
 * @param {object} config
 * @return Promise object of response
 */
const triggerAxios = config => {
  const timeoutValue = config.timeout ? config.timeout : APITimeout;
  _merge(config, { timeout: timeoutValue });

  return new Promise((resolve, reject) => {
    axios(config).then(
      response => {
        if (response.data) {
          const successData = transformApiResponse(response, 'success');

          return resolve({
            body: { ...successData.response },
          });
        }

        return reject({
          body: response.error,
        });
      },
      e => {
        const { response: axiosResponse, message, code } = e;

        const errorData = transformApiResponse(
          axiosResponse,
          'error',
          message,
          code
        );

        return reject({
          body: { ...errorData.response },
        });
      }
    );
  });
};

/**
 * method to get the config for axios
 * @param {object} requestHeader
 * @param {object} options
 * @return object with configuration
 */
const getConfig = options => {
  const config = {
    method: 'POST',
    url: 'http://localhost:4000/graphql',
    json: true,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };

  _merge(config, options);

  return config;
};

/**
 * method to trigger ajax request
 * @param {object} opt
 * @return Promise object of response
 */
const ServiceUtil = {
  triggerRequest(opt) {
    const options = opt;

    if (!options.headers) {
      delete options.headers;
    }

    const config = getConfig(options);
    const getData = triggerAxios(config);

    return getData;
  },
};

export default ServiceUtil;
