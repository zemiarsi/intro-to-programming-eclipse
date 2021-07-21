const today = new Date()

const thisyear = today.getFullYear()


const footer= document.querySelector('footer')



const copyright= document.createElement('p')
console .log (copyright)

copyright.innerHTML= `&copy Betelehem  ${thisyear}`;

footer.appendChild(copyright)


const skills= [

    "JavaScript",
    "HTML",
    "CSS",
    "structural analysis",
    "problem-solving",
    "Attention to detail",
    " Teamwork"
]


const skillsSection=document.getElementById("skills")
const skillsList=skillsSection.querySelector('ul')

console.log(skills)

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');

    skill.innerHTML=skills[i];
    console.log(skill.innerHTML)

    skillsList.appendChild(skill)
}


const messageSection = document.getElementById("messages");
    
const messageList = messageSection.querySelector('ul')

const messageForm = document.getElementsByName("leave_message")[0]
console.log(messageForm)
messageSection.querySelector('h2').style.display='none'
messageForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const Name = e.target.name.value
    const Email = e.target.email.value
    const Message = e.target.message.value
    console.log(Name)
    console.log(Email)
    console.log(Message);

    messageForm.reset()

   
    const newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href="mailto:${Email}">${Name}</a> wrote: <span>${Message}</span>`
    console.log(newMessage)

    const removeButton=document.createElement("button")
    removeButton.innerHTML = "remove";
    removeButton.type = "button" 
     // css part
    removeButton.className="removeButton"
    //streach number 2
    const editButton = document.createElement('button')
    editButton.innerHTML = "edit";
    // css part
    editButton.type = "button"
    editButton.className = "editButton"


    newMessage.appendChild(removeButton)
    // streach number 2 going 
    newMessage.appendChild(editButton)

    messageList.appendChild(newMessage)
    //streach Goals going number 1
    messageSection.querySelector('h2').style.display=''
        
 
})
messageList.addEventListener("click", (e)=> {
if (e.target.tagName==="BUTTON") {
    if(e.target.innerHTML==='remove') {
        const li = e.target.parentNode
        const ul = li.parentNode
        ul.removeChild(li)
        //stretch Goals 1
        if(messageList.children.length===0){
            messageSection.querySelector('h2').style.display='none'
        }
        // stretch goal 2 edit button
    } else if (e.target.innerHTML==="edit"){
      const li = e.target.parentNode
      const span = li.firstElementChild.nextElementSibling
      const input = document.createElement('input')
      input.type = 'text'
      li.insertBefore(input,span)
      li.removeChild(span)
      e.target.innerHTML = 'save'

//strecth goal 2 save button
    } else if (e.target.innerHTML==="save"){
        const li = e.target.parentNode
        const input = li.firstElementChild.nextElementSibling
        const span = document.createElement('span')

       span.innerHTML = ` ${input.value}`
        li.insertBefore(span,input)
        li.removeChild(input)
        e.target.innerHTML = 'edit'
  
  
      }
}
    

})













// lesson-6-1 code start here

// const githubRequest = new XMLHttpRequest();

//Form the request details
// githubRequest.open("GET", `https://api.github.com/users/zemiarsi/repos`);

// send the request
// githubRequest.send();

//when we get data, read it

// function handleRepoData(repositories) {
//     // let repositories=JSON.parse(this.response);
    // console.log(repositories);

    //Get project section
    // const projectSection = document.getElementById('projects')

    // //Get ul list inside of section
    // const projectList = projectSection.querySelector('ul')

    // console.log(projectList)

    // //Loop over repositories
    // repositories.forEach(repo => {
    //         //Create new li element
    //         const project = document.createElement('li')
           
            
    //         //set innerText to repo name
    //         project.innerText = `${repo.name} ${repo.description}`

    //        //Add to list
    //         projectList.appendChild(project)
    //     })
    


//lesson-6-2 code start here
fetch(`https://api.github.com/users/zemiarsi/repos`)
.then(response=>response.json())
.then(data=>repo(data))
function repo(data) {
    let projectSection=document.getElementById("projects");
    let projectList=projectSection.querySelector('ul')
    for(let i=0; i<data.length; i++){
        let project = document.createElement('li');
        project.innerHTML=`<a href=${`${data[i].clone_url}`}>${data[i].name}</a>`
        projectList.appendChild(project)
}}

