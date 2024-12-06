import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 dark:text-white mb-1 md: mb-3 font-bold">Margaret</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Aspiring Software Engineer & Web Developer</p>
            <p className="text-md max-w-x1 mb-6">
                Hello!
                <br/>
                My name is Margaret, and I am an aspiring software engineer and web developer. 
                Currently, I work as an independent contractor on AI training projects, 
                where I contribute to cutting-edge technology initiatives.
                I'm pursuing a Bachelor of Science in Software Engineering degree and am 
                continuously expanding my skills by teaching myself to code.
                <br/> 
                I have a passion for learning new things and bringing my ideas 
                to life through creative problem-solving.
                As a self-taught coder, many of my projects stem from tutorials, 
                but I always add my unique touch to showcase my creativity and individuality.
            </p>
        </div>
    )
}

export default Intro;