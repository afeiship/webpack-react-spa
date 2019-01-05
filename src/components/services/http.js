import nx from 'next-js-core2';
import NxAxios from 'next-axios';

const Http = nx.declare({
  extends: NxAxios,
  methods: {
    getToken: function() {
      const { login } = nx.$local;
      if (login) {
        return `Bearer ${login.token}`;
      }
      return null;
    },
    setTokenInterceptor: function() {
      this.axios.interceptors.request.use((config) => {
        const token = this.getToken();
        token && nx.mix(config.headers.common, { Authorization: token });
        return config;
      });
    },
    setRequestInterceptor: function() {
      this.setTokenInterceptor();
    },
    toData: function(inResponse) {
      return inResponse.data;
    },
    error: function(inError) {
      console.log('error!');
      console.log(inError);
    }
  }
});

export default Http.getInstance();
