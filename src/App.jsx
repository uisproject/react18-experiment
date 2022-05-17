import HookExperiment from "./HookExperiments/HookExperiment";
import SuspenseComponent from "./SuspenseComponent/SuspenseComponent";
import UseEffectProblem from "./UseEffectProblem/UseEffectProblem";
import UseTransitionFetch from "./UseTransitionFetch/UseTransitionFetch";

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
      <SuspenseComponent />
    </>
  );
}

export default App;
