import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponent from "./components/PureComp";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FrParentInput from "./components/FrParentInput";
import PortalDemo from "./components/PortalDemo";
import ErrorDemo from "./components/ErrorDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCountertTwo from "./components/ClickCountertTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ClassCounter from "./components/hooks/ClassCounter";
import HookCounter from "./components/hooks/HookCounter";
import HookCounterTwo from "./components/hooks/HookCounterTwo";
import HookCounterThree from "./components/hooks/HookCounterThree";
import HookCounterFour from "./components/hooks/HookCounterFour";
import ClassCounterOne from "./components/hooks/ClassCounterOne";
import HookCounterOne from "./components/hooks/HookCounterOne";
import ClassMouse from "./components/hooks/ClassMouse";
import HookMouse from "./components/hooks/HookMouse";
import MouseContainer from "./components/hooks/MouseContainer";
import IntervalClassCounter from "./components/hooks/IntervalClassCounter";
import IntervalHookCounter from "./components/hooks/IntervalHookCounter";
import DataFetching from "./components/hooks/DataFetching";
import DataFetchingById from "./components/hooks/DataFetchingById";
import React from "react";
import HookComponentX from "./components/hooks/HookComponentX";
import CounterOne from "./components/hooks/CounterOne";
import CounterTwo from "./components/hooks/CounterTwo";
import CounterThree from "./components/hooks/CounterThree";
import Component1 from "./components/hooks/Component1";
import Component2 from "./components/hooks/Component2";
import Component3 from "./components/hooks/Component3";
import { CountContext } from "./components/hooks/CountContext";
import DataFetchingOne from "./components/hooks/DataFetchingOne";
import DataFetchingTwo from "./components/hooks/DataFetchingTwo";
import ParentHookComponent from "./components/hooks/ParentHookComponent";
import HookMemoCounter from "./components/hooks/HookMemoCounter";
import HookUseRef from "./components/hooks/HookUseRef";
import CustomeHookOne from "./components/hooks/CustomeHookOne";
import CustomeHookTwo from "./components/hooks/CustomeHookTwo";
import CustomHookThree from "./components/hooks/CustomHookThree";
import CustomHookFour from "./components/hooks/CustomHookFour";

// export const UserContext = React.createContext();
// export const ChanelContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>

      <Greet name="Clarke" heroName="SuperName">
        <button>Click me</button>
      </Greet>

      <Greet name="Diana" heroName="WonderWoman" ></Greet>

      <Welcome name="Bruce" heroName="Batman"></Welcome>

      <Welcome name="Bruce" heroName="Batman"></Welcome>

      <Welcome name="Bruce" heroName="Batman"></Welcome> */}

      {/* <Message></Message> */}

      {/* <Counter></Counter> */}

      {/* <FunctionClick></FunctionClick> */}

      {/* <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}

      {/* <NameList></NameList> */}

      {/* <Form></Form> */}

      {/* <LifeCycleA></LifeCycleA> */}

      {/* <FragmentDemo></FragmentDemo> */}

      {/* <Table></Table> */}

      {/* <PureComp></PureComp> */}

      {/* <ParentComp></ParentComp> */}

      {/* <RefsDemo></RefsDemo> */}

      {/* <FocusInput></FocusInput> */}

      {/* <FrParentInput></FrParentInput> */}

      {/* <PortalDemo></PortalDemo> */}

      {/* <ErrorBoundary>
        <ErrorDemo heroName="Superman"></ErrorDemo>
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorDemo heroName="Batman"></ErrorDemo>
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorDemo heroName="Joker"></ErrorDemo>
      </ErrorBoundary> */}
      {/* 
      <ClickCounter name="Mark"></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* <ClickCountertTwo></ClickCountertTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => (isLoggedIn ? "Bob" : "Guest")}></User> */}

      {/* <Counter2
        render={(count, increamentCount) => (
          <ClickCountertTwo
            count={count}
            increamentCount={increamentCount}
          ></ClickCountertTwo>
        )}
      />
      <Counter2>
        render=
        {(count, increamentCount) => (
          <HoverCounterTwo
            count={count}
            increamentCount={increamentCount}
          ></HoverCounterTwo>
        )}
      </Counter2> */}

      {/* <UserProvider value="Bob">
        <ComponentC></ComponentC>
      </UserProvider> */}

      {/* <ComponentC></ComponentC> */}

      {/* <PostList></PostList> */}

      {/* <PostForm></PostForm> */}

      {/* <ClassCounter></ClassCounter> */}

      {/* <HookCounter></HookCounter> */}

      {/* <HookCounterTwo></HookCounterTwo> */}

      {/* <HookCounterThree></HookCounterThree> */}

      {/* <HookCounterFour></HookCounterFour> */}

      {/* <ClassCounterOne></ClassCounterOne> */}

      {/* <HookCounterOne></HookCounterOne> */}

      {/* <ClassMouse></ClassMouse> */}

      {/* <HookMouse></HookMouse> */}

      {/* <MouseContainer></MouseContainer> */}

      {/* <IntervalClassCounter></IntervalClassCounter>

      <IntervalHookCounter></IntervalHookCounter> */}

      {/* <DataFetching></DataFetching> */}

      {/* <DataFetchingById></DataFetchingById> */}

      {/* <UserContext.Provider value={"Bob"}>
        <ChanelContext.Provider value={"Code works"}>
          <HookComponentX></HookComponentX>
        </ChanelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne></CounterOne> */}

      {/* <CounterTwo></CounterTwo> */}

      {/* <CounterThree></CounterThree> */}

      {/* <DataFetchingOne></DataFetchingOne> */}

      {/* <DataFetchingTwo></DataFetchingTwo> */}

      {/* <ParentHookComponent></ParentHookComponent> */}

      {/* <HookMemoCounter></HookMemoCounter> */}

      {/* <HookUseRef></HookUseRef> */}

      {/* <CustomeHookTwo></CustomeHookTwo> */}

      <CustomHookThree></CustomHookThree>
      <CustomHookFour></CustomHookFour>
    </div>

    //   <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
    //     <div className="App">
    //       Count - {count}
    //       <Component1></Component1>
    //       <Component2></Component2>
    //       <Component3></Component3>
    //     </div>
    // </CountContext.Provider>
  );
}

export default App;
