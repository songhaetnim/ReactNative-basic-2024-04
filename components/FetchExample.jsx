import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";

// FetchExample 컴포넌트를 정의합니다.
export default function FetchExample() {
  // isLoading와 data를 상태로 정의합니다.
  const [isLoading, setLoading] = useState(true); // 데이터 로딩 상태를 관리합니다.
  const [data, setData] = useState([]); // 가져온 데이터를 저장합니다.

  // useEffect 훅을 사용하여 컴포넌트가 마운트되었을 때 데이터를 가져오는 부분을 처리합니다.
  useEffect(() => {
    // fetch 함수를 사용하여 API에서 데이터를 가져옵니다.
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json()) // JSON 형식으로 변환합니다.
      .then(obj => {
        // 가져온 데이터를 상태에 설정합니다.
        setData(obj.movies);
      })
      .catch(error => {
        console.error(error); // 에러가 발생하면 콘솔에 에러를 출력합니다.
      })
      .finally(() => {
        setLoading(false); // 데이터 가져오기가 완료되면 로딩 상태를 false로 변경합니다.
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행됩니다.

  return (
    // 화면을 구성하는 View 컴포넌트를 반환합니다.
    <View style={{ flex: 1, padding: 10 }}>
      {isLoading ? ( // 데이터를 가져오는 중인지 확인합니다.
        // 로딩 중인 경우에는 ActivityIndicator를 표시합니다.
        <ActivityIndicator />
      ) : (
        // 데이터를 모두 가져온 경우에는 FlatList를 표시합니다.
        <FlatList
          // 가져온 데이터를 FlatList에 전달합니다.
          data={data}
          // 각 아이템의 고유 키를 추출하여 설정합니다.
          keyExtractor={({ id }) => id}
          // 각 아이템을 렌더링하는 renderItem 함수를 설정합니다.
          renderItem={({ item }) => (
            // 각 아이템의 title과 releaseYear를 출력합니다.
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
}
