import HookExperiment from "./HookExperiments/HookExperiment";
import SuspenseComponent from "./SuspenseComponent/SuspenseComponent";
import UseEffectProblem from "./UseEffectProblem/UseEffectProblem";
import UseTransitionFetch from "./UseTransitionFetch/UseTransitionFetch";
import NoRouterMainComponent from "./NoRouterExperiment/NoRouterMainComponent";
import ManipulateApp from "./ManipulateData/ManipulateApp";
import HigherOrderComponentApp from "./HigherOrderComponent/HigherOrderComponentApp";

function App() {
  return (
    <>
      {/* Just comment if you want to experiment something else */}

      {/* Experimenting New React18 Hook  */}
      {/* <HookExperiment /> */}

      {/* useEffect problem */}
      {/* <UseEffectProblem /> */}

      {/* useTransition to play with fetching data without hiding the content */}
      {/* <UseTransitionFetch /> */}

      {/* Testing how to use Suspense Component */}
      {/* <SuspenseComponent /> */}

      {/* Creating pagination without any routing with switch-case */}
      {/* <NoRouterMainComponent /> */}

      {/* Learn how to modify or manipulate data  */}
      {/* <ManipulateApp /> */}

      {/* Learn how to use Higher Order Component */}
      <HigherOrderComponentApp />
    </>
  );
}

export default App;
