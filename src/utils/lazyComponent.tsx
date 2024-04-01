import { Suspense } from "react";

export default function LazyComponent<P>(Component: React.ComponentType & any) {
  return function LazyComponent(props: P) {
    return (
      <Suspense fallback="Page is loading">
        <Component {...props} />
      </Suspense>
    );
  };
}
