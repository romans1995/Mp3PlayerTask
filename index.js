const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [2, 5] },
  ],

 playSong(song){
    console.log(`Playing ${song.title} from ${song.album} by ${song.artist} | ${convertDuration1(song.duration)}.`);
  }
}
// converts duration to minutes 
const convertDuration1 = (duration) =>{
 let min = String(Math.floor(duration / 60));
  let sec = String(duration % 60);
  min < 10 ? min = "0"+ String(min):min
  sec < 10 ? sec = "0"+ String(sec):sec
  return min+':'+sec
}
const convertDuration = (duration) =>{
  duration= duration.split(":");
  duration= parseInt(duration[0] *60) + parseInt(duration[1]);
  return duration;
 
}

function playSong(id) {
  for(let song of player.songs){
    if(song.id === id){
      return player.playSong(song);
    }
  }
  throw new Error("No such ID");
}

function removeSong(id) {
  const foundSongId = player.songs.findIndex(currSong => currSong.id === id);

  if (foundSongId === -1) {
   throw err; 
  }
  // Delete the song from the song list
  player.songs.splice(foundSongId, 1);
  for (let currPlaylist of player.playlists) {
  foundSongIndex = currPlaylist.songs.indexOf(id);
  if (foundSongIndex !== -1) {
   currPlaylist.songs.splice(foundSongIndex, 1);
        }
    }
}
// addSong
// Does an ID exist in the songs
function isIdExist (arr, id)
{
  for (let i=0; i<arr.length; i++){
    if (arr[i].id === id)
      return true;
  }
  return false;
}
// find max ID in song
function maxID (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i].id > max) 
      max = arr[i].id;
  }
  return max;
}
function addSong(title, album, artist, duration, id = maxID(player.songs)+1) {
  if (isIdExist(player.songs, id)){
    throw 'this id already exist!';
  }
  duration = convertDuration(duration);
  let newSong = {id,title,album,artist,duration};
  player.songs.push(newSong);
  return id;
}
  
// remove the playList 
function removePlaylist(id) {
  const foundSongId = player.playlists.findIndex(currSong => currSong.id === id);
  if (foundSongId === -1) {
   throw err; 
  }else{
  // // Delete the song from the song list
  player.playlists.splice(foundSongId, 1);
  }
}

function createPlaylist(name,id) {
  const uniquePlayList = [...new Set(player.playlists.map(item => item.id))];
  if (uniquePlayList.indexOf(id) !== -1 ){
      throw new Error("there is such ID");
        }else{
          let newSong = {id:id = uniqId(id) ,name}
          player.playlists.push(newSong);
          return id;
        }
}
function playPlaylist(id) {
  const uniquePlayList = [...new Set(player.playlists.map(item => item.id))];
  return uniquePlayList;
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
