import React, { Component } from 'react';
// import "./App.css";

// // function BoardBox () {
// //     return (
// //         <div className='box' />
// //     )
// // }

// class BoardBox extends Component {
//     render() {
//         return <div className='box' />
//     }
// }

// // function BoardRow(props){
// //     const {count} = props;
// //     const getList = () => {
// //         const list = [];
// //         for(let i = 0; i < count; i++) {
// //             list.push(<BoardBox key={i}/>)
// //         }
// //         return list;
// //     }
// //     return(
// //         <div className='row'>
// //             {getList()}
// //         </div>
// //     )
// // }

// class BaordRow extends Component {
//     constructor(props){
//         super(props)
//     }
//     getList(){
//         const list = [];
//         for(let i = 0; i < this.props.count; i++){
//             list.push(<this.BoardBox key={i}/>)
//         }
//         return list;
//     }
//     render(){
//         return (
//             <div className='row'>
//                 {this.getList()}
//             </div>
//         )
//     }
// }

// // function Score(props) {
// //     return (
// //         <div>{props.score}</div>
// //     )
// // }
// class Score extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (<div>{this.props.score}</div>)
//     }
// }

// // function Board (props){
// //     const {width, heigth} = props;

// //     const renderRows = () => {
// //         const list = [];
// //         for (let i = 0; i < heigth; i++){
// //             list.push(<BoardRow count={width} key = {i}/>)
// //         }
// //         return list;
// //     }
// //     return(
// //         <>
// //             {renderRows()}
// //         </>
// //     )
// // }
// class Baord extends Component {
//     constructor(props){
//         super(props)
//     }
//     renderRows(){
//         const list = [];
//         for (let i = 0; i < this.props.heigth; i++){
//             list.push(<this.BoardRow count={this.props.width} key = {i}/>)
//         }
//         return list;
//     }
//     render(){
//         return this.renderRows
//     }
// }

// function App(){
//     return(
//         <div className='App'>
//             <div>
//                 <h1>SNAKE</h1>
//                 <Score score={20} />
//             </div>
//             <this.Board width={10} heigth={10} />
//         </div>
//     )
// }




// class App extends Component {
//     constructor(props){
//          super(props)
//          this.state = {
//              clicked: 0,
//              active: false,
//          }
//     }
//     clicked = () =>{
//         this.setState({
//             clicked: this.state.clicked + 1
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>You clicked {this.state.clicked} times</h1>
//                 <button onClick={this.clicked}>
//                     Click me
//                 </button>
//             </div>
//         )
//     }
// }


export default App;