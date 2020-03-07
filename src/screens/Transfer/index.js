import React,{Component} from 'react';
import { View, Text, StatusBar, FlatList,TouchableOpacity } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';
import { Container, HeaderText, QuickActionBtn } from '../../components';
export default class Transfer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Container>
                <HeaderText title="Transfer" />
                <View style={{marginVertical:30}}>
                    <Text style={{color:'#2886ff',fontSize:50,fontWeight:'100'}}>
                        TRANSFER
                    </Text>
                </View>
                <View style={{ marginVertical: 10, alignSelf: 'center', alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                        {/* Wallet Balance */}
                        <Text style={{ fontWeight: '600', alignSelf: 'flex-start' }}>₦</Text>
                        <Text style={{ fontSize: 50, fontWeight: '700' }}>230,000</Text>
                        <Text style={{ fontWeight: '600', alignSelf: 'flex-end' }}>00</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color:'#2886ff',fontSize:30,marginTop:25,fontWeight:'100',alignSelf:'center'}}>
                        T0
                    </Text>
                </View>
                <View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'#515E69',fontSize:38,marginTop:35,fontWeight:'100'}}>
                            IFERE OGBEBOR
                        </Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#2886ff',fontSize:38,fontWeight:'100'}}>
                            ID:
                        </Text>

                            <Text style={{color:'#515E69',fontSize:38,fontWeight:'100'}}>
                                45426Y
                            </Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center',marginTop:90}}>
                    <View style={{backgroundColor:'#2886ff', width: 200,height:50,alignItems:'center',justifyContent:'center', borderRadius:8}}>
                        <Text style={{color:'#fff', fontSize:30}}>
                            TRANSFER
                        </Text>
                    </View>
                </TouchableOpacity>


            </Container>
        )

    }


}

const styles = {
    containerStyle:{
        color:'#333',

    },
    req_test_style : {
        marginTop:10,
        marginBottom:30,
        color:'#2886ff',
        fontWeight: '100',
        fontSize:50
    },
    dash_style : {
        width:40,
        color:'#515e69',
    }

}
