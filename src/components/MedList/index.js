import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux'

import MedicineItem from './MedicineItem'

class MedList extends Component {

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
    return { dataMedicine: state.medicines}
}

export default connect(mapStateToProps)(MedList);