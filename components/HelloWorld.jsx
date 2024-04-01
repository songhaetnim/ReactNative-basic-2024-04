import React from "react";
import { View, Text } from "react-native";

// HelloWorld 컴포넌트를 정의합니다.
export default function HelloWorld() {
    return (
        // View 컴포넌트를 사용하여 화면의 가운데에 텍스트를 출력합니다.
        <View
          style={{
            flex: 1, // 화면 전체를 차지하도록 설정합니다.
            justifyContent: 'center', // 수직 방향으로 가운데 정렬합니다.
            alignItems: 'center', // 수평 방향으로 가운데 정렬합니다.
          }}>
          {/* 텍스트 컴포넌트를 사용하여 텍스트를 출력합니다. */}
          <Text>Try editing me! 🎉</Text>
          <Text>안녕하세요.</Text>
        </View>
      );
}
