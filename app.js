

const playbutton=document.querySelector('#pbutton')
const songlist=document.querySelector('#songlist')
const porgress=document.querySelector('#progress')

const front=document.querySelector('#front')
const back=document.querySelector('#back')



let songs=[
    {
        name:"song1",
        id:1,

    },
    {
        name:"song2",
        id:2,

    },
    {
        name:"song3",
        id:3,

    },
    {
        name:"song4",
        id:4,

    },
    {
        name:"song5",
        id:5,

    },
]



const audio=new Audio('./assets/song1.mp3')
let currindex=1;


for(let song of songs)
{
    const li=document.createElement('li');

    li.innerText=song.name,

    li.setAttribute('id',song.id)

    li.classList.add('song-items') // styling ke lie class add kar di 


    songlist.appendChild(li);
}

playbutton.addEventListener('click',function()
{
     audio.paused  ? audio.play() : audio.pause();

    if(playbutton.children[0].classList.contains('fa-circle-play'))
    {
        playbutton.children[0].classList.remove('fa-circle-play');
        playbutton.children[0].classList.add('fa-circle-pause');

    }
    else{

        playbutton.children[0].classList.remove('fa-circle-pause');
        playbutton.children[0].classList.add('fa-circle-play');

        
    }
})

audio.addEventListener('timeupdate',function()
{

    const ctime= (audio.currentTime * 100 )/ audio.duration  ;

    porgress.value=ctime;

})


//input apne hisab se age peeche karna 

porgress.addEventListener('change' ,function()
{
    const updatetime= audio.duration * porgress.value  /100  ;

    audio.currentTime=updatetime;

})

//apne hisab se gane change karo 


songlist.addEventListener('click', function(e)
{
    let sondid=e.target.getAttribute('id');
    audio.src=`./assets/song${sondid}.mp3`

 
    audio.currentTime=0;
    audio.play();
    playbutton.children[0].classList.remove('fa-circle-play');
    playbutton.children[0].classList.add('fa-circle-pause');



})


front.addEventListener('click',function()
{

   currindex=(currindex +1) % songs .length;

   let next=songs[currindex].id;
   audio.src=`./assets/song${next}.mp3`
    audio.currentTime=0;
    audio.play();
    playbutton.children[0].classList.remove('fa-circle-play');
    playbutton.children[0].classList.add('fa-circle-pause');

})



back.addEventListener('click',function()
{

   currindex=(currindex -1);

   if(currindex==0)
   {
    currindex=5
   }

   let next=songs[currindex].id;
   audio.src=`./assets/song${next}.mp3`
    audio.currentTime=0;
    audio.play();
    playbutton.children[0].classList.remove('fa-circle-play');
    playbutton.children[0].classList.add('fa-circle-pause');





    
    


   

})



