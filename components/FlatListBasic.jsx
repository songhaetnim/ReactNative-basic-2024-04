import React, { useState } from "react"
import { View, StyleSheet, FlatList, Text, Image, TextInput } from "react-native";

const style = StyleSheet.create({
  container: {flex:1, padding:20},
  item: {padding:10, fontSize: 20, height: 40},
  image: {borderRadius: 100},
  input: { width:200, height: 30, fontSize:14, marginTop:5, borderWidth: 2, textAlign:'center'},
});
const img ={
  uri: 'https://picsum.photos/200/200', width: 200, height: 200, };

export default function FlatListBasic() {
  const [fruit, setFruit] = useState([{key:'사과'},{key:'복숭아'},{key:'수박'}]);
  const [inputValue, setInputValue] = useState('');
  const addFruit = () => {
    if (inputValue.trim() !== '') {
      setFruit([...fruit, { key: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <View style={style.container}>
      <Image source={img} style={style.image}/>
      <TextInput placeholder="과일 이름을 입력하세요." onChangeText={(text) => setInputValue(text)} value={inputValue} onSubmitEditing={addFruit} style={style.input}/>
      <FlatList
        data={fruit}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}  
      />
    </View>
  );
} 



// import React, { useState } from "react";
// import { View, StyleSheet, FlatList, Text, Image, TextInput } from "react-native";

// // 스타일 시트 정의
// const style = StyleSheet.create({
//   container: { flex: 1, padding: 20 }, // 전체 컨테이너 스타일
//   item: { padding: 10, fontSize: 20, height: 40 }, // 각 아이템 스타일
//   image: { borderRadius: 100 }, // 이미지 스타일
//   input: { width: 200, height: 30, fontSize: 14, marginTop: 5, borderWidth: 2, textAlign: 'center' }, // 입력창 스타일
// });

// // 이미지 정보
// const img = {
//   uri: 'https://picsum.photos/200/200', // 이미지 주소
//   width: 200, // 이미지 너비
//   height: 200, // 이미지 높이
// };

// // FlatListBasic 컴포넌트 정의
// export default function FlatListBasic() {
//   // 과일 목록과 입력값을 상태로 관리합니다.
//   const [fruit, setFruit] = useState([{ key: '사과' }, { key: '복숭아' }, { key: '수박' }]);
//   const [inputValue, setInputValue] = useState('');

//   // 새로운 과일을 추가하는 함수
//   const addFruit = () => {
//     // 입력값이 공백이 아닐 경우에만 실행합니다.
//     if (inputValue.trim() !== '') {
//       // 이전 과일 목록에 새로운 과일을 추가합니다.
//       setFruit([...fruit, { key: inputValue }]);
//       // 입력값을 초기화합니다.
//       setInputValue('');
//     }
//   };

//   return (
//     <View style={style.container}>
//       {/* 이미지를 표시하는 컴포넌트 */}
//       <Image source={img} style={style.image} />
//       {/* 과일 이름을 입력하는 TextInput 컴포넌트 */}
//       <TextInput
//         placeholder="과일 이름을 입력하세요."
//         onChangeText={(text) => setInputValue(text)} // 입력값이 변경될 때마다 호출되는 콜백 함수
//         value={inputValue} // 입력값
//         onSubmitEditing={addFruit} // 키보드에서 '완료' 버튼을 눌렀을 때 호출되는 콜백 함수
//         style={style.input} // 스타일
//       />
//       {/* FlatList 컴포넌트로 과일 목록을 표시 */}
//       <FlatList
//         data={fruit} // 표시할 데이터
//         renderItem={({ item }) => <Text style={style.item}>{item.key}</Text>} // 각 항목을 렌더링하는 함수
//       />
//     </View>
//   );
// }
