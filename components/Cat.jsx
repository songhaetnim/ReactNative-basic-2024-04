import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";

// Cat 컴포넌트를 정의합니다. name과 num을 props로 받습니다.
export default function Cat({ name, num }) {
  return (
    <View>
      {/* 고양이의 이름을 출력합니다. */}
      <Text>Hello, I am {name}.</Text>
      <View>
        {/* 
          해당 번호에 따른 고양이 이미지를 표시합니다.
          이미지 주소는 num에 따라 동적으로 변경됩니다.
        */}
        <Image
          source={{
            uri: `https://reactnative.dev/docs/assets/p_cat${num}.png`,
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}
