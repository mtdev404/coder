/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';
import LinksArea from './components/LinksArea/LinksArea';
import Footer from './components/Footer/Footer';
import './App.sass';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  min-height: 90vh;
  justify-content: flex-start;
  background-color: white;
`;

const ColumnContainer = styled.div`
  display: flex;
  height: calc(99.9vh - 80px);
`;

const Column = styled.div`
  width: 50%;
  min-width: 400px;
  background-color: #eeeeee;
  word-wrap: break-word;
  font-size: 1.4rem;
`;

class App extends Component {
  state = {
    srcCode: '',
    allAnchors: [],
    allHrefs: [],
    uniqueHrefs: [],
    checkboxes: {},
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
      checkboxes: uniqueHrefs,
    });
  };

  handleCheckbox = (e) => {
    const { checkboxes } = this.state;

    const value = e.target.id;
    const { checked } = e.target;

    const newCheckboxes = checked
      ? [...checkboxes, value]
      : checkboxes.filter((item) => item !== value);

    this.setState({
      checkboxes: newCheckboxes,
    });
  };

  render() {
    const { srcCode, uniqueHrefs, checkboxes } = this.state;
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
              <LinksArea
                uniqueHrefs={uniqueHrefs}
                checkboxes={checkboxes}
                onChange={this.handleCheckbox}
                defaultChecked
              />
            </Column>
          </ColumnContainer>
          <Footer />
        </Wrapper>
        <div className='temp'>coś</div>
      </div>
    );
  }
}

export default App;
