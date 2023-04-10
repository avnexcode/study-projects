import { lazy } from "react";
export const showData = (even) => {
  if (even === "") {
    return alert("please input something");
  }
  alert(even);
};

export const lazyLoad = (path, namedExport) => {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => {
        return { default: module[namedExport] };
      });
    }
  });
};
