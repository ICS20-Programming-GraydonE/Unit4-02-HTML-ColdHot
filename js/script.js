
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";

  // This function Calculates if it is warm or cold. 
  function calculate() { 
    
  // input temperature and set program feedback
  let temperature = parseInt(document.getElementById('temperature').value);
    
  let programFeedback = "" ;

  if (temperature > 15) {
    programFeedback = "It is cold";
  }

  if (temperature <= 15) {
    programFeedback = "It is warm";
  }
  
  // output if its warm or cold
  document.getElementById('program-feedback').innerHTML = programFeedback;
  
}