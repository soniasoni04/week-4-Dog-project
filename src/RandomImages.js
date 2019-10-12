import React,{Component} from 'react'
import {connect} from 'react-redux'
import GetRandomOneImage from './GetRandomOneImage'
import GetRandomTwoImage from './GetRandomTwoImage'
import './App.css';

class RandomImages extends Component{
   state = {
      score : 0,
      count : 0,
      answer : null
   }

   componentDidMount() {

      this.props.GetRandomOneImage();
      this.props.GetRandomTwoImage();
   }

   Score=(event)=>{

      if(this.props.image.answer===event.target.getAttribute('src').split('/')[4]){
         
         setTimeout(() => {
            this.setState({ answer: "Yes, your answer is correct :)" });
            this.increaseScore()
            this.props.GetRandomOneImage();
            this.props.GetRandomTwoImage();
        }, 200)

      }
      else {
         this.decreaseScore();
            setTimeout(() => {
                this.setState({ answer :   "OOPS !! Wrong answer, Try again" })
                this.props.GetRandomOneImage();
                this.props.GetRandomTwoImage();
            }, 200);
      }
   }

   increaseScore=()=>{
         this.setState({
            score : this.state.score + 1,
            count : this.state.count +1
         })
   }
   decreaseScore=()=>{
      this.setState({
         score : this.state.score,
         count : this.state.count +1
      })
   }
   


    render(){

        return(
            <div>
               <h2>Random images Quiz...</h2>
               
               <h2>Check the images and click the image of breed : <u>{this.props.image.answer}</u> </h2>
               {this.props.twoImage
                .concat(this.props.image.image)
                .sort()
                .map(image => {
                    return <img src={image} onClick={this.Score}/>
                })}
                
               <p>Your Current Score is : {this.state.score}</p>
               <p>Your total attempts are  : {this.state.count}</p>
               <p><b>{this.state.answer}</b></p>

            
            </div>)

    }

}

const mapStateToProps = (state) => {
   return {
      image : state.ImgOneReducer, 
      twoImage : state.ImgTwoReducer

   }
}

export default connect(mapStateToProps,{GetRandomOneImage, GetRandomTwoImage})(RandomImages)










