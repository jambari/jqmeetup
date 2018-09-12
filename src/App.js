import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="left-header" >
                <span>Qtemu</span>
                <a href="" >Create Meetup</a>
                <a href="" >Explore</a>
            </div>
            <a href="">login</a>
        </header>
        <section className="current-meetup">
            <div className="logo-meetup">
            </div>
            <div className="detail-meetup">
                <h3>Hacktiv8 Meetup</h3>
                <table>
                    <tr>
                        <td>Location</td>
                        <td> Jakarta, Indonesia </td>
                    </tr>
                    <tr>
                        <td>Members</td>
                        <td>1,078</td>
                    </tr>
                    <tr>
                        <td>Organizer</td>
                        <td>Adhy Wiranata</td>
                    </tr>
                </table>
                <button type="submit" className="btn-joinus" >Join Us</button>
            </div>
        </section>
        <section className="next-meetup">
            <h3>Next Meetup </h3>
            <div>
                <p>Awesome Meetup and event</p>
                <p><small>25 january 2019</small></p>
                <p>
                    Hello JavaScript & Node.js Ninjas! <br/>
                    Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br/>
                    The meetup format will contain some sort stories and technikal talks.<br/>
                    If you have a short announcement you'd like to share with the audience, you may so during mic announcement.
                </p>
                <p>Remember to bring a photo ID to get through building security.</p>
                <p>-----</p>
                <p>See you there!</p>
                <p>Best, Hengki, Giovanni,Sofian, Rizza, Agung The JakartaJS Organizers</p>
            </div>
        </section>
        <section className="about-meetup" >
            <h3>About Meetup</h3>
            <div>
                <p>
                    Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.
                </p>
                <p>
                    Twitter: &#x00040;JakartaJS and we use the hashtag &#35;jakartajs
                </p>
            </div>
        </section>
        <section className="members-meetup">
            <div> <h3>Members</h3> </div>
            <div> <a href="#">See all</a> </div>
        </section>
        <section className="member-list" >
            <div className="member-pic"></div>
            <div>
                <b>Organizers</b>
                <p>Adhy Wiranata</p>
            </div>
            <div className="others-member">
                <p>4 others</p>
            </div>
        </section>
        {/* past meetup */}
        <section className="past-meetup">
            <div> <h3>Past Meetups</h3> </div>
            <div> <a href="#">See all</a> </div>
        </section>
        <section className="list-pastmeetup" >
            <div className="detail-pastmeetup">
                <h4>27 November 2017</h4>
                <p>#39 JakartaJS April Meetup with kumparan</p>
                <p>139 <small>went</small></p>
                <button type="" className="btn-view" >View</button>
            </div>
            <div className="detail-pastmeetup">
                <h4>27 October 2017</h4>
                <p>#38 JakartaJS April Meetup with BliBli</p>
                <p>113 <small>went</small></p>
                <button type="" className="btn-view" >View</button>
            </div>
            <div className="detail-pastmeetup">
                <h4>27 September 2017</h4>
                <p>#37 JakartaJS April Meetup with Hacktiv8</p>
                <p>110 <small>went</small> </p>
                <button type="" className="btn-view" >View</button>
            </div>
        </section>
        <footer>
            <b>Copyright Hacktiv8 2018</b>
        </footer>
      </div>
    );
  }
}

export default App;
