import nx from '@feizheng/next-js-core2';
import NxAxios from '@feizheng/next-axios';

const Http = nx.declare({
  extends: NxAxios,
  methods: {
    getToken: function () {
      const { token } = nx.$local;
      if (token) {
        return `Bearer ${token}`;
      }
      return null;
    },
    setTokenInterceptor: function () {
      this.axios.interceptors.request.use((config) => {
        const token = this.getToken();
        token && nx.mix(config.headers.common, { Authorization: token });
        return config;
      });
    },
    setRequestInterceptor: function () {
      this.setTokenInterceptor();
    },
    isSuccess: function (_) {
      return true;
    },
    data: function (inResponse) {
      return inResponse.data;
    },
    error: function (_) {
      // console.log('error!');
      // console.log(inError);
    },
  },
});

export default Http.getInstance();
