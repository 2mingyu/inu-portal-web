import styled from 'styled-components';
import intipLogo from '../../../resource/assets/inu-logo-img.svg';
import { useNavigate } from 'react-router-dom';

export default function AppLogo() {
  const navigate = useNavigate();

  return (
    <>
      <Logo onClick={() => {navigate('/m/home')}} src={intipLogo}  />
    </>
  );
}

const Logo = styled.img`
`;
