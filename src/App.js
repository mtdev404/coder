/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';
import LinkOptions from './components/LinkOptions/LinkOptions';
import LinksArea from './components/LinksArea/LinksArea';
import Footer from './components/Footer/Footer';
import './App.sass';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1005px;
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
    checkboxes: [],
    oneLink: false,
    preUrl: false,
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

  handleOptionCheckbox = (e) =>
    this.setState({
      [e.target.id]: e.target.checked,
    });

  render() {
    const { srcCode, uniqueHrefs, checkboxes, oneLink } = this.state;
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
              {checkboxes.length !== 0 ? (
                <LinkOptions
                  handleOptionCheckbox={this.handleOptionCheckbox}
                  oneLink={oneLink}
                />
              ) : null}
              <LinksArea
                uniqueHrefs={uniqueHrefs}
                checkboxes={checkboxes}
                handleCheckbox={this.handleCheckbox}
                oneLink={oneLink}
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
