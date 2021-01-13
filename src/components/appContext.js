import React, { Component }from 'react';

export const AppContext = React.createContext();

class AppContextProvider extends Component {

    state = {
        image: ''
    };
    updateImage = (image) => {
        this.setState({image: image});
    }
    render(){
        return (
            <AppContext.Provider value={{...this.state, updateImage: this.updateImage}}> 
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider;