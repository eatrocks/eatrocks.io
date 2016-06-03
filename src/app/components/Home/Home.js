import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './style.css';

const Home = () => (
    <div>
        <Helmet
            title="React Starter Home"
            meta={[
                {"name": "description", "content": "A React Starter"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <div className={styles.title}>
            <h1>eatrocks.io</h1>
        </div>
    </div>
);



export default connect()(Home);
