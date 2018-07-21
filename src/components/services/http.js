import nx from 'next-js-core2';
import NxAxios from 'next-axios';
import AppBase from '#';

const Http = nx.declare({
  extends: NxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!Http.instance) {
        Http.instance = new Http();
      }
      return Http.instance;
    }
  },
  methods: {
    getBearerToken: function () {
      const {login} = AppBase.$.local;
      if (login) {
        return `Bearer ${login.token}`;
      }
      return null;
    },
    setRequestInterceptor: function () {
      this.axios.interceptors.request.use((config) => {
        const bearerToken = this.getBearerToken();
        bearerToken && nx.mix(config.headers.common, {Authorization: bearerToken});
        return config;
      });
    },
    contentType: function () {
      return 'application/json; charset=utf-8';
    },
    transformParam: function (inData) {
      return JSON.stringify(inData);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    error: function (inError) {
      console.log('error!');
      console.log(inError);
    }
  }
});

export default Http.getInstance();