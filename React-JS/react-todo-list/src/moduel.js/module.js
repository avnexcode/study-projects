import {lazy} from "react"
const lazyLoad = (path, namedExport) => {
	return lazy(() => {
		const promise = import(path)
		if (namedExport == null) {
			return promise
		} else {
			return promise.then(module => {
				return {default: module[namedExport]}
			})
		}
 	})
}