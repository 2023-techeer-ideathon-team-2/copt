import Logo from '../assets/logo.svg';
import Code from '../assets/code.svg'
import { useNavigate } from 'react-router-dom';

const EntryPage = () => {
  const navigate = useNavigate();
  const navigateToSelect = () => {
    navigate("/SelectPage");
  };
return (
  <>
    <div style={{
      height: '5%',
      justifyContent: 'left',
      alignItems: 'left',
      margin: '1%'
    }}>
      <img src={Logo} alt="logo"/>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        color : 'white',
        marginLeft: '14%',
        marginTop :'15%'
      }}>
      <h3 style={{ fontSize: '36px', fontWeight: '600',}}>
        시작은
      </h3>
      <h3 style={{ fontSize: '36px', fontWeight: '700', color: '#9B68B4'}}>
        CoPT
      </h3>
      <h3 style={{ fontSize: '36px', fontWeight: '600'}}>
        부터
      </h3>
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',  
        marginTop: '-40px',
        color : 'white',
        marginLeft: '14%'
      }}>
      <h2 style={{ fontSize: '18px', fontWeight: '200' }}>
      문제를 해결하는 데에 코드 없이도 충분한 아이디어가 있습니다.<br/>
      CoPT로 코드 없이 문제 해결을 경험해보세요. 
      </h2>
    </div>
    
    <div style={{
      height: '5%',
      justifyContent: 'right',
      alignItems: 'right',
      marginLeft: '45%',
      marginTop : '-10%'
    }}>
      <img src={Code} alt="code"/>
    </div>
    <div style={{
      height: '5%',
      justifyContent: 'right',
      alignItems: 'right',
      marginLeft: '40%',
      marginTop: '20%'
    }}>
      <button style = {{
        borderRadius: '20px', 
        width: '280px',
        height: '55px',
        fontSize: '24px',
        fontWeight: '600',
        color: '#222529',
        cursor: 'Pointer',
      }}  onClick = {navigateToSelect}>START</button>
    </div>
    <footer style={{ fontSize: '16px',
      fontWeight: '200',
      color:'white',
      opacity:'70%',
      textAlign:'center',
      right: '42%',
      marginBottom: '2%',
      position:'absolute',
      bottom: '0%' 
    }}>
      © Copt Cloud Corp. All Rights Reserved.
    </footer>

  </>
);
};

export default EntryPage;
