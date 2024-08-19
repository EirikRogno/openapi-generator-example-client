import { Configuration, UsersApi } from '../generated-sources/openapi';

const configuration = new Configuration({
	basePath: 'http://localhost:8080',
});

const userApi = new UsersApi(configuration);

export default userApi;