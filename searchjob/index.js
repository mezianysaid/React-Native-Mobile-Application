/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {Provider as PaperProvider} from 'react-native-paper'
// import {SafeAreaProvider} from 'react-native-safe-area-context'
// import { ThemeProvider } from 'react-native-elements';
// export default main = () => {
    // return(
        // <SafeAreaProvider>
    //    <PaperProvider>
        // <ThemeProvider>
        // <App/>
        // </ThemeProvider>
    //    </PaperProvider>
    //    </SafeAreaProvider>

    // )
// }
AppRegistry.registerComponent(appName, () => App);
