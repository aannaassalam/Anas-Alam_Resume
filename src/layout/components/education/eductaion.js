import React, { Component } from 'react'
import './education.css';

export default class Eductaion extends Component {
    render() {
        return (
            <div className="education">
                <h3>Education</h3>
                <div className="details">
                    <div className="left">
                        <p>Techno India University</p>
                        <p>2020 - 2023</p>
                    </div>
                    <div className="right">
                        <p>B.Sc(H) Data Science</p>
                    </div>
                </div>
                <div className="details">
                    <div className="left">
                        <p>ST.Mary's High School</p>
                        <p>2018 - 2020</p>
                    </div>
                    <div className="right">
                        <p>Higher Secondary (Science)</p>
                    </div>
                </div>
                <div className="details">
                <div className="left">
                        <p>ST.Mary's High School</p>
                        <p>2005 - 2018</p>
                    </div>
                    <div className="right">
                        <p>Secondary</p>
                    </div>
                </div>
            </div>
        )
    }
}
