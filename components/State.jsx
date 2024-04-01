import React, { useState } from "react"; // React 및 useState 모듈을 가져옵니다.
import { View, Text, Button, Image } from "react-native"; // react-native의 View, Text, Button, Image를 가져옵니다.

export default function State({ name }) {
  const [isHungry, setIsHungry] = useState(true); // useState를 사용하여 상태 변수 isHungry와 해당 상태를 변경할 수 있는 함수 setIsHungry를 정의합니다.

  return (
    <View>
      <Image
        source={require('../assets/img/cats.jpg')} // 이미지를 가져옵니다.
        style={{ height: 200, width: 300, borderRadius: 20, padding: 10 }} // 이미지 스타일을 설정합니다.
      />
      <Text>
        I am {name}, and I am {isHungry ? 'hungry' : 'full'}! {/* 텍스트를 출력하며 name과 isHungry 상태에 따라 내용을 변경합니다. */}
      </Text>
      <Button
        onPress={() => { setIsHungry(false); }} // 버튼이 클릭되면 isHungry 상태를 false로 변경합니다.
        disabled={!isHungry} // isHungry가 true일 때만 버튼을 활성화합니다.
        title={isHungry ? '제발 우유를 주세요!!!' : '감사합니다!'} // 버튼의 제목을 isHungry 상태에 따라 설정합니다.
      />
    </View>
  );
}
