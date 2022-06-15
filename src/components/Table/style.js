import styled from 'styled-components';

const TableStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  header {
    padding: 50px;

    img{
     width: 500px;
    }

    h2{
      color: #EFEEFE;
      text-align: center;
      font-size: 1.5 rem;
      letter-spacing: 10px;
      animation: tracking-in-expand-fwd 0.8s 
      cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: auto;
    border-radius: 14px;
    background-color: #1e1e1e;
    margin-bottom: 50px;
  }

  section {
    width: 95%;
    overflow: auto;
    height:auto;
    margin-bottom: 10px;

    ::-webkit-scrollbar {
      background: #1e1e1e;
      width: 8px;
      height: 10px;
    } 
    ::-webkit-scrollbar-thumb {
      background: #454545;
      border-radius: 5px;
    }

    table {
      border-collapse: collapse;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      width: 100%;
      background-color: #1e1e1e;

      td, th {
        padding: 8px;
      }

      tr{
        border: thin solid #454545;
      }

      th{
        background-color: #121212;
        color: white;
        padding: 15px;
      }
  }
}

@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
            transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}

`;

export default TableStyle;
