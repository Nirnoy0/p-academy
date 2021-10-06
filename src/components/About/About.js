import React from 'react';
import 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center p-5">
                About P-Academy
            </h1>
            <p>A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.</p>

            <h1 className="text-center p-5">
                Our Vison
            </h1>
            <p>In computing, a visual programming language (VPL) is any programming language that lets users create programs by manipulating program elements graphically rather than by specifying them textually.A VPL allows programming with visual expressions, spatial arrangements of text and graphic symbols, used either as elements of syntax or secondary notation. For example, many VPLs (known as dataflow or diagrammatic programming)[3][4] are based on the idea of "boxes and arrows", where boxes or other screen objects are treated as entities, connected by arrows, lines or arcs which represent relations.</p>
        </div>
    );
};

export default About;