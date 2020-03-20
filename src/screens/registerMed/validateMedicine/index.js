import React from 'react';

class Validate extends React.Component {

    validateName(text) {
        var alph = /^[a-zA-Z]+$/
      
        if(alph.test(text)) {
            return true
        }
        else {
            return false
        }
        
    }

    validateNumber(number){
        if(Number(number) > 0 && Number(number) <50) {
            return true
        }
        else {
            return false
        }

    }

}

export default new Validate;