import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

// 스타일 시트를 생성합니다.
const style = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 }, // 컨테이너 스타일
  item: { padding: 10, fontSize: 18, height: 50 } // 아이템 스타일
});

// FlatListBasic 컴포넌트를 정의합니다.
export default function FlatListBasic() {
  return (
    // 전체를 감싸는 View 컴포넌트
    <View style={style.container}>
      {/* 제목을 나타내는 텍스트 */}
      <Text style={{ fontSize: 40, padding: 15, fontWeight: "bold" }}>
        내가 좋아하는 과일
      </Text>
      {/* FlatList 컴포넌트를 사용하여 과일 목록을 나타냅니다. */}
      <FlatList
        data={[
          { key: "Apple" },
          { key: "Banana" },
          { key: "cherry" },
          { key: "Orange" },
          { key: "Mango" }
        ]}
        renderItem={({ item }) => <Text style={style.item}>{item.key}</Text>}
      />
    </View>
  );
}
