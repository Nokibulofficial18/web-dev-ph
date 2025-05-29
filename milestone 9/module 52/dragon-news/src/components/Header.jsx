import moment from 'moment';
import logo from '../../src/assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div className="log0">
                <img className='w-[400px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 text-xl font-bold'>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;