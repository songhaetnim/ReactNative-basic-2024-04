import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// 스타일 시트 정의
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로 방향으로 요소들을 배열합니다.
    marginTop: 8, // 컴포넌트의 위쪽 여백입니다.
    marginBottom: 8, // 컴포넌트의 아래쪽 여백입니다.
    backgroundColor: 'aliceblue', // 배경색상을 지정합니다.
    justifyContent: 'center', // 주축(가로축)을 기준으로 요소들을 가운데 정렬합니다.
  },
  button: {
    paddingHorizontal: 8, // 좌우(padding) 여백을 지정합니다.
    paddingVertical: 6, // 상하(padding) 여백을 지정합니다.
    borderRadius: 4, // 버튼의 테두리를 둥글게 만듭니다.
    backgroundColor: 'oldlace', // 버튼의 배경색상을 지정합니다.
    alignSelf: 'flex-start', // 자신을 시작점으로 하여 정렬합니다.
    marginHorizontal: '1%', // 좌우(margin) 여백을 지정합니다.
    marginTop: 6, // 버튼의 위쪽 여백입니다.
    marginBottom: 6, // 버튼의 아래쪽 여백입니다.
    minWidth: '48%', // 최소 너비를 지정합니다.
    textAlign: 'center', // 텍스트를 가운데 정렬합니다.
  },
  buttonLabel: {
    fontSize: 14, // 텍스트의 크기를 지정합니다.
    fontWeight: 'bold', // 텍스트의 굵기를 지정합니다.
    color: 'red', // 텍스트의 색상을 지정합니다.
  },
});

// 카운터 컴포넌트 정의
export default function Counter() {
  const [count, setCount] = useState(0); // 현재 카운트를 관리합니다.

  return (
    <View>
      {/* 현재 카운트를 보여주는 텍스트 */}
      <Text style={{padding: 10, fontSize: 50, fontWeight: 'bold'}}>{count}</Text>
      <View style={styles.container}>
        {/* 카운트를 증가시키는 버튼 */}
        <TouchableOpacity
          key='1' style={styles.button} 
          onPress={() => setCount(count + 1)} // 버튼 클릭 시 count 상태를 1 증가시킵니다.
          disabled={count >= 5} // count가 5 이상일 때 버튼을 비활성화합니다.
        >
          {/* 버튼의 레이블을 동적으로 변경합니다. */}
          <Text style={styles.buttonLabel}>{count < 5 ? '증가시키기' : '5 초과'}</Text>
        </TouchableOpacity>
        {/* 카운트를 리셋하는 버튼 */}
        <TouchableOpacity 
          key='2' style={styles.button}
          onPress={() => setCount(0)} // 버튼 클릭 시 count 상태를 0으로 리셋합니다.
        >
          <Text style={styles.buttonLabel}>리셋</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}  
