import { StatusBar } from 'expo-status-bar'; // expo-status-bar 모듈을 가져옵니다.
import { StyleSheet, Image, ScrollView } from 'react-native'; // react-native의 StyleSheet, Image, ScrollView를 가져옵니다.
import HelloWorld from './components/HelloWorld'; // HelloWorld 컴포넌트를 가져옵니다.
import Cat from './components/Cat'; // Cat 컴포넌트를 가져옵니다.
import State from './components/State'; // State 컴포넌트를 가져옵니다.
import PizzaTranslator from './components/PizzaTranslator'; // PizzaTranslator 컴포넌트를 가져옵니다.
import FlatListBasic from './components/FlatListBasic'; // FlatListBasic 컴포넌트를 가져옵니다.
import SectionListBasic from './components/SectionListBasic'; // SectionListBasic 컴포넌트를 가져옵니다.
import FetchExample from './components/FetchExample'; // FetchExample 컴포넌트를 가져옵니다.
import Counter from './components/Counter';  // Counter 컴포넌트를 가져옵니다.

// 로고 이미지 URL 및 크기를 정의합니다.
const logo = { uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32 };

export default function App() {
  return (
    <ScrollView> {/* ScrollView를 사용하여 스크롤이 가능한 화면을 만듭니다. */}
      <Image source={logo} />
      <Counter />
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <FetchExample /> {/* FetchExample 컴포넌트를 화면에 렌더링합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <SectionListBasic /> {/* SectionListBasic 컴포넌트를 화면에 렌더링합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <FlatListBasic /> {/* FlatListBasic 컴포넌트를 화면에 렌더링합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <PizzaTranslator /> {/* PizzaTranslator 컴포넌트를 화면에 렌더링합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <State name='Run Tum Tugger' /> {/* State 컴포넌트를 화면에 렌더링하고 name 속성을 전달합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <Cat name='Maru' num='1' /> {/* Cat 컴포넌트를 화면에 렌더링하고 name 및 num 속성을 전달합니다. */}
      <Cat name='Run Tum Tugger' num='2' /> {/* Cat 컴포넌트를 화면에 렌더링하고 name 및 num 속성을 전달합니다. */}
      <Image source={logo} /> {/* 로고 이미지를 화면에 표시합니다. */}
      <HelloWorld /> {/* HelloWorld 컴포넌트를 화면에 렌더링합니다. */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
