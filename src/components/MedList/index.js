import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux'

import { medsFetch } from '../../actions';

import MedicineItem from './MedicineItem'

class MedList extends Component {

    componentWillMount() {
        this.props.medsFetch();
    }

    /*componentWillUnmount() {
        this.props.unsubscribe();
    }*/

    renderItem(dataMedicine) {
        return <MedicineItem  medicine={dataMedicine} />
    }

    render() {
       
        return (
            <FlatList 
                data={this.props.dataMedicine}
                renderItem={this.renderItem}
                keyExtractor={(dataMedicine) => dataMedicine.id} // Add a id unique
            />
        )
    } 
}

const mapStateToProps = state => {
    return { dataMedicine: state.meds };

    //return { dataMedicine: state.medicines}
}

export default connect(mapStateToProps, {medsFetch} )(MedList);