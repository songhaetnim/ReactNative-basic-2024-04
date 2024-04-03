import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet } from 'react-native';
import HellowWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import Count from './components/Count';
import Exam from './components/Exam';

const logo ={
  uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32, };

export default function App() {
  return (
    <ScrollView>
      <Image source={logo} />
      <Exam />
      <Image source={logo} />
      <Count />
      <Image source={logo} />
      <FetchExample />
      <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasic />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name='Run Tum Tugger'/>
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Run Tum Tugger' num='2' />
      <Image source={logo} />
      <HellowWorld />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});










// 리액트 네이티브에서 사용할 StyleSheet를 불러옵니다.
// import { StatusBar } from 'expo-status-bar';
// import { Image, ScrollView, StyleSheet } from 'react-native';
// import HellowWorld from './components/HelloWorld';
// import Cat from './components/Cat';
// import State from './components/State';
// import PizzaTranslator from './components/PizzaTranslator';
// import FlatListBasic from './components/FlatListBasic';
// import SectionListBasic from './components/SectionListBasic';
// import FetchExample from './components/FetchExample';
// import Count from './components/Count';

// // 앱에서 사용할 로고 이미지
// const logo ={
//   uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32, };

// export default function App() {
//   return (
//     // ScrollView로 감싼 뷰, 스크롤 가능한 컨테이너 역할
//     <ScrollView>
//       {/* 상단에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* 카운트 컴포넌트 추가 */}
//       <Count />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* FetchExample 컴포넌트 추가 */}
//       <FetchExample />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* SectionListBasic 컴포넌트 추가 */}
//       <SectionListBasic />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* FlatListBasic 컴포넌트 추가 */}
//       <FlatListBasic />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* PizzaTranslator 컴포넌트 추가 */}
//       <PizzaTranslator />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* State 컴포넌트 추가 */}
//       <State name='Run Tum Tugger'/>
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* Cat 컴포넌트 추가 */}
//       <Cat name='Maru' num='1' />
//       <Cat name='Run Tum Tugger' num='2' />
//       {/* 중간에 로고 이미지 표시 */}
//       <Image source={logo} />
//       {/* HelloWorld 컴포넌트 추가 */}
//       <HellowWorld />
//     </ScrollView>
//   );
// }

// // 스타일 시트 정의
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // 컴포넌트가 화면 전체를 차지하도록 설정합니다.
//     backgroundColor: '#fff', // 배경색을 흰색으로 설정합니다.
//     alignItems: 'center', // 수직 방향 가운데 정렬합니다.
//     justifyContent: 'center', // 수평 방향 가운데 정렬합니다.
//   },
// });
