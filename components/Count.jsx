import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";

const styles = StyleSheet.create({
  container: {

    margin: 10,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    
    textAlign: 'center',
    fontSize: 20
  }
});

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={ () => setCount((count +1 > 10)? 1 : count +1)}>
        <Text style={styles.buttonText}>증가</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ () => setCount(0)}>
        <Text style={styles.buttonText}>리셋</Text>
      </TouchableOpacity>
    </View>
  );
} 




// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// // 스타일 시트 정의
// const styles = StyleSheet.create({
//   container: {
//     margin: 10, // 컨테이너 주변 여백
//     alignItems: 'flex-start', // 자식 요소를 왼쪽으로 정렬
//   },
//   button: {
//     backgroundColor: 'black', // 버튼 배경색
//     paddingVertical: 10, // 버튼 상하 여백
//     paddingHorizontal: 20, // 버튼 좌우 여백
//     borderRadius: 5, // 버튼 모서리 둥글게
//     marginTop: 10, // 버튼 위쪽 여백
//   },
//   buttonText: {
//     color: '#FFFFFF', // 버튼 텍스트 색상
//     fontSize: 16, // 버튼 텍스트 크기
//     fontWeight: 'bold', // 버튼 텍스트 굵기
//   },
//   text: {
//     textAlign: 'center', // 텍스트 가운데 정렬
//     fontSize: 20, // 텍스트 크기
//   }
// });

// // Count 함수 컴포넌트 정의
// export default function Count() {
//   // count 상태 변수와 setCount 함수를 선언하여 초기값 0으로 설정
//   const [count, setCount] = useState(0);

//   // 컴포넌트 반환
//   return (
//     <View style={styles.container}> {/* 컨테이너 스타일 적용 */}
//       {/* 현재 카운트 값을 표시하는 텍스트 */}
//       <Text style={styles.text}>{count}</Text>

//       {/* 카운트 증가 버튼 */}
//       <TouchableOpacity style={styles.button} onPress={() => setCount((count + 1 > 10) ? 1 : count + 1)}>
//         <Text style={styles.buttonText}>증가</Text>
//       </TouchableOpacity>

//       {/* 카운트 리셋 버튼 */}
//       <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
//         <Text style={styles.buttonText}>리셋</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// //styles: 컴포넌트에서 사용하는 스타일을 정의합니다.
// Count: 카운트를 관리하고 표시하는 함수 컴포넌트입니다.
// useState를 사용하여 count 상태와 setCount 함수를 선언합니다.
// TouchableOpacity를 사용하여 카운트를 증가시키는 버튼과 카운트를 리셋하는 버튼을 구현합니다.












