import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from '@remix-run/router';

type HistoryRouteProps = {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
};

function HistoryRoute(props: HistoryRouteProps) {
  const {history, basename, children} = props;

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRoute;
