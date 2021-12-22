import Button from 'react-bootstrap/Button';
import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer';

const Login = () => {
  const { signInUsingGoogle, setUsers, setIsloading, users } = useAuth();
  const history = useNavigate();
  const location = useLocation();
  const url = location.state?.from || '/';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((res) => {
        setIsloading(true);
        setUsers({
          ...users,
          email: res.user.email,
          displayName: res.user.displayName,
        });
        history(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="col-sm-12 text-center text-danger mt-5 fs-1 font-weight-bold text-uppercase">
            login your Account
          </div>

          <div className="col-sm-12">
            <div
              className="my-5 d-flex justify-content-center align-items-center p-3"
              style={{ border: '2px solid #ABABAB', height: '50vh' }}
            >
              <Row className="justify-content-center align-items-center">
                <div className="col-sm-12 text-center"></div>
                <Button
                  onClick={() => handleGoogleLogin()}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #ABABAB',
                    color: '#000',
                  }}
                  className="px-5  d-flex justify-content-center align-items-center"
                >
                  <img
                    src="https://i.ibb.co/jRKzCQ5/Group-573.png"
                    className="mx-5"
                    alt="Google"
                  />
                  <span>Continue with Google</span>
                </Button>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
