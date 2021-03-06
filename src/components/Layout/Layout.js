import React, {Component} from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Auxi';


class Layout extends Component{

    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
 
        sideDrawerToggleHandler=()=>{
        this.setState( (prevState)=>{
            return{showSideDrawer:!prevState.showSideDrawer};
        });
    }
    

    render(){
        return(
    <Aux>
        
   <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
   
   <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
   
       <main className={classes.Content}>
             {this.props.children}
       </main>


    </Aux>

        )
    }
        
    
};

 export default Layout;
