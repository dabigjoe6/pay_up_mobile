import React,{Component} from 'react';
import { View, Text, StatusBar, FlatList,TouchableOpacity,TextInput } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { Container, HeaderText, QuickActionBtn } from '../../components';
export default class ReqId extends Component{
    constructor(props){
        super(props);
        this.state = {
            code:1345
        }
    }
    render(){
        return (
            <Container>
                <HeaderText title="Request ID" />
            <View style={styles.containerStyle}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.req_test_style}>
                        Enter request ID
                    </Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TextInput style={{width:300, height:50,borderColor:'#2886ff',borderWidth:1, borderRadius:6}}/>

                </View>

                <View style={{ alignItems:'center', justifyContent:'center', marginTop:25, marginBottom:30}}>
                    <Text style={{color:'#2886ff', fontSize:30,marginBottom:20}}>
                        OR
                    </Text>
                    <Text style={{color: '#2886ff', fontSize:30, marginBottom: 20}}>
                        SCAN
                    </Text>
                    <Text style={{color: '#2886ff', fontSize:30, marginBottom: 20}}>
                        QR CODE
                    </Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Button
                        containerStyle={{ marginHorizontal: 5, }}
                        titleStyle={{ fontSize: 12, }}
                        buttonStyle={{ width: 75, height: 60 }}
                        icon={
                            <Avatar rounded icon={{ name: 'qrcode' , type:'font-awesome'}}  />
                        }
                        type="outline"
                    />
                </View>
                <View style={{alignItems:'center', justifyContent:'center',marginTop: 15}}>
                    <Text>
                        TAP TO OPEN CAMERA
                    </Text>
                </View>

                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center',marginTop:90}}>
                            <View style={{backgroundColor:'#2886ff', width: 200,height:50,alignItems:'center',justifyContent:'center', borderRadius:8}}>
                                    <Text style={{color:'#fff', fontSize:30}}>
                                        NEXT
                                    </Text>
                            </View>
                    </TouchableOpacity>

            </View>
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
