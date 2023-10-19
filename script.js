window.addEventListener("DOMContentLoaded", event => {
    displayName()
    displayBio()
    displayLink()
    contactAction()
  })


const displayName = () => {
    const nameDiv = document.querySelector('#name-container')
    const blinkDiv = document.querySelector('#blink-div')
    const divC = document.createElement('div')
    divC.innerText ='C'
    const divO = document.createElement('div')
    divO.innerText = 'o'
    const divL = document.createElement('div')
    divL.innerText = 'l'
    const divI = document.createElement('div')
    divI.innerText = 'i'
    const divN = document.createElement('div')
    divN.innerText = 'n'
    const divEmpty = document.createElement('div')
    divEmpty.setAttribute('id', 'empty-space')
    const divS = document.createElement('div')
    divS.innerText = 'S'
    const divU = document.createElement('div')
    divU.innerText ='u'
    const divN1 = document.createElement('div')
    divN1.innerText ='n'
    const divG = document.createElement('div')
    divG.innerText ='g'
    setTimeout(()=>{nameDiv.insertBefore(divC, blinkDiv)}, 5000)
    setTimeout(()=>{nameDiv.insertBefore(divO, blinkDiv)}, 5500)
    setTimeout(()=>{nameDiv.insertBefore(divL, blinkDiv)}, 6000)
    setTimeout(()=>{nameDiv.insertBefore(divI, blinkDiv)}, 6500)
    setTimeout(()=>{nameDiv.insertBefore(divN, blinkDiv)}, 7000)
    setTimeout(()=>{nameDiv.insertBefore(divEmpty, blinkDiv)}, 7500)
    setTimeout(()=>{nameDiv.insertBefore(divS, blinkDiv)}, 8000)
    setTimeout(()=>{nameDiv.insertBefore(divU, blinkDiv)}, 8500)
    setTimeout(()=>{nameDiv.insertBefore(divN1, blinkDiv)}, 9000)
    setTimeout(()=>{nameDiv.insertBefore(divG, blinkDiv)}, 9500)
}

const displayBio = () => {
    const sentence = "I am an aspiring full-stack Software Engineer with a strong foundation in JavaScript, Python, React, Express, Flask, CSS, and HTML. Known for my creative problem-solving skills and passion for technology, I am eager to contribute to innovative software solutions. My educational background includes a Bachelor's degree in Physics from UCLA, accompanied by interpersonal skills developed through leadership roles. With a track record in IT support, I've honed my ability to resolve complex issues independently. I'm now seeking an entry-level Software Engineer position to apply my skills and enthusiasm, aiming to make meaningful contributions to an organization's success."
 
    const aboutmeP = document.querySelector('#about-me-content')
    aboutmeP.innerHTML = sentence
    // let time = 1000
    // for(let char of sentence) {
    //     if(char === ' ') {
    //         time += 50
    //         const divEmpty = document.createElement('div')
    //         divEmpty.setAttribute('id', 'blank-space')
    //         setTimeout(()=>{
    //             aboutmeP.appendChild(divEmpty)
    //         }, time)
    //     } else {
    //     time += 50
    //     const div = document.createElement('div')
    //     div.innerText = char
    //     setTimeout(()=>{
    //         aboutmeP.appendChild(div)
    //     }, time)
    //     }
    // }

}

const displayLink = () => {
    const opentables = document.querySelector('.opentables-box')
    opentables.addEventListener("mouseenter", e =>{
      
        const opentablesLink = document.querySelector('#opentable-link') 
        opentablesLink.addEventListener('mouseenter', e=>{
            opentablesLink.setAttribute('class', 'active')
            const opentablesImg = document.querySelector('#opentables-img')
            opentablesImg.setAttribute('class', 'imgActive')
        })
        opentablesLink.setAttribute('class', 'active')
        const opentablesImg = document.querySelector('#opentables-img')
        opentablesImg.setAttribute('class', 'imgActive')
        
    })
   

    opentables.addEventListener("mouseleave", e=>{
      
        const opentablesLink = document.querySelector('#opentable-link') 
        opentablesLink.removeAttribute('class')
        const opentablesImg = document.querySelector('#opentables-img')
        opentablesImg.removeAttribute('class')
    })

    const aperture = document.querySelector('.aperture-box')
    aperture.addEventListener("mouseenter", e =>{
      
        const aperturLink = document.querySelector('#aperture-link') 
       aperturLink.addEventListener('mouseenter', e=>{
            aperturLink.setAttribute('class', 'active')
            const apertureImg = document.querySelector('#aperture-img')
            apertureImg.setAttribute('class', 'imgActive')
        })
        aperturLink.setAttribute('class', 'active')
        const apertureImg = document.querySelector('#aperture-img')
        apertureImg.setAttribute('class', 'imgActive')
        
    })

    aperture.addEventListener("mouseleave", e=>{
        const aperturLink = document.querySelector('#aperture-link') 
        aperturLink.removeAttribute('class')
        const apertureImg = document.querySelector('#aperture-img')
        apertureImg.removeAttribute('class')
    })

    const airbrb = document.querySelector('.airbrb-box')
    airbrb.addEventListener("mouseenter", e =>{
      
        const airbrbLink = document.querySelector('#airbrb-link') 
        airbrbLink.addEventListener('mouseenter', e=>{
            airbrbLink.setAttribute('class', 'active')
            const airbrbImg = document.querySelector('#airbrb-img')
            airbrbImg.setAttribute('class', 'imgActive')
        })
        airbrbLink.setAttribute('class', 'active')
        const airbrbImg = document.querySelector('#airbrb-img')
        airbrbImg.setAttribute('class', 'imgActive')
        
    })

    airbrb.addEventListener("mouseleave", e=>{
        const airbrbLink = document.querySelector('#airbrb-link')  
        airbrbLink.removeAttribute('class')
        const airbrbImg = document.querySelector('#airbrb-img')
        airbrbImg.removeAttribute('class')
    })

    
}

const contactAction = () => {
    const contactButton = document.querySelector(".contact-button")
    contactButton.addEventListener('click', e=>{
        const infoBox = document.querySelector('.contact-info-box')
        contactButton.style.display = 'none'
        infoBox.removeAttribute('class')
        infoBox.setAttribute('id', 'contact-info-container')
    })

    const parentContainer = document.querySelector(".contact-parent-container")
    parentContainer.addEventListener('mouseleave', e=>{
        const infoBox = document.querySelector('#contact-info-container')
        contactButton.setAttribute('class', 'contact-button')
        contactButton.style.display = 'inline-block'
        infoBox.setAttribute('class', 'contact-info-box')
        infoBox.removeAttribute('id', 'contact-info-container')
    })
}

