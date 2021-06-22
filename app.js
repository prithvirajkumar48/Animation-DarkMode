const moonPath = 
"M19 38C19 58.9868 40 76 40 76C17.9086 76 0 58.9868 0 38C0 17.0132 17.9086 0 40 0C40 1 19 17.0132 19 38Z";

const sunPath = 
"M80 38C80 58.9868 62.0914 76 40 76C17.9086 76 0 58.9868 0 38C0 17.0132 17.9086 0 40 0C62.0914 0 80 17.0132 80 38Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click',() => {
    //we need to use anime.js
    //we set up the timeline
    const timeline = anime.timeline({
        duration : 760,
        easing : "easeOutExpo"
    });
    // ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add(
        {
        targets: '#darkMode',
        rotate: 330
        }, 
        "-= 370"
    )
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)": "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, 
    "-= 710"
    );
    if(!toggle){
        toggle = true;

    }else{
        toggle = false;

    }

});
