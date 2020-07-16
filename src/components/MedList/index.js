import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux'

import PushNotification from 'react-native-push-notification';
import { medsFetch , medsDelete} from '../../actions';

import MedicineItem from './MedicineItem'

class MedList extends Component {

    componentDidMount() {
        this.props.medsFetch();
        console.log("canceling all local notifications for updates");
        PushNotification.cancelAllLocalNotifications();
    }

    /*componentWillUnmount() {
        this.props.unsubscribe();
    }*/

    renderItem(meds) {
        if(meds.item.Complete) {

            return <MedicineItem  
                    medicine={meds} 
                    name={meds.item.Name} 
                    frequency={meds.item.Frequency.text} 
                    dosageUnit={meds.item.DosageUnit.text} 
                    dosageQuantity={meds.item.DosageQuantity}
                    instructions={meds.item.Instructions.text}
                    imageUrl={meds.item.imageUrl}
                    obs={meds.item.Obs}
                    InitialHour={meds.item.InitialHour}
                    onPressDelete={() => this.props.medsDelete({ meds })} />

        }
    }

    render() {
        
        return (
            <FlatList 
                data={this.props.meds}
                renderItem={this.renderItem}
                keyExtractor={(meds) => meds.id} // Add a id unique
            />
        )
    } 
}

const mapStateToProps = state => {
    

    const { loading, meds, unsubscribe } = state.meds;
    return { loading, meds, unsubscribe };

    //return { dataMedicine: state.medicines}
}

export default connect(mapStateToProps, {medsFetch, medsDelete} )(MedList);