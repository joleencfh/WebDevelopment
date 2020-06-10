import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import  HomeScreen from './HomeScreen' ;
import  InfoScreen from './InfoScreen' ;
import  StepScreen from './StepScreen' ;
import  NewDocScreen from './NewDocScreen' ;
import  DocumentsListScreen from './DocumentsListScreen' ;
import DocCardScreen from './DocCardScreen';

const ScreenNavigator = createStackNavigator ({
    //Register screen as key-value pais
    //this way I inform react-navigation of the screens in the stack
    // Property name : value
    Home: HomeScreen,
    Info: InfoScreen,
    Step: StepScreen,
    DocsList: DocumentsListScreen,
    NewDoc: NewDocScreen,
    DocCard: DocCardScreen,

},


);

//exporting main component wrapper in CreateAppContainer : common set up
export default createAppContainer(ScreenNavigator);