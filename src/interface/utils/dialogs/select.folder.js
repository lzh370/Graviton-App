import { ipcRenderer } from 'electron'

/**
 * Opens a native dialog
 * to select folders
 * @constructor
 * @returns promise
 */
function selectFolderDialog() {
	return new Promise(async (resolve, reject) => {
		ipcRenderer
			.invoke('open-folder')
			.then(path => {
				resolve(path)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export default selectFolderDialog
