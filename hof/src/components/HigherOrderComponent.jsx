import React from 'react';
export default class HigherOrderComponent extends React.Component{
    //DEFINE THE STATE
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    //render users whose type as a designer
    renderItemsUserType = () => {
        const data = this.state.userData;
        var filterData = data.filter((user)=>{
            return(user.user_type === 'Designer')})
            .map((user)=>{
                return(
                    <React.Fragment key={user.id}>
                        <li className="list-elements">
                            <span>Id: {user.id}</span>
                            <span>Name: {user.name}</span>
                            <span>User Type:{user.user_type}</span>
                        </li>
                    </React.Fragment>
                )
            })
        return filterData
    }

    //render users whose names starting with the letter J
    renderItemsWithJ=()=>{
        const data = this.state.userData
        var filterData = data.filter((userName)=>{
            return(userName.name.startsWith('J'))
        })
        .map((user)=>{
            return(
                <React.Fragment key={user.id}>
                    <li className="list-elements">
                        <span>Id: {user.id}</span>
                        <span>Name: {user.name}</span>
                        <span>User Type: {user.user_type}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterData
    }

    //render users whose age should be greater than 28 and less than or equal to 50
    renderItemsWithAge=()=>{
        const data = this.state.userData
        var filterData = data.filter((age)=>{
            return(age.age>28 && age.age<=50)
        })
        .map((user)=>{
            return(
                <React.Fragment key={user.id}>
                    <li className="list-elements">
                        <span>Id: {user.id}</span>
                        <span>Name: {user.name}</span>
                        <span>User Type: {user.user_type}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterData
    }

    //render users to find the total years of experience of the designers
    renderItemsTotalYear=()=>{
        const data = this.state.userData
        var filterData = data.filter((user)=>{
            return(user.user_type==='Designer')
        })
        .map((user)=>{
            return user.years
        }).reduce(function(acc, score){
            var result = acc+score
            return(
                <React.Fragment>
                    <li className="list-elements">
                        <span>Ans: {result}</span>
                    </li>
                </React.Fragment>
            )
        });
        return filterData
    }

    //return the value to the render method 
    render(){
        return(
            // instead of a parent div tag we can also use React.Fragment
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul>{this.renderItemsUserType()}</ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <ul>{this.renderItemsWithJ()}</ul>
                </div>
                <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.renderItemsWithAge()}</ul>
                </div>
                <h1>Find the total years of the designers</h1>
                <div className="display-box">
                    <ul>{this.renderItemsTotalYear()}</ul>
                </div>
            </React.Fragment>
        )
    }
}
