import React from "react"; // React 모듈을 가져옵니다.
import { StyleSheet, View, Text, SectionList } from "react-native"; // react-native의 View, Text, SectionList, StyleSheet를 가져옵니다.

// 스타일을 설정합니다.
const styles = StyleSheet.create({
 container: { flex: 1 },
 sectionHeader: {
    paddingTop: 2, paddingRight: 10, paddingBottom: 2, paddingLeft: 10,
    fontSize: 16, fontWeight: 'bold', backgroundColor: 'rgba(247,247,247,1.0)',
 },
 item: { padding: 5, fontSize: 16, maxHeight: 24 },
});

// SectionListBasic 컴포넌트를 정의합니다.
export default function SectionListBasic() {
  return (
    <View style={styles.container}>
      {/* 제목을 나타내는 텍스트 컴포넌트를 추가합니다. */}
      <Text style={{ fontSize: 30, padding: 15, fontWeight: 'bold' }}>내가 좋아하는 과일</Text>
      {/* SectionList를 정의합니다. */}
      <SectionList
        sections={[
          { title: '토종', data: ['사과', '감', '배'] },
          { title: '수입', data: ['Banana', 'Mango', 'Orange'] }
        ]}
        // 각 아이템을 렌더링하는 함수를 설정합니다.
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        // 섹션 헤더를 렌더링하는 함수를 설정합니다.
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        // 각 항목의 키를 추출하는 함수를 설정합니다.
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}








// import React from "react";
// import { StyleSheet, View, Text, SectionList } from "react-native";

// // 스타일 시트를 정의합니다.
// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingRight: 10,
//     paddingBottom: 2,
//     paddingLeft: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247, 247, 247, 1.0)',
//   },
//   item: { padding: 5, fontSize: 16, maxHeight: 24 },
// });

// // SectionListBasic 컴포넌트를 정의합니다.
// export default function SectionListBasic() {
//   return (
//     <View style={styles.container}>
//       {/* 과일 섹션 리스트의 제목을 출력합니다. */}
//       <Text style={{ fontSize: 30, padding: 15, fontWeight: 'bold' }}>내가 좋아하는 과일</Text>
      
//       {/* SectionList 컴포넌트를 렌더링합니다. */}
//       <SectionList
//         sections={[
//           // 섹션과 해당 섹션에 속하는 항목을 정의합니다.
//           { title: '토종', data: ['사과', '감', '배'] },
//           { title: '수입', data: ['Banana', 'Mango', 'Orange'] }
//         ]}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} // 각 항목을 렌더링합니다.
//         renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>} // 각 섹션의 헤더를 렌더링합니다.
//         keyExtractor={item => `basicListEntry-${item}`} // 각 항목의 키를 추출합니다.
//       />
//     </View>
//   );
// }


