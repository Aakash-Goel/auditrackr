/* eslint-disable prefer-promise-reject-errors */

import axios from 'axios';
import _merge from 'lodash/merge';
import pathOr from 'lodash/fp/pathOr';
import { cloneDeep } from 'lodash/fp';

const APITimeout = 30000;
const TOKEN = 'token';

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
          const parsedData = response.data;

          return resolve({
            body: parsedData,
            response,
          });
        }

        return reject({
          body: response.error,
          statusCode: response.status,
        });
      },
      e => {
        const {
          response: axiosResponse,
          config: axiosConfig,
          message,
          code,
        } = e;
        const axiosStatus = pathOr(null, 'status', axiosResponse);
        const axiosData = pathOr(null, 'data', axiosResponse);
        const axiosHeaders = pathOr(null, 'headers', axiosResponse);
        const axiosMessage = message;

        const errorData = cloneDeep({
          response: {
            data: axiosData,
            status: axiosStatus,
            headers: axiosHeaders,
            axiosErrorMessage: message,
            timeout: code === 'ECONNABORTED',
          },
          config: axiosConfig,
          message: axiosMessage,
        });

        return reject({
          body: { response: errorData.response },
          statusCode: axiosStatus,
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
const getConfig = (requestHeader, options) => {
  const config = {
    method: 'GET',
    url: '/',
    json: true,
    headers: requestHeader,
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
    const requestHeader = {};

    if (!options.headers) {
      delete options.headers;
    }

    const token = localStorage.getItem(TOKEN);
    requestHeader.Authorization = token ? `Bearer ${token}` : null;

    const config = getConfig(requestHeader, options);

    return triggerAxios(config);
  },
};

export default ServiceUtil;
