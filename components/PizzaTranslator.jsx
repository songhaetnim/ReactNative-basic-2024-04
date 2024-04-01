import React, { useState } from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";

// PizzaTranslator 컴포넌트를 정의합니다.
export default function PizzaTranslator() {
  // 입력된 텍스트를 상태로 관리합니다.
  const [text, setText] = useState('');

  return (
    <View>
      {/* 텍스트 입력 필드를 렌더링합니다. */}
      <TextInput
        style={{ height: 40 }}
        placeholder="문장을 입력하세요."
        onChangeText={newText => setText(newText)} // 텍스트가 변경될 때마다 setText를 호출하여 상태를 업데이트합니다.
        defaultValue={text} // 텍스트 입력 필드의 초기값으로 상태 값을 설정합니다.
      />

      {/* 변환된 텍스트를 렌더링합니다. */}
      <Text style={{ padding: 10, fontSize: 40 }}>
        {/* 입력된 텍스트를 공백으로 분할하여 '🍕' 아이콘으로 대체합니다. */}
        {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}
