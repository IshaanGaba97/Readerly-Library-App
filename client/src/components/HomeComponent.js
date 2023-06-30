import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
            <div className="row mt-4 darkbg text-center justify-content-center">
            <h2 align="center"> Welcome to Readerly Library!</h2>
            </div>
            <div className="row darkbg">

        <br/><br/><br/>
        <br/><br/><br/>
            <h6 className='ml-5 mr-5'>
            The Readerly Library provides an interface for both librarians and students, facilitating efficient book management, user authentication, borrowing, returning, and reporting functionalities.
            It provide platform to students to easily browse the library's book catalog, search for specific book names or authors, and view detailed book information.
            Admins, on the other hand, have access to administrative features, allowing them to add new books to the catalog, update book details, and issue books. They can view borrowing history, handle reservations, and generate reports for library statistics and analysis.

            <br/><br/> </h6>
            </div>
            <div className="row darkbg justify-content-center">
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;