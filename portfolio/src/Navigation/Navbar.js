import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/#/resume">Resume</a></li>
                    <li><a href="/#/skills">Skills</a></li>
                    <li><a href="/#/contact">Contact</a></li>
                    <li><a href="/#/about">About</a></li>
                </ul>
            </div>
        )
    }
}
