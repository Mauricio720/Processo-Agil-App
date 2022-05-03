import styled from "styled-components/native";

export default {
   Container:styled.View`
        marginTop:25px;
        width:95%;
        height:40px;
   `,

   ContainerNumber:styled.ScrollView`
      flex:1;
      borderBottomWidth:2px;
      borderColor:#9d0039;
      padding:5px;
   `,

   NumberPage:styled.TouchableOpacity`
      width:40px;
      height:40px;
      backgroundColor:${props => props.active ? '#9d0039' : 'transparent'};
   `,

   NumberPageText:styled.Text`
      fontSize:20px;
      fontWeight:bold;
      color:${props => props.active ? 'white' : '#9d0039'};
      textAlign:center;
   `
}