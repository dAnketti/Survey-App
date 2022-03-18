import { useState } from "react";
import logoDanket from "../../danketlow.png";
import "../../App.css";
import AllQuestionsPreview from "./QuestionAnswerTypes/AllQuestionsPreview";
import NewQuestion from "./QuestionAnswerTypes/NewQuestion";
import NavigationBar from "../../pages/NavigationBar";
import SurveyInformationForm from "./QuestionAnswerTypes/SurveyInformationForm";

import React, { Component } from 'react'

export default class Form extends Component {
  state={
    step:1
  }

  nextStep =()=>{
    const {step}=this.state;
    this.setState({
      step:step+1
    });
  };
  prevStep = () =>{
    const {step}=this.state;
    this.setState({
      step:step*1-1*1
    });
  };

  render() {
    const {step}=this.state;
    switch (step) {
      case 1*1:
      return( <div className="text-left col-mt-50">              
            <div className="container col-md-6">
                <div>
                  <AllQuestionsPreview 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}   />
                </div>                           
            </div>
          </div>
    )
    break;

    case 2*1:
      return( <div className="text-left col-mt-50">
          <NavigationBar />      
            <div className="container col-md-6">
                <div>
                  <SurveyInformationForm prevStep={this.prevStep} />
                </div>                           
            </div>
          </div>
    )
    break;
      default:
        break;
    }
  }
}

