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

    validateOption(type, option) {

        if(type === "ContainerUnit" || type === "DosageUnit" ) {

            var containerUnit = ['Comprimido(s)','Gota(s)', 'Mg','Ml','Unidade(s)'];

            return containerUnit.includes(option);

        } else if (type === "Frequency") {

            var frequency = ['4h em 4h','6h em 6h','8h em 8h','12h em 12h'];

            return frequency.includes(option);

        } else if (type === "DurationOfTreatmentType") {

            var durationOfTreatmentType = ['Dia(s)','Semana(s)','Mês'];

            return durationOfTreatmentType.includes(option);

        } else if (type === "Instructions") {

            var instructions = ['Tomar em jejum','Antes das refeições','Durante as refeições','Após as refeições','Não tomar com ...'];

            return instructions.includes(option);

        }

    }

    validateDate(date) {
        
        if(date){
            var validDate = new Date();
            if(validDate.valueOf() < date.valueOf()){
                return true;
            }
        }
    
        return false;
    }

}

export default new Validate;