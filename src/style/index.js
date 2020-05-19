import styled from 'styled-components';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import Portfolio from '../components/Portfolio';

const green = '#00ff00';
const black = '#000000';

export const ContWrapper = styled.div`
    border: 1px solid ${green};
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    min-width: 200px;
    padding: 20px;
    color: ${green};
    background: ${black};
    h1 {
        font-size: 50px;
    }
    div {
        flex: 1;
    }
`

export const GrnBtn = styled.button`
    border: 1px solid ${green};
    color: ${green};
    background: ${black};
    padding: 5px;
    font-size: 30px;
    margin: 5px;
    :hover {
        color: ${black};
        background: ${green};
        cursor: pointer;
    }
`

export const Typewriter = styled.div`
max-height: 500px;
overflow: auto;
h1 {
  font-size: 30px !important;
  overflow: hidden;
  border-right: .15em solid ${green};
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 2.5s steps(40, end),
    blink-caret .75s step-end infinite;
  max-width: 750px;
}

img {
    max-heigh: 250px;
    max-width: 250px;
    margin: 0 auto;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: ${green} }
}
`