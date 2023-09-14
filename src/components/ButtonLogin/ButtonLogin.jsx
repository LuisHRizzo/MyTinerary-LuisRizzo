import './ButtonLogin.css'
import { useDispatch } from 'react-redux'
import { Link as Anchor } from 'react-router-dom'
import { logOut } from '../../redux/actions/userActions.js'
import { useSelector } from 'react-redux'


const ButtonLogin = ({ href, title, login = false }) => {
    const dispatch = useDispatch();
    const { notify } = useSelector(store => store.users)

    const dispatchFunc = () => {
        dispatch(logOut());
        notify.logout();
    }

    return (
        <Anchor to={href} className='btn btn-primary'onClick={login ? dispatchFunc : () => { }}>
            <i className="bi bi-person-fill me-2"></i>
            {title}
        </Anchor>
    )
}

export default ButtonLogin