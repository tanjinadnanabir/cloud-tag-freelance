$(document).ready(function () {

  $('#popup').modal('show');
  let audioEl = document.getElementById('player');

  let userTags = [];
  let scores = [];
  let score = 0;
  let playListCount = 0;

  let responseArray =
    [
      {
        "mediaID": "1",
        "mediatype": "recording",
        "audioURL": "https://virtualassistant-seedscape-org.s3.amazonaws.com/test_songs/audio1.mp3",
        "imageURL": "",
        "tags": ["rainforest", "ant", "wind","wood", "cockatoo", "dawn", "koala", "mountain", "papua new duinea", "insect", "frog", "forest", "bird", "sing", "dawn chorus", "cicada", "birdsong", "tree tops"],
        "order": 1
      },
      {
        "mediaID": "2",
        "mediatype": "recording",
        "audioURL": "https://virtualassistant-seedscape-org.s3.amazonaws.com/test_songs/audio2.mp3",
        "imageURL": "",
        "tags": ["grassland", "worm", "africa", "spider", "bee", "savannah", "island", "woodland", "lake", "dawn", "chorus", "bird", "sing", "dawn chorus", "dove", "birdsong", "hippopotamus", "waterbird", "tree", "giraffe"],
        "order": 2
      },
      {
        "mediaID": "3",
        "mediatype": "recording",
        "audioURL": "https://virtualassistant-seedscape-org.s3.amazonaws.com/test_songs/audio3.mp3",
        "imageURL": "",
        "tags": ["bush", "australia", "beetle", "ocean", "nocturnal", "birdsong", "frog", "insect", "dusk", "night", "owl", "cricket", "dove", "tawny frogmouths"],
        "order": 3
      },
      {
        "mediaID": "4",
        "mediatype": "recording",
        "audioURL": "https://virtualassistant-seedscape-org.s3.amazonaws.com/test_songs/audio4.mp3",
        "imageURL": "",
        "tags": ["bush", "australia", "seagull", "nocturnal", "parrot", "birdsong", "frog", "insect", "dusk", "night", "owl", "cricket", "dove", "tawny frogmouths"],
        "order": 4
      },
      {
        "mediaID": "5",
        "mediatype": "recording",
        "audioURL": "https://virtualassistant-seedscape-org.s3.amazonaws.com/test_songs/audio5.mp3",
        "imageURL": "",
        "tags": ["bush", "butterfly", "water", "pigeon", "rain", "australia", "nocturnal", "birdsong", "frog", "insect", "dusk", "night", "owl", "cricket", "dove", "tawny frogmouths"],
        "order": 5
      }
    ];

  let entries = [

    { image: './images/ant.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Ant' },
    { image: './images/bee.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Bee' },
    { image: './images/beetle.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Beetle' },
    { image: './images/bird.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Bird' },
    { image: './images/butterfly.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Butterfly' },
    { image: './images/cockatoo.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Cockatoo' },
    { image: './images/dawn.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Dawn' },
    { image: './images/frog.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Frog' },
    { image: './images/island.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Island' },
    { image: './images/koala.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Koala' },
    { image: './images/night.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Night' },
    { image: './images/ocean.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Ocean' },
    { image: './images/owl.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Owl' },
    { image: './images/parrot.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Parrot' },
    { image: './images/pigeon.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Pigeon' },
    { image: './images/rain.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Rain' },
    { image: './images/seagull.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Seagull' },
    { image: './images/spider.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Spider' },
    { image: './images/water.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Water' },
    { image: './images/wind.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Wind' },
    { image: './images/wood.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Wood' },
    { image: './images/worm.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Worm' },
    // { image: './img/iPod.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'australia' },
    // { image: './img/Key.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'nocturnal' },
    // { image: './img/Location.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'birdsong' },
    // { image: './img/Location_Map.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'frogs' },
    // { image: './img/Map.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'insect' },
    // { image: './img/Megaphone.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'dusk' },
    // { image: './img/Message.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'night' },
    // { image: './img/Microphone.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'owl' },
    // { image: './img/Mobile.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'cricket' },
    // { image: './img/Money.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'tawny frogmouths' },
    // { image: './img/Padlock.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Meno equox' },
    // { image: './img/Pencil.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Iri orem' },
    // { image: './img/Photo.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Orel pas' },
    // { image: './img/Polaroid.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Psi sit' },
    // { image: './img/Printer.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Amet et quam' },
    // { image: './img/Record.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Molare cons' },
    // { image: './img/Save.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Digi tal' },
    // { image: './img/Scissors.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Felenope liber' },
    // { image: './img/Spanner.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Officia dolor' },
    // { image: './img/Toolbox.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Autem insto' },
    // { image: './img/Umbrella.png', width: '50', height: '50', url: '#', target: '_top', tooltip: 'Veniam isictus' }

  ];

  let settings = {

    entries: entries,
    width: 500,
    height: 330,
    radius: '75%',
    radiusMin: 100,
    bgDraw: true,
    bgColor: '#fff',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: '#111',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#000',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

  };

  let svg3DTagCloud = new SVG3DTagCloud(document.getElementById('holder'), settings);
  console.log(svg3DTagCloud);
  // $( '#holder' ).svg3DTagCloud( settings );


  function iconClickEvent(event) {
    if (userTags.length > 3) {
      alert("Oops, you’ve used up your four tags!");
      return;
    }
    if (userTags.length == 3) {
      $("#nextSong").prop("disabled", false);
    }
    if(playListCount+1 == 5){
      if(userTags.length == 3){
        console.log("Final Tag clicked")
        $("#finish").prop('disabled',false);
        $("#progress").val(5);
      }
      else{
        console.log("Final UserTag length short")
        $("#finish").prop('disabled',true);
        $("#progress").val(4);
      }
    }

    console.log("Insed Icon Click Track :",playListCount+1)

    let element = event.target;

    // Disable click event
    element.parentElement.style.pointerEvents = "none";
    element.parentElement.style.cursor = "pointer";

    let tagObject = entries.filter(item => {
      if (item.image == element.href.animVal)
        return item
    })
    let tag = tagObject[0].tooltip.toLocaleLowerCase();
    userTags.push(tag);

    let image = createImageElement(element);
    let closeIcon = createCloseIcon(element, tag, userTags);
    createIconSpan(image, closeIcon);
  }

  $("#holder svg a").on('click', function (event) {
    iconClickEvent(event);
  });

  $("#mClose").on('click', function (event) {
    audioEl.src = responseArray[playListCount].audioURL;
    let playPromise = audioEl.play();

    if (playPromise !== undefined) {
      playPromise.then(res => {
        console.log(res)
      })
        .catch(error => {
          console.log(error)
        });
    }
  });

  let volume = document.querySelector("#vol");
  volume.addEventListener("change", function (e) {
    audioEl.volume = e.currentTarget.value / 100;
  })

  // audioEl.addEventListener('ended', (event)=>{
  //   if(playListCount<media.length){
  //     
  //   }
  //   console.log(playListCount,event);
  // });

  audioEl.ontimeupdate = () => {
    let duration = audioEl.duration;
    if (duration)
      document.getElementById("remaining").innerHTML = (duration - audioEl.currentTime).toFixed(2);
  }

  $("#nextSong").on('click', function (e) {
    if (playListCount +1  < responseArray.length -1) {
      let remainingTime = document.getElementById("remaining").innerHTML;
      let mediaTags = responseArray[playListCount].tags;
      let result = mediaTags.filter(tag => userTags.includes(tag))

      let sc = remainingTime * (result.length / 4);
      let roundScore = parseFloat(sc.toFixed(2));
      scores.push(roundScore);

      score = score + roundScore;
      console.log("length", responseArray.length)
      console.log("Track", playListCount + 1)
      $("#score").html(score.toFixed(2));
      $("#nextSong").prop("disabled", true);
      $("#progress").val(playListCount + 1)

      // Refresh icon tag panel
      refreshIconPanel();
      userTags = [];

      console.log("Scores ", scores)
      console.log("Audio URL", responseArray[playListCount].audioURL)


      playListCount++;
      audioEl.src = responseArray[playListCount].audioURL;
      audioEl.play();


    }
    else {
      console.log("Next Else Clicked after Track", playListCount+1);
      $("#progress").val(playListCount+1);
      let remainingTime = document.getElementById("remaining").innerHTML;
      let mediaTags = responseArray[playListCount].tags;
      let result = mediaTags.filter(tag => userTags.includes(tag))

      let sc = remainingTime * (result.length / 4);
      let roundScore = parseFloat(sc.toFixed(2));
      scores.push(roundScore);

      score = score + roundScore;
      $("#score").html(score.toFixed(2));
      $("#nextSong").prop("disabled", true);
  

      // Refresh icon tag panel
      refreshIconPanel();
      userTags = [];
      console.log("Scores ", scores)
      console.log("Audio URL", responseArray[playListCount].audioURL)

      playListCount++;


      $("#nextSong").hide();
      $("#finish").removeClass("hidden");
      document.getElementById("holder").disabled = true;
    }
  });

  $("#finish").on('click', (e) => {
    let remainingTime = document.getElementById("remaining").innerHTML;
    let mediaTags = responseArray[playListCount].tags;
    let result = mediaTags.filter(tag => userTags.includes(tag))

    let sc = remainingTime * (result.length / 4);
    let roundScore = parseFloat(sc.toFixed(2));
    scores.push(roundScore);
    console.log("Final Scores ",scores)

    score = score + roundScore;
    $("#score").html(score.toFixed(2));
    $("#finish").prop("disabled", true);


    // Refresh icon tag panel
    refreshIconPanel();
    userTags = [];




    $("#finalScore").val(parseFloat(score.toFixed(2)));
    console.log("Finished Score", $("#finalScore").val());

    let form = document.getElementById('scoreForm');
    form.submit();
  })

});

function createCloseIcon(element, tag, userTags) {
  let closeIcon = document.createElement('button');
  closeIcon.name = element.id;
  closeIcon.className = "close";
  closeIcon.innerHTML = "x";
  closeIcon.onclick = function () {

    this.parentElement.remove();
    createEmptyIconSpan()
    if (userTags.length != 3) {
      $("#nextSong").prop("disabled", true);
      $("#finish").prop("disabled", true);
    }

    // enable disabled icon
    let disabledIconTag = document.getElementById(this.name).parentElement;
    disabledIconTag.style.pointerEvents = "auto";
    disabledIconTag.style.cursor = "pointer";

    // Remove tag from userTags
    for (item in userTags) {
      if (tag == userTags[item]) {
        userTags.splice(item, 1)
      }
    }
  }
  return closeIcon;
}

function createImageElement(element) {
  let image = document.createElement('img');
  image.src = element.href.baseVal;
  // console.log(element.href.animVal)
  image.height = 40;
  image.width = 40;
  image.className = "addedIcon"

  return image;
}

function createIconSpan(image, closeIcon) {
  let span = document.createElement('span');
  span.className = "img_wrp";
  span.appendChild(image);
  span.appendChild(closeIcon);
  let emptyHolder = document.getElementById("emptyIconHolder");
  emptyHolder.removeChild(emptyHolder.getElementsByTagName('span')[0])
  document.getElementById("iconHolder").appendChild(span);
}

function createEmptyIconSpan() {
  let span = document.createElement('span');
  let image = document.createElement('img');
  image.src = "./img/record-vinyl-solid.png";
  image.height = 40;
  image.width = 40;
  image.className = "addedIcon"
  span.appendChild(image);
  document.getElementById("emptyIconHolder").appendChild(span);
}

function refreshIconPanel(){
  let buttons = $("#iconHolder span button");

  for (i = 0; i < 4; i++) {
    let disabledIconTag = document.getElementById(buttons[i].name).parentElement;
    disabledIconTag.style.pointerEvents = "auto";
    disabledIconTag.style.cursor = "pointer";
  }

  $("#iconHolder .img_wrp").remove();
  createEmptyIconSpan();
  createEmptyIconSpan();
  createEmptyIconSpan();
  createEmptyIconSpan();
}




