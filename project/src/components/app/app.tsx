import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  placeCardCount: number;
};

function App(props: AppProps): JSX.Element {
  return <MainScreen placeCardCount={props.placeCardCount} />;
}

export default App;
