import { ErrorView } from '../components';

const Error404 = () =>
    <ErrorView
        title="Not Found"
        message="The page you are looking for doesn't seem to exist."
        goBack />;

export default Error404;