import LoginHeader from './LoginHeader';
import LoginBody from './LoginBody';
import LoginFooter from './LoginFooter';

const Login = () => {
    return (
        <>
            <div style={{margin: '8px'}}>
                <LoginHeader  />      
                <LoginBody />
                <LoginFooter />
            </div>
        </>
    )
}


export default Login;