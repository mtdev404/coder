/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';
import LinksArea from './components/LinksArea/LinksArea';
import './App.sass';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  background-color: white;
`;

const Column = styled.div`
  width: 50%;
  height: 100%;
  background-color: #eeeeee;
  word-wrap: break-word;
  font-size: 1.4rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  height: 100%;
`;
class App extends Component {
  state = {
    srcCode: '',
    allAnchors: [],
    allHrefs: [],
    uniqueHrefs: [],
  };

  handleCode = (e) =>
    this.setState({
      srcCode: e.target.value,
    });

  getLinks = (code) => {
    const div = document.querySelector('.temp');
    div.innerHTML = code;
    const allAnchors = [...document.links];
    const allHrefs = allAnchors.map((item) => item.href);
    const uniqueHrefs = [...new Set(allHrefs)];
    this.setState({
      allAnchors,
      allHrefs,
      uniqueHrefs,
    });
  };

  getHref = (div) => {};

  render() {
    const { srcCode, uniqueHrefs } = this.state;
    return (
      <div className='App'>
        <Wrapper>
          <Nav onClick={() => this.getLinks(srcCode)} />
          <ColumnContainer>
            <Column>
              <Input
                type='text'
                placeholder='Tu wklej kod!'
                onChange={this.handleCode}
              />
            </Column>
            <Column className='right'>
              <LinksArea uniqueHrefs={uniqueHrefs} />
            </Column>
          </ColumnContainer>
        </Wrapper>
        <div className='temp'>coś</div>
      </div>
    );
  }
}

export default App;
