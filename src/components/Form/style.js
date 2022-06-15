import styled from 'styled-components';

const FormStyled = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .filterName{
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    font-size: 1.2rem;
    color: #EFEEFE;

    input{
      text-align: center;
      width: 300px;
      border-radius: 4px;
      outline: none;
      padding: 15px;
      font-size: 1.2rem;
      background-color: #1e1e1e;
      border: none;
      border-bottom: 2px solid #454545;
      color: white;

      :hover {
          transition: .6s;
          border-bottom: 2px solid white;
        }

      :focus {
        transition: .6s;
          border-bottom: 2px solid yellow;
      }
    }
    }

    button {
      background-color: #1e1e1e;
      border: 1px solid #FFE81F;
      padding: 20px;
      margin-bottom: 40px;
      border-radius: 14px;
      color: #FFE81F;
      font-size: 20px;

      :hover {
        transition: .6s;
        background-color: rgba(255, 255, 0, 0.2);;
      }
    }

    form{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      height: 150px;

      select{
        font-size: 1.2rem;
        width: auto;
        border-radius: 4px;
        background-color: #1e1e1e;
        border: none;
        border-bottom: 2px solid #454545;
        color: white;
        outline: none;
        padding: 10px;
        
        :hover {
          transition: .6s;
          border-bottom: 2px solid white;
        }

        :focus {
          transition: .6s;
          border-bottom: 2px solid yellow;
        }

      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: auto;
        text-align: start;

        input[type="number"] {
          text-align: center;
          font-size: 1.2rem;
          width: 100px;
          border-radius: 4px;
          background-color: #1e1e1e;
          border: none;
          border-bottom: 2px solid #454545;
          outline: none;
          padding: 10px;
          color: white;

          :hover {
          transition: .6s;
          border-bottom: 2px solid white;
          }

          :focus {
            transition: .6s;
            border-bottom: 2px solid yellow;
          }
        }
      }
    }

  .sort {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 170px;
    
    input[type="radio"]{
      margin-left: 10px;
      margin-top: 10px;
      transform: scale(1.5);

      :checked{
        accent-color: #FFE81F;
      }
    }
  }

  section{
    display: grid;
    grid: "filters removeAll" 1fr
          /2fr 1fr ;
    grid-gap: 300px;
    opacity: ${({ renderFilter }) => (renderFilter ? 1 : 0)};
    transition: ${({ renderFilter }) => (renderFilter && '.6s')};

    #removeAllFilters {
      grid-area: removeAll;
      width: 200px;
      height: 80px;
    }

    ul{
      text-align: start;
      margin-left: 100px;
      grid-area: filters;
      list-style-type:none;

      li{
        text-align: start;

        button{
        margin-left: 10px;
        font-size: 1.5rem;
        padding: 5px;
        border-radius: 3px;
        }
      }
    }
  }
`;

export default FormStyled;
