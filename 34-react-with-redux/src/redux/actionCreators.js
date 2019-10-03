import {ADD_QUARTER, ADD_NICKEL, ADD_PENNY, ADD_DIME} from './actionTypes'

export function addQuarter(){
  return {type: ADD_QUARTER}
}

export function addNickel(){
  return {
    type: ADD_NICKEL
  }
}

export function addPenny(){
  return {
    type: ADD_PENNY
  }
}

export function addDime(){
  return {
    type: ADD_DIME
  }
}
