import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { Container, Row, Col} from 'react-bootstrap'
import SearchInput from '../../components/sidebar/SearchInput'

const Home = () => {
	return (
		
		<Container>
			<Row className='border-r border-slate-500 p-4'>
			<SearchInput />
			</Row>
			<Row>
				<Col sm={4}><Sidebar />
			</Col>
			<Col sm={8}>
			<MessageContainer />
			</Col>
			</Row>
		</Container>
	);
};
export default Home;
